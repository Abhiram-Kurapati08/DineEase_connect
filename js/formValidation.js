const form = document.getElementById("reservation-form");

function validateForm(event) {
  event.preventDefault();

  const hour = form.hour.value.trim();
  const date = form.date.value.trim();
  const phone = form.phone.value.trim();
  const email = form.email.value.trim();
  const name = form.name.value.trim();
  const people = form.people.value.trim();

  if (!hour || !date || !phone || !email || !name || !people) {
    alert("Please fill out all fields");
  } else {
    form.submit();
  }
}

form.addEventListener("submit", validateForm);
