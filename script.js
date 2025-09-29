// Função para menu mobile: fecha ao clicar fora ou em item
document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("DOMContentLoaded", () => {
        const hamburger = document.querySelector(".hamburger");
        const menu = document.querySelector(".menu");
      
        hamburger.addEventListener("click", () => {
          hamburger.classList.toggle("active");
          menu.classList.toggle("active");
        });
      
        // Fecha menu ao clicar fora
        document.addEventListener("click", (e) => {
          if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
            menu.classList.remove("active");
            hamburger.classList.remove("active");
          }
        });
      
        // Fecha menu ao clicar em item
        menu.querySelectorAll("a").forEach(link => {
          link.addEventListener("click", () => {
            menu.classList.remove("active");
            hamburger.classList.remove("active");
          });
        });
      });
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      menu.classList.toggle("active");
    });
    document.addEventListener("click", (e) => {
      if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
        menu.classList.remove("active");
        hamburger.classList.remove("active");
      }
    });
    menu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("active");
        hamburger.classList.remove("active");
      });
    });
  
    // Barra de navegação muda cor ao rolar
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
      if(window.scrollY > 50){
        navbar.style.background = "rgba(7,56,78,0.95)";
        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.15)";
      } else {
        navbar.style.background = "#07384E";
        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
      }
    });
  
    // Carrossel de depoimentos automático
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
  
    // Formulário de contato com feedback visual e spinner
    const form = document.getElementById("formContato");
    const mensagem = document.getElementById("mensagemConfirmacao");
    form.addEventListener("submit", function(e){
      e.preventDefault();
      mensagem.textContent = "";
      mensagem.style.color = "#197019";
      mensagem.innerHTML = '<span class="spinner"></span> Enviando...';
      setTimeout(() => {
        mensagem.innerHTML = "Mensagem enviada com sucesso! Entraremos em contato em breve.";
        form.reset();
        setTimeout(() => mensagem.textContent = '', 4000);
      }, 1600);
    });
  
    // Animação ao rolar (fade-in para cards e depoimentos)
    function animateOnScroll() {
      document.querySelectorAll('[data-anime]').forEach(element => {
        const windowTop = window.scrollY + window.innerHeight * 0.85;
        if (windowTop > element.offsetTop) {
          element.classList.add('animate');
        }
      });
      document.querySelectorAll('.card, .card2').forEach(card => {
        const windowTop = window.scrollY + window.innerHeight * 0.90;
        if(windowTop > card.offsetTop){
          card.classList.add('animate');
        }
      });
    }
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
  
    // WhatsApp acessível
    window.openWhatsApp = function() {
      const phoneNumber = "5516993064096";
      const message = encodeURIComponent("Olá, tudo bem? Gostaria de conversar sobre uma situação que estou enfrentando.");
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
      document.querySelector('.whatsapp-button .tooltip').textContent = "Redirecionando...";
      setTimeout(() => {
        document.querySelector('.whatsapp-button .tooltip').textContent = "Fale conosco via WhatsApp";
      }, 2000);
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
    const bar = document.getElementById('cookie-bar');
    const btn = document.getElementById('cookie-btn');
    if (!localStorage.getItem('cookieAccepted')) {
      bar.style.display = 'flex';
    } else {
      bar.style.display = 'none';
    }
  
    btn.addEventListener('click', function() {
      btn.disabled = true;
      localStorage.setItem('cookieAccepted', 'true');
      bar.style.display = 'none';
    });
  });
    // Barra de navegação muda cor ao rolar
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
      if(window.scrollY > 50){
        navbar.style.background = "rgba(7,56,78,0.95)";
        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.15)";
      } else {
        navbar.style.background = "#07384E";
        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
      }
    });