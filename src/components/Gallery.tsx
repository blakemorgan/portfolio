'use client';

import Image from 'next/image';
import { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const images = [
    {
      src: '/DSC_1103.jpg',
      alt: 'Blake Morgan Professional Headshot',
      caption: 'Professional Headshot'
    },
    {
      src: '/DSC_1540.jpg',
      alt: 'Blake Morgan Artistic Portrait',
      caption: 'Artistic Portrait'
    },
    {
      src: '/DSC_1340.jpg',
      alt: 'Blake Morgan Artistic Portrait',
      caption: 'Artistic Portrait'
    },
    {
      src: '/DSC_1132.jpg', 
      alt: 'Blake Morgan Professional Photo',
      caption: 'Professional Photo'
    },
    {
      src: '/DSC_1438.jpg',
      alt: 'Blake Morgan Casual Portrait',
      caption: 'Casual Portrait'
    },
    {
      src: '/DSC_1271.jpg',
      alt: 'Blake Morgan Portrait Session',
      caption: 'Portrait Session'
    },
    {
      src: '/DSC_1375.jpg',
      alt: 'Blake Morgan Casual Portrait',
      caption: 'Casual Portrait'
    },
    {
      src: '/unnamed (1).jpg',
      alt: 'Blake Morgan Headshot',
      caption: 'Headshot'
    },
    {
      src: '/DSC_1635.jpg',
      alt: 'Blake Morgan Stage Photo',
      caption: 'Stage Photo'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-700 mx-auto rounded-full" />
          {/* <p className="text-gray-200 mt-4 max-w-2xl mx-auto">
            Professional photos showcasing Blake's versatility as a performer
          </p> */}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-square relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <h3 className="font-semibold text-lg">{image.caption}</h3>
                  <p className="text-sm opacity-90">Click to view full size</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 text-2xl font-bold z-10"
                aria-label="Close"
              >
                ✕
              </button>
              <div className="relative">
                <Image
                  src={selectedImage}
                  alt="Selected photo"
                  width={800}
                  height={800}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Gallery;