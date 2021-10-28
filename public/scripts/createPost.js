(() => {
  let file = document.getElementById("uploadImage");
  let previewDiv = document.getElementById("imagePreview");
  file.onchange = () => {
    while (previewDiv.firstChild) {
      previewDiv.removeChild(previewDiv.firstChild);
    }
    if (file.files.length) {
      for (let i = 0; i < file.files.length; i++) {
        let fileType = file.files[i].type;
        let reader = new FileReader();
        reader.onload = (e) => {
          let img = document.createElement("img");
          let div = document.createElement("div");
          div.setAttribute("class", "col-3 mb-3");
          img.src = `data:${fileType};base64,` + btoa(e.target.result);
          img.setAttribute("class", "img-thumbnail");
          div.appendChild(img);
          previewDiv.appendChild(div);
        };
        reader.readAsBinaryString(file.files[i]);
      }
    }
  };
})();

function initGoogle() {
  let location = {
    lat: 37.773972,
    lng: -122.431297,
  };
  let options = {
    center: location,
    zoom: 10,
  };
  let map = new google.maps.Map(document.getElementById("map"), options);

  let autocomplete = new google.maps.places.Autocomplete(
    document.getElementById("inputLocation"),
    {
      types: ["geocode"],
      componentRestrictions: { country: ["us"] },
      fields: ["geometry", "name"],
    }
  );

  autocomplete.addListener("place_changed", () => {
    let place = autocomplete.getPlace();

    let options = {
      center: place.geometry.location,
      zoom: 10,
    };
    map = new google.maps.Map(document.getElementById("map"), options);

    new google.maps.Circle({
      center: place.geometry.location,
      radius: 5000,
      fillColor: "#FFB6C1",
      fillOpacity: 0.35,
      map: map,
    });
  });
}
