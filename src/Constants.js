import ReactMarkdown from "react-markdown";
const links = {
  linkedin: "https://www.linkedin.com/in/abhiram-ghanta/",
  twitter: "https://twitter.com/AbhiramGhanta",
  github: "https://github.com/abhiramg2021",
  mail: "mailto:aghanta3@gatech.edu",
  resume:
    "https://drive.google.com/file/d/1A7SXUe7HPkiaMchXo6b_PO-57JDKBOU5/view?usp=sharing",
};

export const openLink = (key) => {
  window.open(links[key], "_blank");
};

export const createDynamic = (text, project, position) => {
  let obj = {};

  let title = "# Title:";
  let colors = "# Colors:";
  let tags = "# Tags:";
  let git = "# Github:";
  let deployment = "# Deployment:";
  let gif = "# GIF:";
  let when = "# When:";

  const extract = (template) => {
    let out = "";
    if (text.search(template) > -1) {
      out = text
        .slice(text.search(template) + template.length, text.search("\n"))
        .trim();

      text = text.slice(text.search("\n") + 1).trim();
    }

    return out;
  };

  obj["title"] = extract(title);

  if (project) {
    obj["colors"] = extract(colors).split(", ");

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

    obj["tags"] = extract(tags).split(", ");
    obj["tags"] = obj["tags"].map((tag) => <div className="tag">{tag}</div>);
    obj["git"] = extract(git);

    obj["deployment"] = extract(deployment);

    let gifLink = extract(gif);

    gifLink = gifLink.slice(gifLink.indexOf("/GIFS"), -1);
    obj["gif"] = gifLink;

    if (obj["gif"].length > 0) {
      obj["gif"] = (
        <div className="gif flex justify-center">
          <img src={obj["gif"]} alt="" class="gif max-w-xs rounded-lg" />
        </div>
      );
    }

    text = text.slice(text.indexOf("\n") + 1);

    text = <ReactMarkdown>{text}</ReactMarkdown>;
    obj["text"] = text;
  } else if (position) {
    obj["when"] = extract(when).split(", ");
    obj["when"] = obj["when"].map((tag) => <div className="tag">{tag}</div>);
  }

  return obj;
};
