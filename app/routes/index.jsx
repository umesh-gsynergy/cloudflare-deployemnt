import { client } from "../models/contentful.sever"
import { useLoaderData } from "@remix-run/react";

export async function loader({ context }) {
	const products = await client.getProducts(context);
  return { products }
}

export default function Index() {
  const {products} = useLoaderData();

  async function onClick() {
    console.log("clicked");
     try {
      const result = await fetch("/api/email").then(res => res.text());
      console.log("result", { result })
     } catch (error) {
      console.log("error", error)
     }
  }

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

        <div style={{marginTop : "50px"}}>
          <button onClick={onClick}>Click Me</button>
        </div>
        </div>
      </main>
    </div>
  );
}
