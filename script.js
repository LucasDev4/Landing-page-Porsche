gsap.registerPlugin(ScrollTrigger);

const cards = document.querySelectorAll(".options-car div");
const carHero = document.getElementById("carHero");

cards.forEach(card => {
  card.addEventListener("click", () => {

    cards.forEach(c => c.classList.remove("active"));
    card.classList.add("active");

    let newImage = "./imagens/porsche1.png";

    if (card.classList.contains("card-car-red")) {
      newImage = "./imagens/Porsche1Vermelho.png";
    }

    if (card.classList.contains("card-car-blue")) {
      newImage = "./imagens/Porsche1Azul.png";
    }

    gsap.to(carHero, {
      opacity: 0,
      scale: 0.80,
      duration: 0.3,
      ease: "power2.out",
      onComplete: () => {
        carHero.src = newImage;

        gsap.to(carHero, {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "power2.out"
        });
      }
    });
  });
});



const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl
  .to(".fundo", { opacity: 1, duration: 1 })
  .to(".numero", { opacity: 1, y: 0, duration: 0.7 })
  .to("#carHero", { opacity: 1, scale: 1 })
  .to("#nome", { opacity: 1, y: 0 })
  .to(".GT3", { opacity: 1, duration: 1.5 })
  .to("#track", { opacity: 1, y: 0 });


gsap.timeline({
  scrollTrigger: {
    trigger: ".container-principal-info",
    start: "top 70%",
    end: "top 40%",
    scrub: true
  }
})
.to(".container-info", {
  x: 0,
  opacity: 1
})
.to("#style", {
  x: 0,
  opacity: 1
}, "<");


gsap.timeline({
  scrollTrigger: {
    trigger: ".long-container-main",
    start: "top top",
    end: "+=1000",
    scrub: true,
    pin: true,
    anticipatePin: 1
  }
})
.to("#porsche", {
  y: 1200,
  ease: "none"
})
.from(".white-part", {
  opacity: 0,
  y: 120,
  duration: 0.6
}, 0.2);


gsap.to(".gray-part", {
  scrollTrigger: {
    trigger: ".gray-part",
    start: "top 80%",
    toggleActions: "play none none none"
  },
  opacity: 1,
  y: 0,
  duration: 0.8,
  ease: "power3.out"
});

