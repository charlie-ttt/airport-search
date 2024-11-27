import { useState } from "react";

async function submitTwitterAPI() {
  try {
    await fetch(`https://api.test.com/`, {
      method: "POST",
      signal: AbortSignal.timeout(2000), // add 2 seconds timeout since fake API and it will never responds correctly
    });
  } catch (error) {
    console.error("error:", error);
  }
}

function Twitter() {
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleButtonClick() {
    if (content.length === 0) {
      alert("Please add content");
      return;
    }
    if (content.length > 120) {
      alert("Content exceed 120 character limit");
      return;
    }

    setIsLoading(true);
    await submitTwitterAPI();
    alert("Your post has been submitted");
    setContent("");
    setIsLoading(false);
  }

  return (
    <div>
      <h1>Twitter</h1>
      Create Tweet Here (max 120 characters):
      <br />
      <form id="twitter-form">
        <textarea
          form="twitter-form"
          maxLength={120}
          rows={10}
          cols={50}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <br />
        <button type="button" onClick={handleButtonClick} disabled={isLoading}>
          {isLoading ? "... is loading" : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default Twitter;
