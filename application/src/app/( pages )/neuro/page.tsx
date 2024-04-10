import "@/styles/neuro.css";
import React from "react";

export default function Neuro() {
  const chatHistory: string[] = [];

  async function onSubmit(formData: FormData) {
    "use server";
    let message: string = formData.get("name") as string;
    message = message.trim();
    if (message !== "") chatHistory.push(message);
  }

  async function onEnter(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    alert("It worked?");
  }

  return (
    <div className="page-container">
      <div className="chat-history">
        {chatHistory.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
      <form className="form" action={onSubmit}>
        <textarea name="name" className="user-input" placeholder="Message" />
        <button type="submit">
          <div className="submit-button"></div>
        </button>
      </form>
    </div>
  );
}
