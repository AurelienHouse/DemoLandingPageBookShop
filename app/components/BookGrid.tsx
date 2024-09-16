'use client';

import { useRef, useEffect } from 'react';
import LivreCard from './LivreCard';

interface Book {
  id: number;
  title: string;
  author: string;
  coverImage: string;
}

interface BookGridProps {
  books: Book[];
}

const BookGrid: React.FC<BookGridProps> = ({ books }) => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    let isScrolling = false;
    let scrollTop: number;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY;
      
      if (!isScrolling) {
        isScrolling = true;
        scrollTop = grid.scrollTop;
      }

      const newScrollTop = scrollTop + delta;
      grid.scrollTo({
        top: newScrollTop,
        behavior: 'smooth'
      });
    };

    const handleMouseUp = () => {
      isScrolling = false;
    };

    grid.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      grid.removeEventListener('wheel', handleWheel);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div 
      ref={gridRef}
      className="w-1/2 grid grid-cols-3 gap-4 overflow-y-auto h-[600px] scroll-smooth"
    >
      {books.map((book) => (
        <LivreCard
          key={book.id}
          livre={{
            image: book.coverImage,
            titre: book.title,
            auteur: book.author
          }}
        />
      ))}
    </div>
  );
};

export default BookGrid;