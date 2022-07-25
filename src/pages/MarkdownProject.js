import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { StaticMarkdown } from "../components/StaticMarkdown";
import { createDynamic } from "../Constants";
export const MarkdownProject = ({ project }) => {
  const [post, setPost] = useState("");
  const [dynamic, setDynamic] = useState({});

  useEffect(() => {
    import(`../blogs/projects/${project}.md`).then((res) => {
      fetch(res.default)
        .then((res) => res.text())
        .then((res) => {
          setDynamic(
            createDynamic(res.slice(0, res.search("#####")), true, false)
          );
          setPost(res.slice(res.search("#####") + 5));
        });
    });
  }, []);

  return (
    <div className="Markdown mx-auto flex min-h-screen max-w-3xl flex-col items-baseline p-5">
      <Header
        title={dynamic["title"]}
        subtitles={dynamic["tags"]}
        deployment={dynamic["deployment"]}
        git={dynamic["git"]}
      />
      <div className="dynamic-content grid gap-5 py-5 lg:grid-flow-col">
        {dynamic["gif"]}
        <div className="flex flex-col">
          <div className="dynamic-content-text">{dynamic["text"]}</div>
          {/* <div className="colorBar flex h-20">{dynamic["colors"]}</div> */}
        </div>
      </div>

      <StaticMarkdown post={post} />
    </div>
  );
};
