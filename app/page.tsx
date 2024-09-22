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
            <TypewriterEffectDemo />
            <button className="bg-blue-300 hover:bg-blue-500 text-white px-6 py-3 rounded-full font-bold shadow-lg">
              Voir notre collection
            </button>
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
