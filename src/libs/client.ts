import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'yuta9-page',
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
});
