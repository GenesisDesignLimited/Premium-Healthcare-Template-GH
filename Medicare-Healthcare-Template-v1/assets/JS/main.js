// main.js - basic interactions and simple animation
document.addEventListener('DOMContentLoaded', function(){
  // set year in footers
  const years = new Date().getFullYear();
  for(let i=1;i<=6;i++){
    const el = document.getElementById('year'+(i===1? '': i));
    if(el) el.textContent = years;
  }

  // simple intersection observer for fadein elements
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, {threshold:0.15});

  document.querySelectorAll('.fadein').forEach(el=>obs.observe(el));

  // basic booking/contact form handling (client-side)
  function handleForm(e){
    e.preventDefault();
    const form = e.target;
    // Simple validation - check required fields
    const req = form.querySelectorAll('[required]');
    for(const field of req){
      if(!field.value.trim()){
        alert('Please fill the required fields.');
        field.focus();
        return;
      }
    }
    // simulate submit
    alert('Thanks! Your request has been sent. We will contact you shortly.');
    form.reset();
  }

  const booking = document.getElementById('bookingForm');
  if(booking) booking.addEventListener('submit', handleForm);

  const contact = document.getElementById('contactForm');
  if(contact) contact.addEventListener('submit', handleForm);
});
