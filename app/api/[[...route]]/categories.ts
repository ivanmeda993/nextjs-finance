import { Hono } from "hono";

const app = new Hono()
  .get("/", async (c) => {
    const data = {
      id: "1",
      name: "My Category",
    };

    return c.json({ data });
  })
  .post("/", (c) => c.json("create a book", 201))
  .get("/:id", (c) => c.json(`get ${c.req.param("id")}`));

export default app;
