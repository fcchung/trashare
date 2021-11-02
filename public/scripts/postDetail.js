let geoloc;

(async () => {
  let url = location.href;
  let id = url.substring(url.lastIndexOf('/') + 1);

  let posts = await fetch("/api/posts/"+ id);
  let datas = await posts.json();

  if (posts.ok){
  
  const title = document.querySelector("h1");
  const description = document.querySelector("#description");
  const createdAt = document.querySelector("#createdAt");
  data = datas[0];

  title.innerHTML = data.title;
  description.innerHTML = data.description;
  createdAt.innerHTML = data.createdAt;
  geoloc = data.location;

  console.log()
/////////Load photo to carousel////////////
  const postImages = document.querySelector(".carousel-inner");
  postImages.innerHTML = "";
  let images = data.images;

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
  };
  };
  
})();

///////////load google map lcation/////////////

function initGoogle() {

  let interval = setInterval(() => {
    if (geoloc) {
      callback()
      clearInterval(interval)
    }
  }, 1000)


  console.log(geoloc);
  const callback = () => {
    const google = window.google;
    let center = {
      lat: (Number)geoloc[0],
      lng: (Number)geoloc[1]
    };

    let options = {
      center: center,
      zoom: 10,
    };
    let map = new google.maps.Map(document.getElementById("map"), options);

    new google.maps.Circle({
      center: center,
      radius: 5000,
      strokeWeight: 0,
      fillColor: "#FFB6C1",
      fillOpacity: 0.35,
      map: map,
    });
  }
}
