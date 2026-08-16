'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ProjectCarousel({ images = [] }) {
  const [slide, setSlide] = useState(0);
  const slideCount = images.length;

  const goTo = (i) => setSlide((i + slideCount) % slideCount);

  return (
    <div className="relative">
      <div className="aspect-[16/10] bg-[#f0eded] overflow-hidden relative">
        <div
          className="flex h-full transition-transform duration-[350ms] ease-out"
          style={{ transform: `translateX(-${slide * 100}%)` }}
        >
          {images.map((img, i) => (
            <div key={i} className="flex-none w-full h-full relative">
              {img ? (
                <Image
                  src={img}
                  alt={`Capture d'écran ${i + 1}`}
                  fill
                  className="object-contain bg-[#eeeeee]"
                  sizes="(min-width: 1024px) 66vw, 100vw"
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center text-center px-5"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(135deg, #e5e2e1, #e5e2e1 10px, #ecebea 10px, #ecebea 20px)',
                  }}
                >
                  <span className="font-mono text-xs text-muted">
                    CAPTURE ÉCRAN PROJET
                    <br />À REMPLACER
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {slideCount > 1 && (
        <>
          <button
            onClick={() => goTo(slide - 1)}
            aria-label="Capture précédente"
            className="absolute top-1/2 left-3 -translate-y-1/2 w-11 h-11 bg-ink/55 text-white flex items-center justify-center hover:bg-ink/70 transition-colors cursor-pointer"
          >
            <span className="msym text-[22px]">chevron_left</span>
          </button>
          <button
            onClick={() => goTo(slide + 1)}
            aria-label="Capture suivante"
            className="absolute top-1/2 right-3 -translate-y-1/2 w-11 h-11 bg-ink/55 text-white flex items-center justify-center hover:bg-ink/70 transition-colors cursor-pointer"
          >
            <span className="msym text-[22px]">chevron_right</span>
          </button>
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label="Aller à la capture"
                className="p-2.5 -m-2.5 flex items-center justify-center cursor-pointer"
              >
                <span className={`block w-2 h-2 rounded-full ${i === slide ? 'bg-accent' : 'bg-line'}`} />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
