// export const dynamic = "force-static";

export async function GET() {
  const res = await fetch(
    "http://kidskiosk.runasp.net/api/Product/get-all-products"
  );
  const data = await res.json();

  return Response.json({ data });
}
