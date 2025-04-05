setTimeout(function () {
  let popup = document.createElement("div");
  popup.className = "popup";

  let title = document.createElement("h3");
  title.textContent = "Welcome";

  let subtitle = document.createElement("h4");
  subtitle.textContent = "Welcome to Elzero School";

  let closeBtn = document.createElement("button");
  closeBtn.textContent = "x";
  closeBtn.className = "close";

  closeBtn.onclick = function () {
      popup.remove();
  };

  popup.appendChild(closeBtn);
  popup.appendChild(title);
  popup.appendChild(subtitle);

  
  document.body.appendChild(popup);
}, 5000);