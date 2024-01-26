export const getNavi = async function () {
  const res = await fetch('http://localhost:3000/profile')
  const data = await res.json();
  return data;
}