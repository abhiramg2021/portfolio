import { useEffect, useState } from "react";
import { FiGithub, FiHome, FiLink } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";
export const MarkdownProject = ({ project }) => {
  const [post, setPost] = useState("");
  const [dynamic, setDynamic] = useState({});

  const navigate = useNavigate();

  const iconCSS = "cursor-pointer text-black hover:text-highlight";

  useEffect(() => {
    import(`../blogs/projects/${project}.md`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => {
            setDynamic(createDynamic(res.slice(0, res.search("#####"))));
            setPost(res.slice(res.search("#####") + 5));
          });
      })
      .catch((err) => console.log(err));
  }, []);

  const createDynamic = (text) => {
    let obj = {};

    let title = "# Project:";
    let colors = "# Colors:";
    let tags = "# Tags:";
    let git = "# Github:";
    let deployment = "# Deployment:";
    let gif = "# GIF:";

    const extractUsingTemplate = (template) => {
      let out = "";
      if (text.search(template) > -1) {
        out = text
          .slice(text.search(template) + template.length, text.search("\n"))
          .trim();

        text = text.slice(text.search("\n") + 1).trim();
      }

      return out;
    };

    obj["title"] = extractUsingTemplate(title);

    obj["colors"] = extractUsingTemplate(colors).split(", ");

    let lastIndex = obj["colors"].length - 1;

    obj["colors"] = obj["colors"].map((color, i) => {
      let colorsCSS = "w-full ";
      if (i === 0) {
        colorsCSS += "rounded-l-lg ";
      }
      if (i === lastIndex) {
        colorsCSS += "rounded-r-lg ";
      }
      return <div className={colorsCSS} style={{ backgroundColor: color }} />;
    });

    obj["tags"] = extractUsingTemplate(tags).split(", ");
    obj["tags"] = obj["tags"].map((tag) => <div className="tag">{tag}</div>);
    obj["git"] = extractUsingTemplate(git);

    if (obj["git"].length > 0) {
      obj["git"] = (
        <FiGithub
          className={iconCSS}
          onClick={() => window.open(obj["git"], "_blank")}
        />
      );
    }

    obj["deployment"] = extractUsingTemplate(deployment);

    if (obj["deployment"].length > 0) {
      obj["deployment"] = (
        <FiLink
          className={iconCSS}
          onClick={() => window.open(obj["deployment"], "_blank")}
        />
      );
    }

    let gifLink = extractUsingTemplate(gif);

    gifLink = gifLink.slice(gifLink.indexOf("/GIFS"), -1);
    obj["gif"] = gifLink;

    if (obj["gif"].length > 0) {
      obj["gif"] = (
        <img src={obj["gif"]} alt="" class="gif max-w-xs rounded-lg" />
      );
    }

    text = text.slice(text.indexOf("\n") + 1, text.lastIndexOf("\n"));

    text = <ReactMarkdown>{text}</ReactMarkdown>;
    obj["text"] = text;

    return obj;
  };

  return (
    <div className="MarkdownProject mx-auto flex min-h-screen max-w-3xl flex-col items-baseline p-5">
      <div className="header flex w-full flex-col rounded-lg bg-beige-800 p-5 md:space-y-0">
        <div className="header_top flex w-full justify-between">
          <div className="project_name text-s font-bold">
            {dynamic["title"]}
          </div>
          <div className="header_right flex items-center space-x-2 text-s">
            {dynamic["deployment"]}
            {dynamic["git"]}
            <FiHome className={iconCSS} onClick={() => navigate("/")} />
          </div>
        </div>
        <div className="tags h-7 flex space-x-2">{dynamic["tags"]}</div>
      </div>
      <div className="dynamic-content grid gap-5 py-5 lg:grid-flow-col">
        <div className="gif flex justify-center">{dynamic["gif"]}</div>
        <div className="flex flex-col">
          <div className="dynamic-content-text">{dynamic["text"]}</div>
          <div className="colorBar flex h-20">{dynamic["colors"]}</div>
        </div>
      </div>

      <div className="static-markdown">
        <ReactMarkdown
          transformImageUri={(src) => {
            return "." + src.slice(src.lastIndexOf("/Images"));
          }}
        >
          {post}
        </ReactMarkdown>
      </div>
    </div>
  );
};
