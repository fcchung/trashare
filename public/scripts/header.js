(() => {
  let header = document.getElementById("header");

  let user = JSON.parse(sessionStorage.getItem("user"));
  let loginSecion = user
    ? `<div id="greet">Hi, ${user.firstName} ${user.lastName}</div>
        <a class="nav-link" href="/" id="signOutLink">Sign out</a>`
    : `<ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/login">Sign in</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/register">Sign up</a>
        </li>
      </ul>`;

  header.innerHTML = `
  <nav id="navbar" class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <a class="navbar-brand" href="#">Trashare</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/posts">Posts</a>
            </li>
          </ul>
          <div class="d-flex">
            ${loginSecion}
          </div>
        </div>
      </div>
    </nav>`;
})();

(() => {
  let signOut = document.getElementById("signOutLink");
  if (signOut) {
    signOut.addEventListener("click", () => {
      sessionStorage.setItem("user", null);
    });
  }
})();
