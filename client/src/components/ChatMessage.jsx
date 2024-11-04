// create a new component called ChatMessage that takes in a message prop and renders the message in a div element that mimics a text bubble

import React from 'react';

export default function ChatMessage({message, isUser}) {
    return (
      <div
        className={`flex items-center ${
          isUser ? `bg-zinc-700 justify-end` : `bg-zinc-80 w-full`
        } p-2 m-2 rounded-lg text-zinc-200`}
      >
        {message}
      </div>
    );
}