import "@/styles/neuro.css";

export default function Neuro() {
  async function onSubmit(formData: FormData) {
    "use server";
    let message: string = formData.get("name") as string;
    message = message.trim();
    if (message !== "") console.log(message);
  }

  return (
    <div className="page-container">
      <div className="chat-history"></div>
      <form className="form" action={onSubmit}>
        <textarea name="name" className="user-input" placeholder="Message" />
        <button type="submit">
          <div className="submit-button"></div>
        </button>
      </form>
    </div>
  );
}