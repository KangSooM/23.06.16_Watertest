const Logout = document.querySelector("#logout");

function onLogout() {
    localStorage.removeItem(USERNAME_KEY);
    localStorage.removeItem("todos");
    window.location.reload();
}

Logout.addEventListener("click", onLogout);