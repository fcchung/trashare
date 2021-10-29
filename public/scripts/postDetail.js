/////////Load photo to carousel////////////
const postImages = document.querySelector(".carousel-inner");
async function loadImages() {
  postImages.innerHTML = "";

  let images = [
    ["./images/testimg1.png"],
    ["./images/testimg2.png"],
    ["./images/testimg3.png"],
  ];
  // try {
  //   const res = await fetch("/images");
  //   if (!res.ok) {
  //     throw new Error("Error: " + res.status);
  //   }
  //   images = await res.json();
  // } catch (e) {
  //   postImages.innerHTML = e.msg;
  // }

  for (let img of images) {
    const divI = document.createElement("div");
    if (images.indexOf(img) == 0) {
      divI.className = "carousel-item active";
    } else {
      divI.className = "carousel-item";
    }
    const imgEle = document.createElement("img");
    imgEle.className = "d-block w-100";
    imgEle.src = img;
    divI.appendChild(imgEle);
    postImages.appendChild(divI);
  }
}

///////////load google map lcation/////////////

function initGoogle() {
  const google = window.google;
  let location = {
    //this will be the location from database
    lat: 37.773972,
    lng: -122.431297,
  };
  let options = {
    center: location,
    zoom: 10,
  };
  let map = new google.maps.Map(document.getElementById("map"), options);

  new google.maps.Circle({
    center: location,
    radius: 5000,
    strokeWeight: 0,
    fillColor: "#FFB6C1",
    fillOpacity: 0.35,
    map: map,
  });
}
////////////////////////
async function getPost() {
  let postid = 1;
  const res = await fetch("/api/posts/" + postid);
}

getPost();

loadImages();
