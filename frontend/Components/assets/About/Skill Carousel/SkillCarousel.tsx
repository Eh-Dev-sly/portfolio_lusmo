"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './SkillCarousel.scss';

interface SkillCarouselProps {
  tags?: string[];
  itemsPerPage?: number;
}

export default function SkillCarousel({ tags = [], itemsPerPage = 3 }: SkillCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  if (!tags || tags.length === 0) {
    return null;
  }

  const totalPages = Math.ceil(tags.length / itemsPerPage);

  const nextSlide = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentTags = () => {
    const start = currentIndex * itemsPerPage;
    return tags.slice(start, start + itemsPerPage);
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
