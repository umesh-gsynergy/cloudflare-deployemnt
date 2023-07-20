export const onRequest = () => {
  console.log("called 5");
  return new Response("Response from function");
};
