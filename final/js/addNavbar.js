// 添加导航栏
const text = `<a href="index.html">主页</a>
<a href="history.html">历史</a>
<a href="policy.html">措施与效果</a>
<a href="about.html">关于</a>`
const navbar = document.createElement("div");
navbar.innerHTML = text;
navbar.className = "navbar";

// 添加css
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "css/navbar.css";

const originalWindowOnload = window.onload;
window.onload = () => {
  if (originalWindowOnload) {
    originalWindowOnload();
  }
  document.head.appendChild(link);
  document.body.insertBefore(navbar, document.body.firstChild);
};
