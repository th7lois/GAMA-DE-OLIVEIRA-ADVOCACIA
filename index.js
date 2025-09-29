document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");
  const navbar = document.querySelector('.navbar');

  // Abrir/fechar menu ao clicar no hambúrguer
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation(); // Impede propagação para o handler global
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
  });

  // Fecha o menu ao clicar fora dele
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
      menu.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });

  // Fecha menu ao clicar em qualquer link dentro do menu
  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });

  // Muda o fundo da navbar ao rolar
  window.addEventListener('scroll', () => {
    if(window.scrollY > 50){
      navbar.style.background = "rgba(7,56,78,0.95)";
      navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.15)";
    } else {
      navbar.style.background = "#07384E";
      navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    }
  });

  // Carrossel automático dos cards2
  const cards2 = document.querySelector('.cards2');
  let scrollPos = 0;
  setInterval(() => {
    if(cards2){
      scrollPos += 290;
      if(scrollPos >= cards2.scrollWidth - cards2.clientWidth){
        scrollPos = 0;
      }
      cards2.scrollTo({left: scrollPos, behavior: "smooth"});
    }
  }, 3500);
});