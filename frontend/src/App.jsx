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
const [review, setReview] = useState(``)
  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
  const response = await  axios.post('https://ai-code-reviewer-backend-1rdn.onrender.com/ai/get-review', { code } )
  setReview(response.data)
  
  }
  return (
    <>
      <main>
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
                overflow: "scroll",
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
        <div className="right"><Markdown 
        rehypePlugins={[rehypeHighlight]}
        >{review}</Markdown></div>
      </main>
    </>
  );
}

export default App;
