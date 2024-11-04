import React from 'react'
import "../app/globals.css"

function ChatLoading() {
  return (
    <div
      className={`flex items-center bg-zinc-80 w-full p-2 m-2 rounded-lg text-zinc-200`}
    >
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  );
}

export default ChatLoading