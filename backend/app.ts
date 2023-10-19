import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./src/routes/routes.allRoutes.ts";

const app = new Application();
const PORT = 8080;



app.use(router.routes());
app.use(router.allowedMethods());





console.log(`Application is listening on port: http://localhost:${PORT}`);

await app.listen({ port: PORT});