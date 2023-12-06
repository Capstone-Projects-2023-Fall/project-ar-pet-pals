import { Application } from "https://deno.land/x/oak/mod.ts";
import { getHealthRating } from "./path-to-your-controller/controller.health.ts";

const app = new Application();

app.use(async (context) => {
    await getHealthRating(context);
});

await app.listen({ port: 8000 });

//run using  deno run --allow-net server.ts