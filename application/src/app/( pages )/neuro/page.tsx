import "@/styles/neuro.css";

export default function Neuro() {
  return (
    <div className="page-container">
      <div className="chat-history"></div>
      <textarea className="user-input" placeholder="Message" />
    </div>
  );
}
