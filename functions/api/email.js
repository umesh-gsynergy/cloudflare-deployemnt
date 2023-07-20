export const onRequest = () => {
  console.log("called");
  return new Response("Response from function");
};
