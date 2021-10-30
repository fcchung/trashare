function loadPosts() {
  const postList = document.querySelector(".post-list");
  postList.innerHTML = "";
  for (let i = 1; i < 11; i++) {
    const list = document.createElement("li");
    const containerDiv = document.createElement("div");
    const time = document.createElement("time");
    const title = document.createElement("h2");
    const anch = document.createElement("a");

    list.className = "row";
    time.innerHTML = "Oct 29 ";
    containerDiv.className = "titleContainer";
    containerDiv.appendChild(time);
    anch.className = "result-title";
    anch.herf = " ";
    anch.innerHTML = "Sample / Test Title #" + i;
    title.appendChild(anch);

    containerDiv.appendChild(title);
    list.appendChild(containerDiv);
    postList.appendChild(list);
  }
}

loadPosts();
