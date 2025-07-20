import { DateTime, Str } from "chanfana";
import type { Context } from "hono";
import { z } from "zod";

export type AppContext = Context<{ Bindings: Env }>;

export const Job = z.object({
	title: Str({ example: "Software Engineer" }),
	company: Str({ example: "Tech Company" }),
	description: Str({ example: "We are looking for an ambitious and talented Software Engineer!\n\nRequirements: \n- Worked on various projects involving react.js, node.js, and typescript.\n- Self-starter that takes initiative and works independently." }),
});
