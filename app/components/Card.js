import Image from "next/image";

function Card({ title, description, image }) {
  return (
    <div className="bg-[#fffff] shadow-md w-full border p-4">
      <h3 className="text-center text-2xl ">{title}</h3>

      <Image
        src={image}
        width={450}
        height={400}
        className="border rounded-md"
        alt="image"
      />
      <p className="text-gray-500 py-2">{description}</p>
      <div className="flex justify-between gap-4">
        <button className="bg-[#1D4ED8] text-white py-2 px-4 rounded-md w-full">
          View Project
        </button>
        <button className="bg-[#1D4ED8] text-white py-2 px-4 rounded-md ml-2 w-full">
          View Source
        </button>
      </div>
    </div>
  );
}

export default Card;
