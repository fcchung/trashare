const postImages = document.querySelector(".carousel-inner");

async function loadImages() {
  postImages.innerHTML = "";

  let images;
  try {
    const res = await fetch("/images");
    if (!res.ok) {
      throw new Error("Error: " + res.status);
    }
    images = await res.json();
  } catch (e) {
    postImages.innerHTML = e.msg;
  }

  for (let img of images) {
    const divI = document.createElement("div");
    divI.className = "carousel-item active";
    const imgEle = document.createElement("img");
    imgEle.className = "d-block w-100";
    imgEle.src = img;
    divI.appendChild(imgEle);
    postImages.appendChild(divI);
  }
}

loadImages();
