const container = document.querySelector("#container");

const source = document.createElement("source");
source.setAttribute("type", "image/jpeg");
source.setAttribute("sizes", "500px");
source.setAttribute("srcset", "2000.jpeg 2000w");

const img = document.createElement("img");
img.setAttribute("alt", "test case");
img.setAttribute("sizes", "500px");

const picture = document.createElement("picture");
picture.appendChild(source);
picture.appendChild(img);

container.appendChild(picture);

const image = document.querySelector("img");
image.setAttribute("src", "fallback.jpeg");
