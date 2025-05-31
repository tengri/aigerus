export async function getFlats() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/flats");
  const jsonRes = await res.json();
  console.log("jsonRes: ", jsonRes);
  return jsonRes;
}
