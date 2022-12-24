window.onload = () => {
  console.log("index.js loaded");
  const slides = document.querySelectorAll(".slideshow img");
  let currentSlide = 0;
  setInterval(() => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }, 4000);
};

function sendRequest() {
  let name = document.getElementById("name").value;
  let location = document.getElementById("location").value;
  let email = document.getElementById("email").value;
  if (name === "" || location === "" || email === "") {
    window.alert("请填写完整信息！");
    return false;
  }
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/submit");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onload = () => {
    if (xhr.status === 200) {
      window.alert("感谢反馈情况！");
    } else {
      window.alert("表单提交失败！");
    }
  };
  xhr.send(
    "name=" + encodeURIComponent(name) +
    "&location=" + encodeURIComponent(location) +
    "&email=" + encodeURIComponent(email)
  );
  return false;
}
