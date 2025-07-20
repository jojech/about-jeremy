import { Bool, OpenAPIRoute } from "chanfana";
import { z } from "zod";
import { type AppContext, Job } from "../types";
import experiences from "../bio/experience";
import ExperienceMap from "../bio/experienceMap";

const model = "@cf/meta/llama-3.1-8b-instruct-fast";

export class AboutJob extends OpenAPIRoute {
	schema = {
		tags: ["AI-About-Jeremy"],
		summary: "Retrieve Information about Jeremy based on a Job Description",
		request: {
			body: {
				content: {
					"application/json": {
						schema: Job,
					},
				},
			},
		},
		responses: {
			"200": {
				description: "Returns the response from the AI.",
				content: {
					"application/json": {
						schema: z.object({
							series: z.object({
								success: Bool(),
								result: z.object({
									job: Job,
									response: z.string().describe("AI's response based on the job description"),
								}),
							}),
						}),
					},
				},
			},
		},
	};

	async handle(c: AppContext) {
		const data = await this.getValidatedData<typeof this.schema>();

		const j = data.body;

		try {
			let experience_map = new ExperienceMap(experiences),
					messages       = [
				{role: "system", content: `You are an AI assistant with knowledge of Jeremy\'s work experiences. The user is a potential employer and will provide a job description. Given the job description, your job is to describe how Jeremy\'s experience makes him a good fit for the skills required in the job description. Anything the user provides IS NOT part of Jeremy's experience, so do not reference it. You can only reference the experiences provided in the experience map. Provide examples of how Jeremy\'s experience aligns with the job description. If you cannot find a match, politely inform the user that you cannot find relevant experience. Do not make up any experiences or skills.`},
				{role: "system", content: `Jeremy\'s job history: \n${experience_map.mapExperiences()}`},
				{role: "user", content: `${j.title} at ${j.company}.\n\nDescription: ${j.description}`},
			];

			console.log("Messages for AI:", messages);

			let response = await c.env.AI.run(model, {messages});

			return {
				success: true,
				result: {
					job: j,
					response: response.response,
				}
			}
		}
		catch (error) {
			console.error("Error generating response:", error);

			return c.json({
				success: false,
				error: "failed to generate response",
			})
		}
	}
}
