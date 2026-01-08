function openEnvelope() {
  const envelope = document.querySelector('.envelope');
  envelope.classList.add('open');

  setTimeout(() => {
    document.querySelector('.fade').scrollIntoView({ behavior: 'smooth' });
  }, 1000);
}

/* FADE ON SCROLL */
const fades = document.querySelectorAll('.fade');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.3 });

fades.forEach(f => observer.observe(f));

/* GOOGLE SHEETS RSVP */
document.getElementById('rsvp-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = e.target;
  const success = document.getElementById('success');

  fetch('https://script.google.com/macros/s/AKfycbzlWnyf7PVF0aka-WpAXkcuKhdDy_vBK--NC-dm3XmUZeCbTBKO-KVtxMZLAXtPwm25/exec', {
    method: 'POST',
    body: new FormData(form)
  })
  .then(() => {
    success.textContent = 'Thank you for your response!';
    success.style.opacity = 1;
    form.reset();
  })
  .catch(() => {
    success.textContent = 'Something went wrong. Please try again.';
  });
});
