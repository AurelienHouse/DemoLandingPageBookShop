import { InfiniteMovingBooks } from "./components/InfiniteMovingBooks";
import NavBar from "./components/NavBar";
import { TypewriterEffectDemo } from "./components/TypeWritterEffectdemo";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="relative z-10 flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow container mx-auto gap-10 p-2 flex">
          <div className="w-1/2 flex flex-col items-center">
            <TypewriterEffectDemo className="w-full custom:w-1/2 text-sm custom:text-lg" />
            <a href="https://www.epagine.fr/listeliv.php?refgtl=home&base=ebook&select_tri_recherche=&codegtl1=1000000&codegtl2=1010000&rayon=Litt%26eacute%3Brature+g%26eacute%3Bn%26eacute%3Brale%7CRomans+%26amp%3B+Nouvelles">
              <button className="bg-blue-300 hover:bg-blue-500 text-white px-6 py-3 rounded-full font-bold shadow-lg flex items-center">
                <img src="https://images.emojiterra.com/google/android-nougat/512px/1f4d6.png" alt="livres" className="w-6 h-6 mr-2" /> 
                Voir notre collection
              </button>
            </a>
            <div className="mt-4 text-yellow-500">
              ★★★★★ +500 avis positifs
            </div>
          </div>
          <InfiniteMovingBooks />
        </main>
      </div>
    </div>
  );
}
