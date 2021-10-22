window.addEventListener("load", () => {
    new WOW().init({ offset: 100 });
    const fontLink = document.createElement("link");
    fontLink.href = "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);
});