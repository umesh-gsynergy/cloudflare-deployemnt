import { client } from "../models/contentful.sever"
import { useLoaderData } from "@remix-run/react";

export async function loader({ context }) {
  const { env } = context;
	const products = await client.getProducts();
  return {products, env}
}

export default function Index() {
  const {products, env} = useLoaderData();

  console.log("env",env)

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <main>
        <div style={{display : "flex", justifyContent : "center", alignItems : "center", gap : "50px"}}>
        {products.map(product => {
           return <div key={product.name}>
              <img src={product.image} style={{width : "250px", objectFit : "contain"}}/>
              <div style={{fontWeight : "500", margin: '12px',}}>{product.name}</div>
              <a href={product.link} style={{    
                height: "36px",
                background: "#1957c58c",
                width: "80%",
                color: "white",
                textDecoration: "none",
                lineHeight: "36px",
                fontSize: "12px",
                borderRadius: "5px",
                display : "inline-block",
                textAlign : "center"
                }}>View product</a>
           </div>
        })}
        </div>
      </main>
    </div>
  );
}
