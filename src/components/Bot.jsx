import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import '../index.css'

const Bot = () => {
  // const [chatData, setChatData] = useState(false);

  // const handleBotClick = () => {
  //   setChatData(true);
  // };

  return (
    <>
      {/* <div
        className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-cyan-600 w-16 h-16 flex items-center justify-center rounded-full animate-bounce"
        onClick={handleBotClick}
      >
        <ion-icon name="chatbubble-ellipses"></ion-icon>
      </div>

      {chatData && ( */}
        <ChatBot
         className="fixed sm:right-8 z-[999] cursor-pointer text-white text-4xl w-16 h-16 flex items-center justify-center rounded-full"
         floating={true}
          opened={true}
          steps={[
            {
              id: "1",
              message: "Hello! How can I help you today?",
              trigger: "2",
            },
            {
              id: "2",
              user: true,
              trigger: "3",
            },
            {
              id: "3",
              message: "Thank you! I will get back to you soon.",
              end: true,
            },
          ]}
        />
      {/* )} */}
    </>
  );
};

export default Bot;
