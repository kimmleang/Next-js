import Product from "@/components/Product";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" bg-pink-100 p-8 md:p-16">
      <div className="flex flex-col md:flex-row items-center justify-between  ">
        {/* Left Side - Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
          <p className="text-red-500 font-semibold">Sale Offer</p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-green-500">
            NEW FASHION <br /> SUMMER SALE
          </h1>
          <p className="text-gray-700 text-lg">
            starting at <span className="text-blue-600 font-semibold">$30.00</span>
          </p>
          <button className="bg-pink-500 text-white py-2 px-6 rounded-full text-lg font-medium hover:bg-pink-600 transition duration-300">
            Shop Now
          </button>
        </div>

        <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
          <Image
            src="/guy.png"
            alt="Fashion Sale"
            width={400}
            height={500}
            className="rounded-lg"
          />
        </div>
        
      </div>
      <h1 className="text-3xl md:text-5xl font-bold leading-tight text-green-500">
            OUR PRODUCT
          </h1>
      <Product/>
    </main>

    
  );
}
