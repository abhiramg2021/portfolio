import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

const Md = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("Page.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <ReactMarkdown remarkPlugins={[gfm]}>
      *React-Markdown* now supports ~strikethrough~. Thanks to gfm plugin.
    </ReactMarkdown>
  );
};

export default Md;
