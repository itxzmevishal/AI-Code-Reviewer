import { useEffect, useState } from "react";
import "./App.css";
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import Editor from "react-simple-code-editor";
import axios from "axios";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import 'highlight.js/styles/github-dark.css';

function App() {
  const [code, setCode] = useState(``);
  const [review, setReview] = useState(``);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    setLoading(true); // Loader start
    setReview("");    // Clear previous review
    try {
      const response = await axios.post('http://localhost:3000/ai/get-review', { code });
      setReview(response.data);
    } catch (error) {
      console.error("Error fetching review:", error);
      setReview("❌ Error fetching review. Please try again.");
    } finally {
      setLoading(false); // Loader end
    }
  }

  return (
    <>
      <main>
        {/* Left Side - Code Editor */}
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              placeholder="Enter your code here"
              onValueChange={setCode}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript)
              }
              padding={10}
              style={{
                fontSize: 17,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%",
              }}
            />
          </div>
          <div onClick={reviewCode} className="review">
            Review
          </div>
        </div>

        {/* Right Side - Review or Loader */}
        <div className="right">
          {loading ? (
            <div className="loader-container">
              <div className="loader"></div>
              <div className="loader-text">Reviewing, Please wait...</div>
            </div>
          ) : (
            <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
