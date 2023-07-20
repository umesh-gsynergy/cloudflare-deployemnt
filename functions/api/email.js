export const onRequest = () => {
  console.log("called 6");
  return new Response("Response from function");
};
