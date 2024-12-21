import React, { useRef, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import styles from "./ServicesSections.module.css";
import { SportCardProps } from "../../types/types";
import { Carousel } from "react-responsive-carousel";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import useWindowSize from "../../hooks/useWindowSize";

const SportCard: React.FC<SportCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          loading="lazy"
          src={imageSrc}
          alt={`${title} illustration`}
          className={styles.cardImage}
        />
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>
        {isExpanded ? description : `${description.substring(0, 100)}...`}
        <span
          onClick={() => setIsExpanded(!isExpanded)}
          className={styles.link}
        >
          {isExpanded ? "Read less" : "Know more"}
        </span>
      </p>
    </div>
  );
};

const servicesData = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/27238f830ca7111d2956fce7c3b3abf371a97985f83e489ef4ee1987c018b690?placeholderIfAbsent=true&apiKey=79426ccaf24d49c38858d00ea833e975",
    title: "Sports",
    description:
      "From fitness studios to sports academies, Rmax empowers sports businesses to streamline their operations, manage clients, and grow their services.",
  },
  {
    imageSrc:
      "https://healwithtravelley.com/wp-content/uploads/2024/05/about-us-heal-with-travelley.jpg",
    title: "Healthcare & Wellness",
    description:
      "Health and wellness service providers—from yoga instructors to gyms—can use Rmax to manage schedules, appointments, and clients efficiently.",
  },
  {
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SL4kexwGBLkAHqm8bhBrN3lQN-T4T5HwA1GccoPEs2R2LYng",
    title: "Learning Activities",
    description:
      "From tutors to educational centers, Rmax helps manage classes, track progress, and schedule sessions with ease.",
  },
  {
    imageSrc:
      "https://i0.wp.com/www.internationalbrandequity.com/wp-content/uploads/2022/04/event-management-guide.jpg?fit=2000%2C1333&ssl=1",
    title: "Event Management",
    description:
      "Whether it's for conferences, workshops, or parties, Rmax helps event planners with scheduling, ticketing, and client management.",
  },
  {
    imageSrc: "https://etimg.etb2bimg.com/photo/103277806.cms",
    title: "Beauty & Personal Care",
    description:
      "Salons, spas, and personal care businesses can use Rmax to manage appointments, customer preferences, and payment processing.",
  },
];

const ServicesSections = () => {
  const { width } = useWindowSize();
  const adjustedWidth = width < 700 ? 100 : width < 990 ? 50 : 33.33;

  const carouselRef = useRef(null);

  const handlePrev = () => {
    console.log("prv")
  };

  const handleNext = () => {
    console.log("next")
  };
  return (
    <div className={styles.carouselBox}>
      <h2 className={styles.heading}>
        Empowering Service Providers Across Industries
      </h2>
      <p className={styles.subheading}>
        Whether you're in sports, education, wellness, household services, or
        niche markets, our technology simplifies your business operations,
        making it easier for you to focus on what you do best.
      </p>
      <div className={styles.carouselWrapper}>
        <button
          className={`${styles.customArrow} ${styles.customArrowPrev}`}
          onClick={handlePrev}
        >
          <FaCircleChevronLeft size={30} />
        </button>
        <div className={styles.carousel}>
          <Carousel
            ref={carouselRef}
            interval={2000}
            autoPlay={true}
            transitionTime={800}
            infiniteLoop={true}
            showThumbs={false}
            useKeyboardArrows={true}
            showArrows={false}
            centerMode={true}
            centerSlidePercentage={adjustedWidth}
            dynamicHeight={false}
          >
            {servicesData.map((URL, index) => (
              <div key={index} className="slide">
                <SportCard
                  imageSrc={URL.imageSrc}
                  title={URL.title}
                  description={URL.description}
                />
              </div>
            ))}
          </Carousel>
        </div>

        <button
          className={`${styles.customArrow} ${styles.customArrowNext}`}
          onClick={handleNext}
        >
          <FaCircleChevronRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default ServicesSections;
