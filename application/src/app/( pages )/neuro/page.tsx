"use client";

import "@/styles/neuro.css";
import React, { useState } from "react";

export default function Neuro() {
  const [chatHistory, setChatHistory] = useState<string[]>([]);
  
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  async function onSubmit(event: React.MouseEvent<HTMLDivElement>) {
    event.preventDefault();
    const text: HTMLTextAreaElement = document.querySelector(
      "textarea"
    ) as HTMLTextAreaElement;
    appendChatHistory(text.value as string);
    text.value = "";
  }

  async function onEnter(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      appendChatHistory(event.currentTarget.value as string);
      event.currentTarget.value = "";
    }
  }

  async function appendChatHistory(entry: string) {
    let message: string = entry.trim();
    if (message !== "")
      setChatHistory((prevHistory) => [...prevHistory, message]);

    const response = await getQuery();
    const { hello } = response;
    await delay(1000);
    setChatHistory((prevHistory) => [...prevHistory, hello as string]);
  }

  async function getQuery() {
    const response = await fetch("/api/query", {
      method: "GET",
    });

    return response.json();
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
      <form className="form">
        <textarea
          name="name"
          id="user-input"
          className="user-input"
          placeholder="Message"
          onKeyDown={onEnter}
        />
        <div className="submit-button" onClick={onSubmit}></div>
      </form>
    </div>
  );
}
