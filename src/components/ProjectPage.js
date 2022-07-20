import { useEffect, useState } from "react";
import { FiGithub, FiHome, FiLink } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import Cotion from "../media/Cotion.gif";
import profile from "../media/profile.png";
export const ProjectPage = () => {
  const renderTextWithLinks = (text) => {
    let out = [];

    let parEnd = text.search("\\)");
    let braceStart, braceEnd, displayText, parStart, url, link;
    while (parEnd !== -1) {
      console.log(text);
      braceStart = text.search("\\[");
      braceEnd = text.search("\\]");
      parStart = text.search("\\(");
      parEnd = text.search("\\)");

      if (parEnd === -1) break;

      displayText = text.slice(braceStart + 1, braceEnd);
      url = text.slice(parStart + 1, parEnd);

      link = <a href={url}>{displayText}</a>;

      out.push(text.slice(0, braceStart));
      out.push(link);

      text = text.slice(parEnd + 1, text.length);
    }

    out.push(text);

    return out;
  };

  const [post, setPost] = useState("");

  useEffect(() => {
    import("../blogs/projects/Cotion.md")
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className=" mx-auto flex min-h-screen w-2/3 max-w-screen-lg flex-col items-baseline p-5">
      <div className="header flex w-full justify-between rounded-lg bg-beige-800 p-5">
        <div className="header_left">
          <div className="project_name font-yellowtail text-ms">
            Project Name
          </div>
          <div className="tags flex space-x-2">
            <div className="tag">react.js</div>
            <div className="tag">tailwind-css</div>
            <div className="tag">flask</div>
          </div>
        </div>

        <div className="header_right flex items-center space-x-2 text-s">
          <FiLink />
          <FiGithub />
          <FiHome />
        </div>
      </div>
      <div className="dynamic-content flex space-x-5 py-5">
        <img className="gif w-1/2 rounded-lg" src={profile} alt=""></img>
        <div className="dynamic-content-subcontainer flex w-1/2 flex-col justify-between">
          <div>
            Although some professors release all of their course schedules at
            the start of the semester, some professors release their course
            schedule in chunks throughout the semester. If a user used Cotion
            multiple times throughout the semester, I wanted Cotion to only add
            new assignments. For any existing assignments in the database,
            Cotion would check to see if there was a change in due date, and
            update as necessary.
          </div>
          <div className="colorBar flex h-20 w-full place-items-stretch">
            <div className="w-full rounded-l-lg bg-beige-800"></div>
            <div className="w-full bg-highlight"></div>
            <div className="w-full  rounded-r-lg bg-black"></div>
          </div>
        </div>
      </div>

      <div className="static-markdown">
        <ReactMarkdown>{post}</ReactMarkdown>
      </div>
    </div>
  );
};
