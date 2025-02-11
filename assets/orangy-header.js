const changeText = () => {
  const a = document.querySelector(".nav-top__desc");

  if (!a.dataset.originalText) {
    a.dataset.originalText = a.innerText;
  }
  console.log(a);

  if (window.innerWidth < 768) {
    a.innerText = "FREE SHIPPING · COUPON: FREE.";
  } else {
    a.innerText = a.dataset.originalText;
  }
};

document.addEventListener("DOMContentLoaded", changeText);
