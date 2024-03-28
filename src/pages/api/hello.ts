// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const config = {
  runtime: 'edge'
}

declare const EdgeRuntime: any;

export default function handler() {
  return Response.json(
    { name: "API Edge Runtime" 
    ,isEdge: typeof EdgeRuntime !== 'string' ? false : true
 });
}