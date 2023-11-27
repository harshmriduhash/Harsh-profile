import React, { useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "Harshsahay2709@gmail.com" },
    { logo: "logo-whatsapp", text: "9674783793" },
    {
      logo: "location",
      text: "My Current location",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

const handleSubmit = (e) => {
    e.preventDefault();

    const emailParams = {
      ...formData,
      to_email: "Harshsahay2709@gmail.com"
    };

    
    emailjs.send(
      "service_798ihv9", 
      "template_yfbk4tr", 
      emailParams,
      "38PXCwnCKufcR3hA-"
    )
    .then((response) => {
      console.log("Email sent:", response);
      alert("Message Send Successfully")
    })
    .catch((error) => {
      console.error("Error sending email:", error);
    });

    setFormData({
      name: "",
      email: "",
      number: "",
      message: ""
    });
  };

   const openInGoogleMaps = () => {
    const location = "https://www.google.com/maps/place/New+Palasia,+Indore,+Madhya+Pradesh+452001/@22.7264264,75.878637,16z/data=!3m1!4b1!4m6!3m5!1s0x3962fd4773f75357:0xd4c16ad55b02adbe!8m2!3d22.724355!4d75.8838944!16s%2Fm%2F09gb73n?entry=ttu"; // Replace with your actual location
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${location}`;
    window.open(googleMapsUrl, '_blank');
  };


  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form className="flex flex-col flex-1 gap-5" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              placeholder="Your Email Address"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="number"
              placeholder="Enter your Number"
              name="number"
              value={formData.number}
              onChange={handleInputChange}
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            <button type="submit" className="btn-primary w-fit">
              Send Message
            </button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                    text-left gap-4 flex-wrap items-center"
                onClick={contact.logo === "location" ? openInGoogleMaps : null}
                style={{ cursor: contact.logo === "location" ? 'pointer' : 'default' }}
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Contact;
