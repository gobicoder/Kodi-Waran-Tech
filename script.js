// Navigation toggle
const menuBtn = document.getElementById('menuBtn');
const navList = document.getElementById('navList');
menuBtn.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// Booking modal
const openBooking = document.querySelectorAll('.book-btn, .price-book');
const bookingModal = document.getElementById('bookingModal');
const closeBooking = document.getElementById('closeBooking');
const body = document.body;

openBooking.forEach(btn => {
  btn.addEventListener('click', () => {
    bookingModal.classList.add('active');
    // Blur background
    body.classList.add('blur-back');
  });
});

closeBooking.addEventListener('click', () => {
  bookingModal.classList.remove('active');
  body.classList.remove('blur-back');
});

// Click outside modal to close
bookingModal.addEventListener('click', (e) => {
  if(e.target === bookingModal){
    bookingModal.classList.remove('active');
    body.classList.remove('blur-back');
  }
});

// Booking form submit
const bookingForm = document.getElementById('bookingForm');
bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Booking submitted successfully!');
  bookingModal.classList.remove('active');
  body.classList.remove('blur-back');
  bookingForm.reset();
});
