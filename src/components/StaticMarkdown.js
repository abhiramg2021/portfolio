import ReactMarkdown from "react-markdown";
export const StaticMarkdown = ({ post }) => {
  return (
    <div className="static-markdown">
      <ReactMarkdown
        transformImageUri={(src) => {
          return "." + src.slice(src.lastIndexOf("/Images"));
        }}
      >
        {post}
      </ReactMarkdown>
    </div>
  );
};
