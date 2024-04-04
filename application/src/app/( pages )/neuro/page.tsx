import "@/styles/neuro.css";

export default function Neuro() {
  async function onSubmitButton(formData: FormData) {
    "use server";
    let message: string = formData.get("name") as string;
    message = message.trim();
    console.log(message);
  }

  return (
    <div className="page-container">
      <div className="chat-history"></div>
      <form action={onSubmitButton}>
        <textarea name="name" className="user-input" placeholder="Message" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}