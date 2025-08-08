// Chờ DOM tải xong mới chạy
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      const message = document.getElementById("message");

      const correctEmail = "user@example.com";
      const correctPassword = "123456";

      if (!email || !password) {
        message.style.color = "red";
        message.textContent = "Vui lòng nhập đầy đủ thông tin.";
        return;
      }

      if (email === correctEmail && password === correctPassword) {
        message.style.color = "green";
        message.textContent = "Đăng nhập thành công!";
        setTimeout(() => {
          window.location.href = "profile.html";
        }, 1000);
      } else {
        message.style.color = "red";
        message.textContent = "Email hoặc mật khẩu không đúng.";
      }
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.querySelector("#registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      const fullname = registerForm.querySelector("#fullname");
      const email = registerForm.querySelector("#email");
      const password = registerForm.querySelector("#password");
      const confirm = registerForm.querySelector("#confirm");

      if (
        fullname.value.trim() === "" ||
        email.value.trim() === "" ||
        password.value.trim() === "" ||
        confirm.value.trim() === ""
      ) {
        alert("Vui lòng điền đầy đủ thông tin.");
        e.preventDefault();
      } else if (!validateEmail(email.value)) {
        alert("Email không hợp lệ.");
        e.preventDefault();
      } else if (password.value.length < 6) {
        alert("Mật khẩu phải có ít nhất 6 ký tự.");
        e.preventDefault();
      } else if (password.value !== confirm.value) {
        alert("Mật khẩu nhập lại không khớp.");
        e.preventDefault();
      }
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector("#contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      const name = contactForm.querySelector("#name");
      const email = contactForm.querySelector("#email");
      const message = contactForm.querySelector("#message");

      if (
        name.value.trim() === "" ||
        email.value.trim() === "" ||
        message.value.trim() === ""
      ) {
        alert("Vui lòng điền đầy đủ thông tin liên hệ.");
        e.preventDefault();
      } else if (!validateEmail(email.value)) {
        alert("Email không hợp lệ.");
        e.preventDefault();
      }
    });
  }
});

