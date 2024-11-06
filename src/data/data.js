export const productsData = [
  {
    id: 1,
    name: "Remera Deftones Like Linus",
    price: 24.90,
    categoria: "band-merch",
    img: "img/band-merch/deftones.webp",
  },
  {
    id: 2,
    name: "Remera BMTH Eye",
    price: 22.90,
    categoria: "band-merch",
    img: "img/band-merch/bmth.webp",
  },
  {
    id: 3,
    name: "Remera BMTH Nobody Loves",
    price: 20.50,
    categoria: "band-merch",
    img: "img/band-merch/bmth-two.webp",
  },
  {
    id: 4,
    name: "Remera Metallica",
    price: 21.50,
    categoria: "band-merch",
    img: "img/band-merch/metallica.webp",
  },
  {
    id: 5,
    name: "Remera Twenty One Pilots",
    price: 23.10,
    categoria: "band-merch",
    img: "img/band-merch/top.webp",
  },
  {
    id: 6,
    name: "Remera Slipknot",
    price: 25.10,
    categoria: "band-merch",
    img: "img/band-merch/slipknot.webp",
  },
  {
    id: 7,
    name: "Remera One Piece - Sanji",
    price: 18.50,
    categoria: "anime-merch",
    img: "img/anime-merch/sanji-onepiece.webp",
  },
  {
    id: 8,
    name: "Remera One Piece - Luffy",
    price: 18.50,
    categoria: "anime-merch",
    img: "img/anime-merch/luffy-onepiece.webp",
  },
  {
    id: 9,
    name: "Remera One Piece - Robin",
    price: 25.50,
    categoria: "anime-merch",
    img: "img/anime-merch/robin-onepiece.webp",
  },
  {
    id: 10,
    name: "Remera Satoru Gojou",
    price: 25.00,
    categoria: "anime-merch",
    img: "img/anime-merch/satoru-gojou.webp",
  },
  {
    id: 11,
    name: "Remera Jujutsu Kaisen",
    price: 22.00,
    categoria: "anime-merch",
    img: "img/anime-merch/jjk.webp",
  },
  {
    id: 12,
    name: "Keisuke Takanashi",
    price: 24.00,
    categoria: "anime-merch",
    img: "img/anime-merch/keisuke-takahashi.webp",
  },
  {
    id: 13,
    name: "Coraline Bag",
    price: 30.50,
    categoria: "Bags",
    img: "img/bags/coraline.webp",
  },
  {
    id: 14,
    name: "Korn Bag",
    price: 32.50,
    categoria: "Bags",
    img: "img/bags/korn.webp",
  },
  {
    id: 15,
    name: "Kuromi Bag",
    price: 31.50,
    categoria: "Bags",
    img: "img/bags/kuromi.webp",
  },
  {
    id: 16,
    name: "Hoddie Araña",
    price: 41.50,
    categoria: "Hoddies",
    img: "img/hoddies/hoddie-araña.webp",
  },
  {
     id: 17,
     name: "Hoddie Skulls",
     price: 47.70,
     categoria: "Hoddies",
     img: "img/hoddies/hoddie-skulls.webp",
   },
  {
    id: 18,
    name: "Hoddie Eyes",
    price: 43.00,
    categoria: "Hoddies",
    img: "img/hoddies/hoddie-eyes.webp",
  },
  {
     id: 19,
     name: "Hoddie Fire",
     price: 44.50,
     categoria: "Hoddies",
     img: "img/hoddies/hoddie-fire.webp",
   },
  {
    id: 20,
    name: "Jean Angel",
    price: 30.70,
    categoria: "Jeans",
    img: "img/jeans/jean-angel.webp",
  },
  {
     id: 21,
     name: "Jean Monster",
     price: 31.20,
     categoria: "Jeans",
     img: "img/jeans/jean-monster.webp",
   },
  {
     id: 22,
     name: "Jean Wings",
     price: 29.50,
     categoria: "Jeans",
     img: "img/jeans/jean-wings.webp",
   },
  {
    id: 23,
    name: "Jean Stars",
    price: 27.50,
    categoria: "Jeans",
    img: "img/jeans/jean-stars.webp",
  },
];

const divideProducts = (size) => {
  let productsList = []

  for (let i = 0; i < productsData.length; i += size) {
    productsList.push(productsData.slice(i, i + size));
  }

  return productsList;
};

const PRODUCTS_SIZE = 6

export const appState = {
  products: divideProducts(PRODUCTS_SIZE),
  productsLimit: divideProducts(PRODUCTS_SIZE).length,
  currentProductsIndex: 0,
  activeFilter: null
}

// console.log({appState})