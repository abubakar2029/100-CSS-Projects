import axios from "axios";
import React, { useEffect, useState } from "react";

function CardsPanel() {
  const [products, setProducts] = useState<any[]>([]);
  async function fetch() {
    // const res = await axios.get("https://fakestoreapi.com/products");
    // console.log(res.data);
    const products = [
      {
        id: 1,
        title: "Short Title",
        price: 19.99,
        description: "A short description.",
      },
      {
        id: 2,
        title: "Medium-Length Title",
        price: 29.99,
        description:
          "A medium-length description that provides some details about the product.",
      },
      {
        id: 3,
        title: "Very Long Title with Lots of Words",
        price: 39.99,
        description:
          "This is a very long description intended to showcase a product with an extensive overview. It includes details about the features, benefits, and potential uses of the product. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        id: 4,
        title: "Short Title Again",
        price: 49.99,
        description: "Another short description for a different product.",
      },
      {
        id: 5,
        title: "Long Title with Many Words and Details",
        price: 59.99,
        description:
          "This product has a lengthy title with a detailed description. It provides information about the specifications, materials used, and how customers can benefit from using it. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
      {
        id: 6,
        title: "Brief Title",
        price: 69.99,
        description: "A brief description.",
      },
      {
        id: 7,
        title: "Title with Some Length",
        price: 79.99,
        description: "A description with some details about the product.",
      },
      {
        id: 8,
        title: "Very Short Title",
        price: 89.99,
        description: "A very short description.",
      },
      {
        id: 9,
        title: "Title with Details",
        price: 99.99,
        description:
          "A description containing details and information about the product.",
      },
      {
        id: 10,
        title: "Title with Additional Information",
        price: 109.99,
        description:
          "A detailed description with additional information for the product.",
      },
    ];

    setProducts(products);
  }
  return (
    <>
      <button
        className="bg-teal-800 p-3 rounded text-white m-3 font-bold"
        onClick={fetch}
      >
        Fetch Data
      </button>
      <section className="grid grid-cols-3 gap-3 grid-rows-3">
        {/* cards-by-map */}
        {products.map((item: any) => {
          return (
            <div className="bg-green-400 min-w-32 grid grid-rows-subgrid row-span-3 gap-y-1">
              {/* image-div */}
              <a className="mb-2.5 bg-fuchsia-500 row-span-2">
                <figure className=" h-44"></figure>
              </a>
              {/* content */}
              <div className="text-center grid">
                <h3 className="text-xs mb-1">{item.title}</h3>
                <p className="">{item.description}</p>
                <span className="text-red-600 font-bold self-end justify-self-center">
                  {item.price}
                </span>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default CardsPanel;
