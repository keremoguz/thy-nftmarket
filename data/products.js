
export function getProduct(productId) {
  let matchingProduct;

  products.forEach((product) => {
      if(product.id === productId){
          matchingProduct = product;
      }
  });
  return matchingProduct;
}


export const products = [
  
  {
    id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
    image: "images/products/nft-14.webp",
    name: "NFT-1",
    rating: {
      stars: 4.5,
      count: 232
    },
    priceCents: 3500,
    keywords: [
      "bedroom",
      "curtains",
      "home"
    ]
  },
  {
    id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",
    image: "images/products/nft-15.webp",
    name: "NFT-2",
    rating: {
      stars: 4,
      count: 160
    },
    priceCents: 2500,
    keywords: [
      "shorts",
      "apparel",
      "mens"
    ]
  },
  {
    id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
    image: "images/products/nft-16.webp",
    name: "NFT-3",
    rating: {
      stars: 5,
      count: 846
    },
    priceCents: 3000,
    keywords: [
      "water boiler",
      "appliances",
      "kitchen"
    ]
  },
  {
    id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
    image: "images/products/nft-17.webp",
    name: "NFT-4",
    rating: {
      stars: 4,
      count: 99
    },
    priceCents: 2000,
    keywords: [
      "kleenex",
      "tissues",
      "kitchen",
      "tissues box",
      "napkins"
    ]
  },
  {
    id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
    image: "images/products/nft-18.webp",
    name: "NFT-5",
    rating: {
      stars: 4,
      count: 215
    },
    priceCents: 2500,
    keywords: [
      "hats",
      "straw hats",
      "summer",
      "apparel"
    ]
  },
  {
    id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
    image: "images/products/nft-19.webp",
    name: "NFT-6",
    rating: {
      stars: 4.5,
      count: 52
    },
    priceCents: 6000,
    keywords: [
      "jewelry",
      "accessories",
      "womens"
    ]
  },
  {
    id: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
    image: "images/products/nft-20.webp",
    name: "NFT-7",
    rating: {
      stars: 4.5,
      count: 2465
    },
    priceCents: 3000,
    keywords: [
      "hooded",
      "hoodies",
      "sweaters",
      "womens",
      "apparel"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
    image: "images/products/nft-8.webp",
    name: "NFT-8",
    rating: {
      stars: 4.5,
      count: 119
    },
    priceCents: 2500,
    keywords: [
      "bathmat",
      "bathroom",
      "home"
    ]
  },
  {
    id: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
    image: "images/products/nft-9.webp",
    name: "NFT-9",
    rating: {
      stars: 4,
      count: 326
    },
    priceCents: 2500,
    keywords: [
      "shoes",
      "flats",
      "womens",
      "footwear"
    ]
  },
  {
    id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
    image: "images/products/nft-10.webp",
    name: "NFT-10",
    rating: {
      stars: 4.5,
      count: 2556
    },
    priceCents: 3000,
    keywords: [
      "tshirts",
      "shirts",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
    image: "images/products/nft-11.webp",
    name: "NFT-11",
    rating: {
      stars: 4.5,
      count: 2286
    },
    priceCents: 6500,
    keywords: [
      "garbage",
      "bins",
      "cans",
      "kitchen"
    ]
  },
  {
    id: "19c6a64a-5463-4d45-9af8-e41140a4100c",
    image: "images/products/nft-12.webp",
    name: "NFT-12",
    rating: {
      stars: 4,
      count: 456
    },
    priceCents: 2500,
    keywords: [
      "bedroom",
      "bed sheets",
      "sheets",
      "covers",
      "home"
    ]
  },
  {
    id: "d2785924-743d-49b3-8f03-ec258e640503",
    image: "images/products/nft-1.webp",
    name: "NFT-13",
    rating: {
      stars: 5,
      count: 83
    },
    priceCents: 4000,
    keywords: [
      "hats",
      "winter hats",
      "beanies",
      "tuques",
      "apparel",
      "womens"
    ]
  },
  {
    id: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
    image: "images/products/nft-2.webp",
    name: "NFT-14",
    rating: {
      stars: 4.5,
      count: 9017
    },
    priceCents: 5000,
    keywords: [
      "pants",
      "apparel",
      "mens"
    ]
  },
  {
    id: "1c079479-8586-494f-ab53-219325432536",
    image: "images/products/nft-3.webp",
    name: "NFT-15",
    rating: {
      stars: 4,
      count: 229
    },
    priceCents: 4000,
    keywords: [
      "shoes",
      "running shoes",
      "footwear",
      "mens"
    ]
  },
  {
    id: "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c",
    image: "images/products/nft-4.webp",
    name: "NFT-16",
    rating: {
      stars: 3.5,
      count: 42
    },
    priceCents: 4000,
    keywords: [
      "sunglasses",
      "glasses",
      "accessories",
      "shades"
    ]
  },
  {
    id: "4e37dd03-3b23-4bc6-9ff8-44e112a92c64",
    image: "images/products/nft-5.webp",
    name: "NFT-17",
    rating: {
      stars: 4.5,
      count: 511
    },
    priceCents: 7000,
    keywords: [
      "cooking set",
      "kitchen"
    ]
  },
  {
    id: "a434b69f-1bc1-482d-9ce7-cd7f4a66ce8d",
    image: "images/products/nft-6.webp",
    name: "NFT-18",
    rating: {
      stars: 4.5,
      count: 130
    },
    priceCents: 2500,
    keywords: [
      "bathroom",
      "washroom",
      "mirrors",
      "home"
    ]
  },
  {
    id: "a45cfa0a-66d6-4dc7-9475-e2b01595f7d7",
    image: "images/products/nft-7.webp",
    name: "NFT-19",
    rating: {
      stars: 4.5,
      count: 248
    },
    priceCents: 3500,
    keywords: [
      "pants",
      "sweatpants",
      "jogging",
      "apparel",
      "womens"
    ]
  },
  {
    id: "d339adf3-e004-4c20-a120-40e8874c66cb",
    image: "images/products/nft-21.webp",
    name: "NFT-20",
    rating: {
      stars: 4.5,
      count: 117
    },
    priceCents: 8000,
    keywords: [
      "accessories",
      "womens"
    ]
  },
  {
    id: "d37a651a-d501-483b-aae6-a9659b0757a0",
    image: "images/products/nft-22.webp",
    name: "NFT-21",
    rating: {
      stars: 4,
      count: 126
    },
    priceCents: 4000,
    keywords: [
      "boxes",
      "food containers",
      "kitchen"
    ]
  },
  {
    id: "0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524",
    image: "images/products/nft-23.webp",
    name: "NFT-22",
    rating: {
      stars: 4.5,
      count: 1211
    },
    priceCents: 3000,
    keywords: [
      "coffeemakers",
      "kitchen",
      "appliances"
    ]
  },
  {
    id: "02e3a47e-dd68-467e-9f71-8bf6f723fdae",
    image: "images/products/nft-24.webp",
    name: "NFT-23",
    rating: {
      stars: 4.5,
      count: 363
    },
    priceCents: 7000,
    keywords: [
      "bedroom",
      "home"
    ]
  },
  {
    id: "8a53b080-6d40-4a65-ab26-b24ecf700bce",
    image: "images/products/nft-25.webp",
    name: "NFT-24",
    rating: {
      stars: 4.5,
      count: 93
    },
    priceCents: 9000,
    keywords: [
      "bathroom",
      "home",
      "towels"
    ]
  },
  {
    id: "10ed8504-57db-433c-b0a3-fc71a35c88a1",
    image: "images/products/nft-13.webp",
    name: "NFT-25",
    rating: {
      stars: 4,
      count: 89
    },
    priceCents: 3500,
    keywords: [
      "shoes",
      "running shoes",
      "footwear",
      "womens"
    ]
  },
  {
    id: "77a845b1-16ed-4eac-bdf9-5b591882113d",
    image: "images/products/nft-39.webp",
    name: "NFT-26",
    rating: {
      stars: 4,
      count: 3
    },
    priceCents: 3500,
    keywords: [
      "food blenders",
      "kitchen",
      "appliances"
    ]
  },
  {
    id: "36c64692-677f-4f58-b5ec-0dc2cf109e27",
    image: "images/products/nft-40.webp",
    name: "NFT-27",
    rating: {
      stars: 5,
      count: 679
    },
    priceCents: 3000,
    keywords: [
      "mixing bowls",
      "baking",
      "cookware",
      "kitchen"
    ]
  },
  {
    id: "aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f",
    image: "images/products/nft-41.webp",
    name: "NFT-28",
    rating: {
      stars: 4.5,
      count: 1045
    },
    priceCents: 2500,
    keywords: [
      "kitchen",
      "kitchen towels",
      "tissues"
    ]
  },
  {
    id: "bc2847e9-5323-403f-b7cf-57fde044a955",
    image: "images/products/nft-42.webp",
    name: "NFT-29",
    rating: {
      stars: 4.5,
      count: 3157
    },
    priceCents: 2500,
    keywords: [
      "sweaters",
      "hoodies",
      "apparel",
      "mens"
    ]
  }
];