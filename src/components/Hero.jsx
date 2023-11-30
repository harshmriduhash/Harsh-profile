import React from "react";
import hero from "../assets/images/IMG_2.jpg";

const Hero = () => {
  const social_media = { 
    linkedin: "https://www.linkedin.com/in/harsh-s-2ab5a0158/",  
  };

  const handleContactButtonClick = () => {
    const phoneNumber = "9674783793";
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleSocialMediaClick = (platform) => {
    window.open(social_media[platform]);
  };


  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center mt-5"
      style={{marginTop:"4rem"}}
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center mt-4">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Harsh </span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            JavaScript Developer
          </h4>
          <button className="btn-primary mt-8" onClick={handleContactButtonClick}>
            Contact Me
          </button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {Object.keys(social_media).map((platform) => (
              <div
                key={platform}
                className="text-gray-600 hover:text-white cursor-pointer"
                onClick={() => handleSocialMediaClick(platform)}
              >
                <ion-icon name={`logo-${platform}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
