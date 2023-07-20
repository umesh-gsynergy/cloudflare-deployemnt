export const onRequest = () => {
  console.log("called 12");
  return new Response("Response from function");
};
