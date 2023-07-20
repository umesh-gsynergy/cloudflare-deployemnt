export const onRequest = () => {
  console.log("called 3");
  return new Response("Response from function");
};
