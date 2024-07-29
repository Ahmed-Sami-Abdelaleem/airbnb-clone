import Image from "next/image";
import Link from "next/link";

type GreatestOutDoorsProps = {
  img: string;
  title: string;
  description: string;
  linkText: string;
};

function GreatestOutDoors({
  img,
  title,
  description,
  linkText,
}: GreatestOutDoorsProps) {
  return (
    <div className="container relative">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          alt="explore-image"
          fill
          className="object-cover -z-10 rounded-lg"
        />
      </div>
     <div className="absolute top-32 left-12">
     <h2 className="text-3xl font-semibold">{title}</h2>
      <p className="text-lg">{description}</p>
      <Link href="/" className="block w-fit text-sm px-4 py-2 rounded-lg  mt-5 bg-gray-900 text-white">
        {linkText}
      </Link>
     </div>
    </div>
  );
}

export default GreatestOutDoors;
