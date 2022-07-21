import { useEffect, useState } from "react";
import { FiHome } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";
export const MarkdownPosition = ({ position }) => {
  const [post, setPost] = useState("");
  const [dynamic, setDynamic] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    import(`../blogs/positions/${position}.md`)
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

    let title = "# Position:";
    let when = "# When:";

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
    obj["when"] = extractUsingTemplate(when).split(", ");
    obj["when"] = obj["when"].map((tag) => <div className="tag">{tag}</div>);

    text = <ReactMarkdown>{text}</ReactMarkdown>;
    obj["text"] = text;

    return obj;
  };

  return (
    <div className=" mx-auto flex min-h-screen max-w-3xl flex-col items-baseline p-5">
      <div className="header mb-5 flex w-full flex-col rounded-lg bg-beige-800 p-5 md:space-y-0">
        <div className="header_top flex w-full justify-between">
          <div className="project_name text-s font-bold">
            {dynamic["title"]}
          </div>
          <div className="header_right flex items-center space-x-2 text-s">
            <FiHome
              className="cursor-pointer text-black hover:text-highlight"
              onClick={() => navigate("/")}
            />
          </div>
        </div>
        <div className="when h-7 flex space-x-2">{dynamic["when"]}</div>
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
