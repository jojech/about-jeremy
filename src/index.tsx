import { fromHono } from "chanfana";
import { Hono } from "hono";
import { AboutJob } from "./endpoints/about-job";

import Wrapper from "./components/wrapper";
import HomePage from "./pages/main";

// Start a Hono app
const app = new Hono<{ Bindings: Env }>();

// Setup OpenAPI registry
const openapi = fromHono(app, {
	docs_url: "/docs",
});

// Register OpenAPI endpoints
openapi.post("/api/about-job", AboutJob);

// Register other endpoints
app.get("/", (c) => {
	return c.render(<Wrapper title="Jeremy Johnson" description="Full Stack Software Developer" className="bg--gradient"><HomePage /></Wrapper>)
});

// Export the Hono app
export default app;
