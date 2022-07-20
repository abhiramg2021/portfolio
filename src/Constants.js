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
