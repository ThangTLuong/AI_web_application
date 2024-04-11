"use client";

import "@/styles/neuro.css";
import React, { useState } from "react";

export default function Neuro() {
  const [chatHistory, setChatHistory] = useState<string[]>([]);

  async function onSubmit(formData: FormData) {
    let message: string = formData.get("name") as string;
    appendChatHistory(message);
  }

  async function onEnter(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      appendChatHistory(event.currentTarget.value as string);
    }
  }

  async function appendChatHistory(entry: string) {
    let message: string = entry.trim();
    if (message !== "")
      setChatHistory((prevHistory) => [...prevHistory, message]);
  }

  return (
    <div className="page-container">
      <div className="chat-history">
        {chatHistory?.map((message, index) => (
          <p key={index} className="message-box">
            {message}
          </p>
        ))}
      </div>
      <form className="form" action={onSubmit}>
        <textarea
          name="name"
          className="user-input"
          placeholder="Message"
          onKeyDown={onEnter}
        />
        <button type="submit">
          <div className="submit-button"></div>
        </button>
      </form>
    </div>
  );
}
