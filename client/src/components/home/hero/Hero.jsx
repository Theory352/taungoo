import React, { useState, useEffect } from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";
import { motion } from "framer-motion";

const Hero = () => {
  const images = [
    "https://thumbs.dreamstime.com/z/elementary-students-computer-group-school-class-32557098.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55Yj95iDxzmx_ZNiYSK0Erm8dcRTorg9-O_bX8tXvqrJdWK8w453R8bS8IIKELSb81_k&usqp=CAU",
    "https://media.istockphoto.com/id/1475002124/photo/woman-with-hands-laptop-and-student-typing-education-and-writing-report-or-essay-studying-for.jpg?s=1024x1024&w=is&k=20&c=a8BsfDxojvWziN7VNrhAw1kNn3zaI2cx9Ng9YnFcqho=",
    "https://static.wixstatic.com/media/11062b_639380ed69614771912abf676949ad22~mv2.jpg/v1/fill/w_640,h_428,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_639380ed69614771912abf676949ad22~mv2.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // const prevImage = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  // };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 2000);

    return () => clearInterval(intervalId); 
  }, [currentIndex]);

  return (
    <>
      <section className="absolute text-3xl mt-[4%] mx-[10%] text-blue-400">
        <div className="container">
          <div className="row">
            <Heading
             
              subtitle="WELCOME TO OUR WEBSITE"
              title=" Education Expertise"
            />
          </div>
        </div>
      </section>

      <motion.img
        className=" h-96 w-full object-cover"
        key={currentIndex}
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        // style={{ maxWidth: "100%", maxHeight: "400px", objectFit: "cover" }}
      />

      {/* <div className="margin"></div> */}
    </>
  );
};

export default Hero;
