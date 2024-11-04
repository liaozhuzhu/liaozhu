'use client'

import React, { useEffect, useState } from "react";
import axios from "axios";
import ChatMessage from "../../components/ChatMessage";
import ChatLoading from "../../components/ChatLoading";
import { faHeart, faRedo, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Letter from "../../components/Letter";

export default function Lily() {
  const [isLoading, setIsLoading] = useState(false);
  const [firstPerson, setFirstPerson] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [messageHistory, setMessageHistory] = useState([]);
  const [date, setDate] = useState(new Date());
  const [isBirthday, setIsBirthday] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [isDev, setIsDev] = useState(true);

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [messageHistory]);

  useEffect(() => {
    const now = new Date();
    const options = {
      timeZone: "Asia/Bangkok",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    };
    const formattedDateTime = new Intl.DateTimeFormat("en-US", options).format(
      now
    );
    setDate(formattedDateTime);
    const currentDate = new Date(
      now.toLocaleString("en-US", { timeZone: "Asia/Bangkok" })
    );
    setIsBirthday(currentDate.getMonth() === 10 && currentDate.getDate() === 7);

    const url = window.location.href;
    if (url.includes("localhost")) {
      setIsDev(true);
    } else {
      setIsDev(false);
    }
  }, []);

  const API_URL = isDev
    ? "http://127.0.0.1:5000/api"
    : "https://liaozhuapi.onrender.com/api";

  useEffect(() => {
    if (isBirthday) {
      axios.post(API_URL + "/set_birthday").catch(() => {
        console.error("Error setting birthday");
      });
    }
  }, [isBirthday]);

  const handleQuickPrompt = (promptText) => {
    setPrompt(promptText);
    handleSubmit(null, promptText);
  };

  useEffect(() => {
    const handleFirstPerson = async () => {

      try {
        const response = await axios.post(
          API_URL + "/set_first_person",
          {
            toggleFirstPerson: firstPerson,
          }
        );

        const res = response.data.response;
        console.log(res);
      } catch (error) {
        console.error("Error fetching response:", error);
      }
    };

    const clearMemory = async () => {
      try {
        const response = await axios.post(
          API_URL + "/clear_memory"
        );

        const res = response.data.response;
        console.log(res);
      } catch (error) {
        console.error("Error fetching response:", error);
      }
    }

    handleFirstPerson();
    clearMemory();
  }, [firstPerson])

  const isHTML = (str) => {
    const doc = new DOMParser().parseFromString(str, "text/html");
    return Array.from(doc.body.childNodes).some((node) => node.nodeType === 1); // Check for any HTML element
  };

  const toggleLetter = () => {  
    setShowLetter(!showLetter);
  };

  const handleSubmit = async (e, directPrompt = null) => {
    if (e) {
      e.preventDefault();
    }

    const promptToSend = directPrompt || prompt;

    if (promptToSend === "") {
      return;
    }

    setMessageHistory((prevHistory) => [
      ...prevHistory,
      { type: "user", text: promptToSend },
    ]);
    setIsLoading(true);

    try {
      const response = await axios.post(API_URL + "/data", {
        prompt: promptToSend,
      });

      const aiMessage = response.data.response;

      setMessageHistory((prevHistory) => [
        ...prevHistory,
        { type: "ai", text: aiMessage, isHtml: isHTML(aiMessage) }, // Track if it's HTML
      ]);
    } catch (error) {
      console.error("Error fetching response:", error);
    } finally {
      setIsLoading(false);
    }
    setPrompt("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen flex-col bg-zinc-950 z-10 ">
      {showLetter && <Letter toggleLetter={toggleLetter}/>}
      <div className="flex flex-col justify-center items-center min-h-screen text-zinc-50 w-full">
        {messageHistory.length === 0 && (
          <div className="flex flex-col justify-between h-[500px] items-center w-full mt-40 gap-4">
            <h1 className="text-5xl font-bold">Hi Lily!</h1>
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="flex flex-col md:flex-row justify-start items-start gap-2">
                <div
                  className="flex text-center p-2 rounded-lg w-40 h-20 justify-center items-center cursor-pointer hover:border-2 transition duration-300 border border-zinc-50"
                  onClick={() => {
                    handleQuickPrompt("What is my favorite animal?");
                  }}
                >
                  <p>What is my favorite animal?</p>
                </div>
                <div
                  className="flex text-center p-2 rounded-lg w-40 h-20 justify-center items-center cursor-pointer hover:border-2 transition duration-300 border border-zinc-50"
                  onClick={() => {
                    handleQuickPrompt("When is my birthday?");
                  }}
                >
                  <p>When is my birthday?</p>
                </div>
                <div
                  className="flex text-center p-2 rounded-lg w-40 h-20 justify-center items-center cursor-pointer hover:border-2 transition duration-300 border border-zinc-50"
                  onClick={() => {
                    handleQuickPrompt("How did Liao make this?");
                  }}
                >
                  <p>How did Liao make this?</p>
                </div>
              </div>
              <div className="flex justify-center items-center w-full gap-2">
                <label className="inline-flex items-center cursor-pointer flex gap-2">
                  <input
                    type="checkbox"
                    value={false}
                    className="sr-only peer"
                    onChange={() => setFirstPerson((prev) => !prev)}
                  />
                  <div className="relative w-11 h-6 bg-gray-200 outline-none peer-focus:ring-gray-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600"></div>
                  <span className="text-zinc-50">Toggle First Person</span>
                </label>
                <button className="flex justify-center items-center bg-zinc-50 text-zinc-900 p-2 rounded-lg w-8 h-8 hover:bg-zinc-700 transition duration-300" onClick={toggleLetter}>
                  <FontAwesomeIcon icon={faEnvelope} className="text-fuchsia-500" />
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-col justify-start items-end overflow-auto flex-grow w-3/4 p-2">
          {messageHistory.map((message, index) => (
            <div key={index} className={index % 2 === 0 ? "" : "w-full"}>
              {message.isHtml ? (
                <div
                  dangerouslySetInnerHTML={{ __html: message.text }}
                  className="p-4"
                />
              ) : (
                <ChatMessage
                  message={message.text}
                  isUser={message.type === "user"}
                />
              )}
            </div>
          ))}
          {isLoading && <ChatLoading />}
        </div>
        <div className="flex justify-center items-center w-full sticky bottom-0">
          <button
            className="bg-zinc-50 text-zinc-900 p-2 rounded-lg w-10 h-10 ml-2 hover:bg-zinc-700 transition duration-300"
            onClick={() => window.location.reload()}
          >
            <FontAwesomeIcon icon={faRedo} className="text-fuchsia-500" />
          </button>
          <form
            className="flex justify-between rounded-lg items-center w-1/2 m-4 bg-zinc-50"
            onSubmit={handleSubmit}
          >
            <input
              className="w-full p-2 outline-none rounded-lg text-zinc-900"
              type="text"
              placeholder="Type here <3"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              autoFocus
            />
            <button
              className="bg-zinc-50 text-zinc-900 p-2 rounded-e-lg ml-2 hover:bg-zinc-700 transition duration-300"
              type="submit"
            >
              <FontAwesomeIcon icon={faHeart} className="text-fuchsia-500" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
