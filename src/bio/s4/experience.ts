import { Experience, CompanySource } from "../experience";

const base = {
  source: 'Speak4' as CompanySource,
  year: 2025,
  title: 'Lead Senior Software Engineer',
  role: 'Lead Developer',
}

const s4experiences: Experience[] = [
  {
    ...base, label: 'AI Smoothing Functionality',
    tech: ['TypeScript', 'JavaScript', 'Node.js', 'Cloudflare Workers', 'Workers AI', 'Cloudflare R2', 'Jest Unit Testing'],
    purpose: 'Develop a new AI-powered tool to refine and polish messages from grassroots advocates. Advocates answer questions provided by partners using our platform, and the tool generates a professional message to their lawmakers based on their responses.',
    outcome: 'Feature launched successfully with overwhelming positive feedback. Lawmakers utilize technology to group messages by content. This feature allows advocates to generate quality diverse output to circumvent message grouping functionality.',
    durationWeeks: 2,
  },
  {
    ...base, label: 'Action Review',
    role: 'Team Lead',
    tech: ['REST APIs', 'PHP', 'MySQL', 'Lambda', 'AWS', 'AI', 'JavaScript', 'Linux', 'Nginx', 'Apache'],
    purpose: 'Build a new tool to flag advocate submissions that have toxic content in their contact information or message, or that have an invalid address.',
    outcome: 'Tool launched successfully with overwhelming positive feedback. Partners loved the ability to catch troublesome submissions and the improved UI sped up processes tenfold.',
  },
  {
    ...base, label: 'AWS Migration',
    tech: ['Lambda', 'AWS', 'MySQL', 'Node.js', 'API Gateway', 'S3', 'Sendgrid', 'REST APIs'],
    purpose: 'Build a CRUD API, and migrate existing functionalities into VPCs or to use the new API in order to meet requirements for SOC 2 Type 2 security certification.',
    outcome: 'Migration completed successfully with no downtime or noticeable effect on users.'
  },
  {
    ...base, label: 'Form Crammer',
    role: 'Team Lead',
    tech: ['TypeScript', 'Node.js', 'Puppeteer', 'Lambda', 'Docker', 'AWS', 'SQS', 'SNS', 'MySQL'],
    purpose: 'Build a serverless tool to beat captchas and fill out contact forms on behalf of advocates. Utilize queues and lambdas to scale with demand and process messages quickly.',
    outcome: 'Tool launched successfully with over 50k messages processed in the first 24 hours. Tool has proven to be much easier to maintain than our previous methods.'
  }
]

export default s4experiences;