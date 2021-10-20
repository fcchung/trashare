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
