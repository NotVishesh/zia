import React from 'react';
import Image from 'next/image';



export default function Home() {

  //Todo: Fetch the product from the API
  const product = {
    name: "T shirts",
    description: "Best T shirt in the world",
    category: { _ref: "62a379b5-c494-4881-86e1-ae5c6cbbd024", _type: "reference" },
    specifications: [{ key: "age", value: 10, _type: "specification", _key: "ed8cccc9d9af" }],
    image: {
      asset: { _ref: "image-f58eafc199aa45a27efaa6e4882d6ff3dfe667f9-682x1024-png", _type: "reference" },
    },
    variations: [
      {
        color: { hex: "#1a088e", _type: "color" },
        sizeVariations: [
          { size: "XL", stock: 900, quantity: [{ price: 100, range: "1-11", _type: "quantityPrize" }] },
          { size: "L", stock: 69, quantity: [{ price: 101, range: "1-11" }, { price: 99, range: "12-35" }] },
        ],
      },
    ],
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <Image
        src={`/images/${product.image.asset._ref.split('-')[1]}.png`}
        alt={product.name}
        width={300}
        height={300}
      />
      <h2>Specifications</h2>
      <ul>
        {product.specifications.map((spec) => (
          <li key={spec._key}>{spec.key}: {spec.value}</li>
        ))}
      </ul>
      <h2>Variations</h2>
      {product.variations.map((variation, index) => (
        <div key={index}>
          <p>Color: <span style={{ backgroundColor: variation.color.hex, padding: '5px' }}>{variation.color.hex}</span></p>
          <h3>Sizes</h3>
          <ul>
            {variation.sizeVariations.map((sizeVar) => (
              <li key={sizeVar._key}>
                Size: {sizeVar.size}, Stock: {sizeVar.stock}
                <ul>
                  {sizeVar.quantity.map((qty) => (
                    <li key={qty._key}>Price: ${qty.price}, Range: {qty.range}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
