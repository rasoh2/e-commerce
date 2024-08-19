import { List } from "reactstrap";

function generateSimpleRandomID() {
  return Math.random().toString(36).substr(2, 9);
}

const ProductList = [
  {
    id: 1,
    title: "Audífonos negros Bluetooth",
    image:
      "https://res.cloudinary.com/djx6viedj/image/upload/t_trimmed_square_512/et8qbl35rz490v43a7sunriqtcfv?_a=BACCd2Ev",
    description: "Audífonos Bluetooth duración max. 24 hrs.",
    price: "29000",
    stock: "1",
  },
  {
    id: 2,
    title: "Pendrive",
    image:
      "https://home.ripley.cl/store/Attachment/WOP/D345/2000395271052/2000395271052_2.jpg",
    description: "Pendrive de almacenamiento capacidad 1 TB",
    price: "19000",
    stock: "10",
  },
  {
    id: 3,
    title: "Mouse gamers",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_987221-MLA51243077077_082022-F.webp",
    description: "Pendrive de almacenamiento capacidad 1 TB",
    price: "29000",
    stock: "10",
  },
  {
    id: 4,
    title: "Teclado mecánico",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_894910-MLA45315449297_032021-F.webp",
    description: "Este teclado HP de alto rendimiento retroiluminado.",
    price: "20000",
    stock: "10",
  },
];
ProductList.forEach((product) => {
  product.id = generateSimpleRandomID();
});
console.log(ProductList);
export default ProductList;
