/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { Router, listen } from 'worktop';
import { send_mail } from './mail/index.js';
import { httpdns } from './resolve/index.js';

const router = new Router()

async function api_index(request, response) {
  response.send(200, "ok apis.");
}

router.add("GET", "/", api_index);

router.add("POST", '/mail/send', send_mail);

router.add("GET", '/httpdns/d', httpdns);

listen(router.run);
