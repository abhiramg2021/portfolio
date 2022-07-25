import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { StaticMarkdown } from "../components/StaticMarkdown";
import { createDynamic } from "../Constants";
export const MarkdownPosition = ({ position }) => {
  const [post, setPost] = useState("");
  const [dynamic, setDynamic] = useState({});

  useEffect(() => {
    import(`../blogs/positions/${position}.md`).then((res) => {
      fetch(res.default)
        .then((res) => res.text())
        .then((res) => {
          setDynamic(
            createDynamic(res.slice(0, res.search("#####")), false, true)
          );
          setPost(res.slice(res.search("#####") + 5));
        });
    });
  }, []);

  return (
    <div className="Markdown mx-auto flex min-h-screen max-w-3xl flex-col items-baseline p-5">
      <Header title={dynamic["title"]} subtitles={dynamic["when"]} />

      <StaticMarkdown post={post} />
    </div>
  );
};
