import React,{useState} from "react";
import hireMe from "../assets/images/pp.png";
const Hireme = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);

   const social_media = {
    linkedin: "https://www.linkedin.com/in/harsh-s-2ab5a0158/", 
  };

  console.log(social_media)

  const handleSayHello = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  

   const handleSocialMediaClick = (platform) => {
    window.open(social_media[platform]);
  };


  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            Do you want any work from me?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            If you have any work with me then you can connect with me with the
            help of social media i.e. [LinkedIn, also provided you my number. You can contact me from there].
          </p>
          <button className="btn-primary mt-10" onClick={handleSayHello}>Say Hello</button>
        </div>
        <div>
          <img
            src={hireMe}
            alt=""
            className="lg:h-[30rem] h-80 lg:absolute bottom-0 right-0 object-cover w-80"
          />
        </div>
      </div>
       {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="bg-white text-black p-6 rounded-xl max-w-md">
            <h2 className="text-2xl font-semibold mb-5 text-cyan-600"> &#129312;Hello! Connect with Me&#129312;</h2>
            <p className="text-gray-900 mb-2">
              You can reach out to me on the following social media platforms:
            </p>
            <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {Object.keys(social_media).map((platform) => (
              <div
                key={platform}
                className="text-gray-600 hover:text-cyan-500 text-center cursor-pointer"
                onClick={() => handleSocialMediaClick(platform)}
              >
                <ion-icon name={`logo-${platform}`} />
                <p className="text-sm">{platform}</p>
              </div>
            ))}
          </div>
            <button className="btn-secondary mt-4 bg-cyan-500 px-4 p-1 text-white float-right rounded" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hireme;
