const cookieWrapper = document.getElementById("cookie-wrapper");
const cookieButton = document.querySelector("button");
const cookieClose = document.querySelector(".close");

if (!localStorage.getItem("acceptedCookies")) {
  setTimeout(() => {
    cookieWrapper.classList.add("active");
    console.log("LOADED...");
  }, 2000);
}

cookieButton.addEventListener("click", () => {
  localStorage.setItem("acceptedCookies", "true");
  cookieWrapper.classList.remove("active");
  console.log("Cookies accepted - Closing window");
});

cookieClose.addEventListener("click", () => {
  cookieWrapper.classList.remove("active");
});

