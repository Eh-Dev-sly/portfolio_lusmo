"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './SkillCarousel.scss';

interface SkillCarouselProps {
  tags?: string[];
  itemsPerPage?: number; // valeur par défaut pour desktop
}

export default function SkillCarousel({ tags = [], itemsPerPage = 4 }: SkillCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [itemsPerSlide, setItemsPerSlide] = useState(itemsPerPage);

  // Met à jour itemsPerSlide selon la largeur de l'écran
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) setItemsPerSlide(2);
      else if (window.innerWidth <= 768) setItemsPerSlide(3);
      else setItemsPerSlide(itemsPerPage);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // initial
    return () => window.removeEventListener("resize", handleResize);
  }, [itemsPerPage]);

  if (!tags || tags.length === 0) return null;

  const totalPages = Math.ceil(tags.length / itemsPerSlide);

  const nextSlide = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentTags = () => {
    const start = currentIndex * itemsPerSlide;
    return tags.slice(start, start + itemsPerSlide);
  };

  return (
    <div className="skill-carousel">
      <div className="carousel-container">
        <button
          onClick={prevSlide}
          className="carousel-button prev"
          disabled={totalPages <= 1}
        >
          <ChevronLeft className="icon" />
        </button>

        <div className={`tags-wrapper slide-${direction}`}>
          {getCurrentTags().map((tag, index) => (
            <div key={`${tag}-${currentIndex}-${index}`} className="tag">
              {tag}
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="carousel-button next"
          disabled={totalPages <= 1}
        >
          <ChevronRight className="icon" />
        </button>
      </div>

      {totalPages > 1 && (
        <div className="pagination-dots">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 'right' : 'left');
                setCurrentIndex(index);
              }}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
