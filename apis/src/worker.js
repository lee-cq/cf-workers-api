/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { Router, listen } from "worktop";

const router = new Router()

router.add("GET", "/", async (_request, response) => {
	response.send(200, "ok apis.");
});

router.add("GET", "/", async (_request, response) => {
    response.send(200, "Hello, Cloudflare, Hello worktop!");
  });
  
listen(router.run());
