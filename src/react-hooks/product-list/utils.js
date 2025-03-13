export default async () => {
  const response = await fetch('/public/products.json');
  return response.json();
};