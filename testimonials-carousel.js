// testimonials-carousel.js

// Testimonios dinámicos y auto-scroll vertical
(function(){
  const data = [
    { name: "Ezequiel D · ", city: "Tucumán · ", time: "10:28 (am)", text: "Vi el anuncio de Wonbet.vip en Instagram y, gracias al bono del 200%, pude jugar más y gané al instante. El pago fue inmediato." },
    { name: "Camila R · ", city: "Neuquén · ", time: "9:34 (pm)", text: "El bono del 200% de Wonbet.vip me dio una gran ventaja cuando recién empecé. Ya recomendé la plataforma a mis amigos." },
    { name: "Rodrigo M · ", city: "Bahía Blanca · ", time: "7:20 (pm)", text: "Los cajeros de Wonbet.vip son muy responsables y siempre cumplen con los retiros. Pagaron mi ganancia al instante." },
    { name: "Florencia T · ", city: "Formosa · ", time: "8:57 (am)", text: "Entré a Wonbet.vip por una historia de Instagram y aproveché el bono del 200%. ¡Fue mi primera gran victoria!" },
    { name: "Agustín L · ", city: "San Luis · ", time: "3:46 (pm)", text: "En Wonbet.vip pagan en el momento. Cuando solicité mi retiro, apareció en mi cuenta en minutos." },
    { name: "Milagros J · ", city: "Río Gallegos · ", time: "5:55 (pm)", text: "Gracias al bono del 200% de Wonbet.vip, pude jugar más tiempo y tuve suerte. Pagaron mi retiro sin demoras." },
    { name: "Tomás G · ", city: "Concordia · ", time: "11:03 (am)", text: "El servicio de retiro en Wonbet.vip es impecable. Mi amiga retiró pagos muy grandes y le llegó todo al instante." },
    { name: "Natalia M · ", city: "Chaco · ", time: "8:18 (pm)", text: "No confiaba al principio, pero Wonbet.vip pagó mi ganancia al instante. Los cajeros son muy responsables." },
    { name: "Franco E · ", city: "San Rafael · ", time: "9:42 (am)", text: "Me recomendaron Wonbet.vip y el bono del 200% fue una maravilla para comenzar. Ya he retirado algunas ganancias rápido." },
    { name: "Bianca Z · ", city: "Villa María · ", time: "12:30 (pm)", text: "Wonbet paga en el momento y los cajeros cumplen con cada retiro. ¡Recomiendo la plataforma!" },
    { name: "Facundo C · ", city: "Catamarca · ", time: "2:48 (pm)", text: "La experiencia en Wonbet fue excelente: bono del 200% al registrarme y retiros inmediatos." },
    { name: "Juliana B · ", city: "Misiones · ", time: "1:17 (pm)", text: "Entré a Wonbet gracias al bono del 200% y gané en mi primera sesión. El pago fue instantáneo." },
    { name: "Ramiro T · ", city: "La Rioja · ", time: "4:10 (pm)", text: "El bono inicial del 200% en Wonbet me da un gran impulso. Cuando gané, retiré y me pagaron al instante." },
    { name: "Micaela A · ", city: "Corrientes · ", time: "6:00 (pm)", text: "Los cajeros de Wonbet cumplen con cada retiro. Mi amiga retiró pagos muy grandes y le pagaron de inmediato." },
    { name: "Gonzalo N · ", city: "Pergamino · ", time: "7:45 (pm)", text: "Entré a Wonbet sin expectativas, usé el bono del 200% y gané. El pago llegó instantáneo." },
    { name: "Noelia S · ", city: "Trelew · ", time: "10:05 (am)", text: "Juego en mi cama con Wonbet y, gracias al bono del 200%, conseguí mi primera ganancia. Pagaron al instante 🛏️💸" },
    { name: "Matías I · ", city: "Olavarría · ", time: "10:30 (pm)", text: "Vi el bono del 200% en Wonbet y no lo dudé. Gané y el pago fue inmediato." },
    { name: "Cintia Q · ", city: "San Fernando · ", time: "7:59 (am)", text: "El trato en Wonbet es profesional: los cajeros son responsables y mis retiros siempre se procesan al instante." },
    { name: "Esteban Y · ", city: "Esquel · ", time: "11:12 (pm)", text: "Wonbet me sorprendió: el bono del 200% me ayudó a ganar al principio y pagaron mi retiro al instante." },
    { name: "Valeria P · ", city: "Salta · ", time: "9:15 (am)", text: "Las tragamonedas en Wonbet son divertidas y, gracias al bono del 200%, tuve más oportunidades. Retiro instantáneo." },
    { name: "Hugo S · ", city: "Mar del Plata · ", time: "8:45 (pm)", text: "Wonbet paga en el momento; cuando retiré, los cajeros fueron muy responsables y cumplidores." },
    { name: "Danilo F · ", city: "Bahía Blanca · ", time: "1:22 (pm)", text: "Disfruto jugar póker en Wonbet. El bono del 200% me dio buen impulso y el pago llegó rápido." },
    { name: "Lucía N · ", city: "Bariloche · ", time: "5:30 (pm)", text: "Gracias al bono del 200% de Wonbet, gané en mi primera partida. El retiro fue instantáneo y sin problemas." },
    { name: "Ignacio V · ", city: "Mendoza · ", time: "9:10 (pm)", text: "Cobré mis ganancias en Wonbet en minutos. Los cajeros son responsables y cumplen con los retiros." },
    { name: "Sofía K · ", city: "Rosario · ", time: "12:05 (pm)", text: "La plataforma de Wonbet es muy intuitiva. El bono del 200% facilitó mi inicio y el pago fue inmediato." },
    { name: "Germán L · ", city: "Posadas · ", time: "6:40 (pm)", text: "Los juegos de blackjack en Wonbet son geniales y, con el bono del 200%, gané más. Me pagaron al instante." },
    { name: "Sandra M · ", city: "Salto · ", time: "8:25 (am)", text: "El bono de bienvenida del 200% en Wonbet me permitió probar varios juegos y ganar. El retiro fue inmediato." },
    { name: "Marcos R · ", city: "Santiago del Estero · ", time: "3:55 (pm)", text: "La sección de apuestas deportivas en Wonbet es de 5 estrellas. Usé el bono del 200% y retiré al instante." },
    { name: "Paula G · ", city: "Santa Fe · ", time: "11:48 (am)", text: "Me llamó la atención la variedad de ruletas en Wonbet. Gracias al bono del 200%, gané y el pago fue inmediato." },
    { name: "Diego C · ", city: "Ushuaia · ", time: "10:01 (pm)", text: "En Wonbet pagan en el momento; mi amiga retiró un pago muy grande y todo llegó enseguida." },
    { name: "Ana T · ", city: "Paraná · ", time: "4:37 (pm)", text: "El retiro por transferencia bancaria en Wonbet fue instantáneo. El bono del 200% me ayudó a empezar." },
    { name: "Federico U · ", city: "Junín · ", time: "7:27 (pm)", text: "Las bonificaciones semanales y el bono del 200% en Wonbet me mantienen enganchado. Los retiros son instantáneos." },
    // Comentarios con ubicaciones de Buenos Aires
    { name: "Diego R · ", city: "Quilmes · ", time: "2:15 (pm)", text: "En Wonbet los pagos son inmediatos. Aproveché el bono del 200% y mi amiga retiró un premio grande sin problemas." },
    { name: "Mariana S · ", city: "La Plata · ", time: "11:50 (am)", text: "El bono del 200% en Wonbet me dio un buen empujón de bienvenida. Los cajeros son muy responsables y pagaron al instante." },
    { name: "Lucas T · ", city: "San Isidro · ", time: "4:05 (pm)", text: "Wonbet paga en el acto. Con el bono del 200% gané en mi primera sesión y el retiro llegó en minutos." },
    { name: "Victoria P · ", city: "Avellaneda · ", time: "6:22 (pm)", text: "Los cajeros de Wonbet cumplen siempre. Mi amiga retiró un premio grande y lo cobró de inmediato." },
    { name: "Ignacio F · ", city: "Lomas de Zamora · ", time: "9:30 (pm)", text: "Gracias al bono del 200% de Wonbet pude probar muchos juegos. Cuando retiré, pagaron sin demoras." },
    { name: "Ana B · ", city: "La Matanza · ", time: "8:55 (am)", text: "La atención en Wonbet es impecable: los cajeros responden rápido y los pagos son instantáneos." }
  ];

  const container = document.getElementById('testimonialsCarousel');
  let idx = 0, timer;

  // Crear y anexar elementos al contenedor
  data.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'testimonial-item';
   div.innerHTML = `
  <p class="header">
    <img
      src="images/usuario.png"
      alt="Usuario"
      class="icon icon-user"
    />
    ${item.name.trim()}
    <span class="time">${item.time}</span>
  </p>
  <p class="message">
    "${item.text}"
  </p>
  <p class="meta">
    <img
      src="images/pin.png"
      alt="Ubicación"
      class="icon icon-pin"
    />
    ${item.city.trim()}
  </p>
`;

    container.appendChild(div);
  });

  const items = container.querySelectorAll('.testimonial-item');

  function show(index) {
    items.forEach((el, i) => {
      el.classList.toggle('active', i === index);
    });
  }

  function next() {
    idx = (idx + 1) % items.length;
    show(idx);
  }

  // Mostrar el primero y lanzar auto-scroll
  show(0);
  timer = setInterval(next, 4000);

  // Pausar al hacer hover o touch
  container.addEventListener('mouseenter', () => clearInterval(timer));
  container.addEventListener('mouseleave', () => timer = setInterval(next, 4000));
  container.addEventListener('touchstart', () => clearInterval(timer));
  container.addEventListener('touchend', () => timer = setInterval(next, 4000));
})();


document.querySelectorAll('.carousel-item img').forEach(img => {
  img.addEventListener('load', () => {
    const skeleton = img.parentElement.querySelector('.skeleton');
    if (skeleton) skeleton.remove();
  });
});