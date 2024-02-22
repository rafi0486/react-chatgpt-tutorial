import React, { useState } from "react";

function WebsiteScrap() {
  const [url, setUrl] = useState("");
  const [jsonContent, setJsonContent] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     // const proxyUrl = "https://cors-anywhere.herokuapp.com/"; // Proxy server to bypass CORS
      const headers = {'Content-Type':'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'}
      const response = await fetch(url);
      const htmlContent = await response.text();
      const textContent = htmlContent.replace(/<[^>]*>/g, ""); // Strip HTML tags
      const words = textContent.split(/\s+/);
      const limitedWords = words.slice(0, 1000);
      const json = JSON.stringify({ content: limitedWords });

      setJsonContent(json);
    } catch (error) {
      console.error("Error fetching content:", error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter website URL:
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {jsonContent && (
        <div>
          <h2>JSON Content:</h2>
          <pre>{jsonContent}</pre>
        </div>
      )}
    </div>
  );
}

export default WebsiteScrap;
