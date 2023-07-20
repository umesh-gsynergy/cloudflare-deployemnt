export const onRequest = () => {
  console.log("called 4");
  return new Response("Response from function");
};
