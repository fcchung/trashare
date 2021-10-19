(() => {
  let file = document.getElementById("uploadImage");
  file.onchange = () => {
    if (file.files.length) {
      let reader = new FileReader();

      reader.onload = (e) => {
        // console.log(e.target.result);
        let img = document.createElement("img");
        img.src = "data:image/jpeg;base64," + btoa(e.target.result);
        img.style.width = "25%";
        document.body.appendChild(img);
      };
      reader.readAsBinaryString(file.files[0]);
    }
  };
  //   previewButton.addEventListener("click", () => {
  //     if (file.files.length) {
  //       let reader = new FileReader();

  //       reader.onload = (e) => {
  //         // console.log(e.target.result);
  //         let img = document.createElement("img");
  //         img.src = "data:image/jpeg;base64," + btoa(e.target.result);
  //         img.style.width = "25%";
  //         document.body.appendChild(img);
  //       };
  //       reader.readAsBinaryString(file.files[0]);
  //     } else {
  //       console.log("no files");
  //     }
  //   });
})();
