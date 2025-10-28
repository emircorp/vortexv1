export async function GET() {
  const ip = await fetch("https://api64.ipify.org?format=json").then(r => r.json());
  return new Response(JSON.stringify(ip), { headers: { "content-type": "application/json" }});
}
