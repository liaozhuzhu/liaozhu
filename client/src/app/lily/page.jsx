'use client';

import React, {useState, useEffect} from "react";
import axios from "axios";

export default function Lily() {
    const [isLoading, setIsLoading] = useState(false);
    const [isFirstPerson, setIsFirstPerson] = useState(false);
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const response = await axios.post("http://127.0.0.1:8080/api/data", {
          prompt,
        }).then (response => {
            console.log(response.data.received_data.prompt);
            setResponse(response.data.received_data.prompt);
            setIsLoading(false);
        }).catch(error => {
            console.log(error);
            setIsLoading(false);
        });   
    }


    return (
      <div className="flex justify-center items-center h-screen flex-col bg-zinc-950 z-10 ">
        <div className="flex flex-col justify-center items-center h-full text-zinc-50 w-full">
          <div className="flex flex-col justify-center items-center h-full w-3/4 flex flex-col justify-center items-between break-all p-2">
            {response}
          </div>
          <div className="flex justify-center items-center w-full">
            <form
              className="flex justify-between rounded-lg items-center w-1/2 m-4 bg-zinc-50"
              onSubmit={handleSubmit}
            >
              <input
                className="w-3/4 p-2 outline-none rounded-lg text-zinc-900"
                type="text"
                placeholder="Type here <3"
                onChange={(e) => setPrompt(e.target.value)}
              />
              <button className="bg-zinc-50 text-zinc-900 p-2 rounded-lg ml-2">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    );
}
