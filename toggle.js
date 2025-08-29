document.addEventListener("DOMContentLoaded", function() {
  // cria botão
  const btn = document.createElement("button");
  btn.innerText = "🌙 / ☀️";
  btn.className = "theme-toggle";
  
  // adiciona botão na navbar
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    navbar.appendChild(btn);
  }
  
  // evento de clique
  btn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
  });
  
  // inicia em claro
  document.body.classList.add("light-mode");
});
