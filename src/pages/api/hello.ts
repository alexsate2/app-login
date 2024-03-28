// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const config = {
  runtime: 'edge'
}

declare const EdgeRuntime: any;

export default function handler() {
  return Response.json(
    {
      name: "API Edge Runtime",
      region: ""+process.env.VERCEL_REGION,
      isEdge: typeof EdgeRuntime !== 'string' ? false : true,
      process: process,
    });
}