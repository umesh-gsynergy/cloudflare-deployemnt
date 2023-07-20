export const onRequest = () => {
  console.log("Called");
  return new Response("Response from function");
};
