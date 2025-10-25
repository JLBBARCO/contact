icon = [
  { className: "icon-linkedin", src: "assets/icons/linkedin.svg" },
  { className: "icon-github", src: "assets/icons/github.svg" },
  { className: "icon-youtube", src: "assets/icons/youtube.svg" },
  { className: "icon-mail", src: "assets/icons/mail.svg" },
  { className: "icon-facebook", src: "assets/icons/facebook.svg" },
  { className: "icon-instagram", src: "assets/icons/instagram.svg" },
];

icon.forEach((iconData) => {
  const elements = document.getElementsByClassName(iconData.className);
  Array.from(elements).forEach((element) => {
    const img = document.createElement("img");
    img.src = iconData.src;
    img.alt = iconData.className;
    element.appendChild(img);
  });
});
