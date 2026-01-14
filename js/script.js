const RSVP_ENDPOINT = 'https://script.google.com/macros/s/AKfycbxLhSxC5zuvG-IGhHUIOdiAQWacUAmRrw4muf59A6ssCnNbQ7DeScc4_YUrtU6A5gU_/exec';

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

  fetch(RSVP_ENDPOINT, {
    method: 'POST',
    body: new FormData(form)
  })
  .then((res) => {
    if (!res.ok) throw new Error('Server error ' + res.status);
    success.textContent = 'Ви благодариме за вашиот одговор!';
    success.style.opacity = 1;
    form.reset();
  })
  .catch(() => {
    success.textContent = 'Нешто тргна наопаку. Ве молиме обидете се повторно.';
  });
});
