export const onRequest = () => {
  console.log("called 2");
  return new Response("Response from function");
};
