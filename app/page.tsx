import Product from "@/app/components/Product";
import Image from "next/image";

export default function Home() {
  const products = [
    { id: 1, name: "Dairy, Bread & Eggs", price: "$10.99", image: "/milk.jpg" },
    { id: 2, name: "Snack & Munchies", price: "$5.49", image: "/milk.jpg" },
    { id: 3, name: "Bakery & Biscuits", price: "$7.99", image: "/milk.jpg" },
    { id: 4, name: "Instant Food", price: "$12.99", image: "/milk.jpg" },
    { id: 5, name: "Tea, Coffee & Drinks", price: "$8.99", image: "/milk.jpg" },
    { id: 6, name: "Atta, Rice & Dal", price: "$14.99", image: "/milk.jpg" },
  ];

  return (
    <main className="bg-gray-100 p-8 md:p-16">
      <div className="relative bg-blue-300 mb-10 rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-center md:p-10 md:text-left space-y-4">
            <p className="text-red-500 font-semibold">Sale Offer</p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-green-500">
              NEW FASHION<br /> SUMMER SALE
            </h1>
            <p className="text-gray-700 text-lg">
              starting at <span className="text-blue-600 font-semibold">$30.00</span>
            </p>
            <button className="bg-pink-500 text-white py-2 px-6 rounded-full text-lg font-medium hover:bg-pink-600 transition duration-300">
              Shop Now
            </button>
          </div>

          <div className="w-full md:w-1/2 flex justify-center items-end relative">
            <Image
              src="/homepage(img).png"
              alt="Fashion Sale"
              width={600}
              height={800}
            />
          </div>
        </div>
      </div>

      <div className="text-center mb-10 mt-0">
        <h1 className="text-3xl md:text-5xl font-bold text-green-600">
          OUR PRODUCTS
        </h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="rounded-lg w-full object-cover"
            />
            <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <button className="bg-green-500 text-white py-2 px-4 rounded mt-3 hover:bg-green-600 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
