const rating = document.querySelectorAll('.rate-btn');
const a = document.getElementById('ratingText');
const submitBtn = document.getElementById('sub-btn');
const ratingSection = document.getElementById('rating');
const thankSection = document.getElementById('thank');

for (let i = 0; i < rating.length; i++) {
  rating[i].addEventListener('click', function () {
    a.textContent = rating[i].textContent + ' ';
  });
}

submitBtn.addEventListener('click', function () {
  ratingSection.style.display = 'none';
  thankSection.style.display = 'grid';
});
