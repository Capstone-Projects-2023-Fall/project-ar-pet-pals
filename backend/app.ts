import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./src/routes/routes.allRoutes.ts";

const app = new Application();
const PORT = 443;

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Application is listening on port: http://localhost:${PORT}`);

await app.listen({
  port: PORT,
  secure: true,
  certFile: "/etc/letsencrypt/live/arpetpals.store/fullchain.pem",
  keyFile: "/etc/letsencrypt/live/arpetpals.store/privkey.pem",
});
