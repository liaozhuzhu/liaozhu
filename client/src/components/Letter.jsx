import React, { useState } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Letter = ({toggleLetter}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBirthday, setIsBirthday] = useState(false);
  const [isAnniversary, setIsAnniversary] = useState(false);
  const [date, setDate] = useState(new Date());

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col items-center p-5 absolute z-50 w-full z-50">
        <button 
            className="bg-fuchsia-500 text-white font-bold py-2 px-4 rounded-full mb-4 hover:scale-105 transition duration-300"
            onClick={() => toggleLetter()}
        >
            X
        </button>
        <div
            className={`w-3/4 md:w-1/2 h-40 bg-white border-2 border-gray-300 shadow-lg rounded-t-lg cursor-pointer ${
            isOpen ? "rounded-t-none" : ""
            }`}
            onClick={toggleOpen}
        >
            {/* Envelope front */}
            {!isOpen && (
            <div className="flex flex-col justify-center items-center h-full">
                <FontAwesomeIcon icon={faHeart} className="text-fuchsia-500" />
                <p className="text-sm text-gray-500 mt-2">Click to open</p>
            </div>
            )}
            {isOpen && (
            <div className="flex flex-col justify-center items-center h-full">
                <FontAwesomeIcon icon={faHeart} className="text-fuchsia-500" />
                <p className="text-sm text-gray-500 mt-2">Click to close</p>
            </div>
            )}
        </div>

        {/* Letter content */}
        {isOpen && (
            <div className="w-3/4 md:w-1/2 bg-white border-2 border-gray-300 rounded-b-lg p-4 text-left shadow-lg flex flex-col">
                <p className="text-sm text-gray-700">
                    {" "}
                    Dear Lily,{" "}
                    {date.getMonth() === 10 && date.getDate() === 7
                    ? "Happy birthday!"
                    : ""}
                </p>
                <br />
                <p className="text-sm text-gray-700">
                    I was thinking of ways I could still show you how much I love you
                    even when we're across the world from one another. I figured why not
                    show how much I know about you through code.
                </p>
                <br />
                <p className="text-sm text-gray-700">
                    I trained this chatbot on information about us and our relationship.
                    It's not perfect, but I hope it can bring a smile to your face and
                    help you reminisce about our time together. Ask it as much as you can or tell it to ask you some questions too.
                </p>
                <br/>
                <p className="text-sm text-gray-700">
                    If you want to be a real degenerate, you can even toggle first person so it's like I'm talking to you.
                </p>
                <br />
                <p className="text-sm text-gray-700">
                    I love you, Lily. I can't wait to see you again.
                </p>
                <br />
                <p className="text-sm text-gray-700">- Love, Liao</p>
            </div>
        )}

        {/* Envelope bottom */}
        {!isOpen && (
            <div className="w-3/4 md:w-1/2 h-6 bg-gray-200 border-x-2 border-b-2 border-gray-300 rounded-b-lg"></div>
        )}
    </div>
  );
};

export default Letter;
