import Image from "next/image";

interface Livre {
  image: string;
  titre: string;
  auteur: string;
}

export default function LivreCard({ livre }: { livre: Livre }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <div className="aspect-[3/4] relative">
        <Image 
          src={livre.image} 
          alt={livre.titre} 
          layout="fill" 
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold truncate">{livre.titre}</h2>
        <p className="text-sm text-gray-600 truncate">{livre.auteur}</p>
      </div>
    </div>
  );
}