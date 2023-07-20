export const onRequest = () => {
  console.log("called 10");
  return new Response("Response from function");
};
