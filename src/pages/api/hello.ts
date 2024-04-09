// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const config = {
  runtime: 'edge',
 // regions: ['sin1', 'hnd1'],
}
export const maxDuration = 2;

declare const EdgeRuntime: any;

export default async function handler(request: Request) {


  request.headers.set("X-Your-Custom-Header", "Your custom header value");
  if (request.headers.get("no-external-request")) {
    return Response.json({ name: "API Edge Runtime. no external request.", 
    region: ""+process.env.VERCEL_REGION, 
    isEdge: typeof EdgeRuntime !== 'string' ? false : true,
    ip: request.headers.get("x-forwarded-for"),
     process: process });
  }

  const r = await fetch("https://api.vercel.com/v4/aliases/example.vercel.app?from=1540095775951&projectId=prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB&since=1540095775941&teamId=SOME_STRING_VALUE&until=1540095775951", {
    "headers": {
      "Authorization": "Bearer <TOKEN>"
    },
    "method": "get"
  })


  return Response.json(
    {
      name: "API Edge Runtime.",
      r: await r.json(),
      region: ""+process.env.VERCEL_REGION,
      isEdge: typeof EdgeRuntime !== 'string' ? false : true,
      process: process,
    });
}