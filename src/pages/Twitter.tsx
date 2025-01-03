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

  function handleUserType(e: React.ChangeEvent<HTMLTextAreaElement>) {
    // This can be implemented a couple of ways
    // (1) If string length exceeds limit, we simply return out of function and don't update the text state
    if (e.target.value.length > 120) {
      return;
    }
    setContent(e.target.value);

    // (2) Or we can slice a string to always be at 120 length - something like below
    // setContent(e.target.value.slice(0, 120));
  }

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
      <textarea
        // maxLength={120}
        rows={10}
        cols={50}
        value={content}
        onChange={handleUserType}
      ></textarea>
      <br />
      character count {content.length}/120
      <br />
      <button type="button" onClick={handleButtonClick} disabled={isLoading}>
        {isLoading ? "... is loading" : "Submit"}
      </button>
    </div>
  );
}

export default Twitter;
