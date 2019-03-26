const rootURL =
    "https://d1vg1gqh4nkuns.cloudfront.net/i/302055784058904755/width/";
const container = document.querySelector("#container");

const sourceWebp = document.createElement("source");
sourceWebp.setAttribute("type", "image/webp");
sourceWebp.setAttribute("sizes", "350px");
sourceWebp.setAttribute(
    "srcset",
    `${rootURL}120.webp 120w, ${rootURL}320.webp 320w, ${rootURL}400.webp 400w, ${rootURL}640.webp 640w`
);

const sourceJpeg = document.createElement("source");
sourceJpeg.setAttribute("type", "image/jpeg");
sourceJpeg.setAttribute("sizes", "350px");
sourceJpeg.setAttribute(
    "srcset",
    `${rootURL}120.jpeg 120w, ${rootURL}320.jpeg 320w, ${rootURL}400.jpeg 400w, ${rootURL}640.jpeg 640w`
);

const img = document.createElement("img");
img.setAttribute("alt", "test case");
img.setAttribute("sizes", "350px");

const picture = document.createElement("picture");
picture.appendChild(sourceWebp);
picture.appendChild(sourceJpeg);
picture.appendChild(img);

container.appendChild(picture);

const image = document.querySelector("img");
image.setAttribute("src", "fallback.jpeg");
