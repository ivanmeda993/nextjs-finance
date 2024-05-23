import { Hono } from "hono";
import { handle } from "hono/vercel";
import { z } from "zod";
import categories from "./categories";

export const runtime = "edge";

const userSchema = z.object({
  name: z.string(),
  age: z.number(),
});
const app = new Hono().basePath("/api");

const routes = app.route("/categories", categories);

export default app;
export type AppType = typeof routes;

export const GET = handle(app);
export const POST = handle(app);
