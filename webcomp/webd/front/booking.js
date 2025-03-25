document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('booking-form');
    const doctorInput = document.getElementById('doctor');
    const dateInput = document.getElementById('date');
    const timeInput = document.getElementById('time');
    const patientNameInput = document.getElementById('patient-name');
    const patientEmailInput = document.getElementById('patient-email');
    const confirmationModal = document.getElementById('confirmation-modal');
    const confirmationDetails = document.getElementById('confirmation-details');
    const closeModal = document.querySelector('.modal .close');

    // Pre-fill doctor name from URL
    const urlParams = new URLSearchParams(window.location.search);
    const doctorName = urlParams.get('doctor');
    if (doctorName) {
        doctorInput.value = decodeURIComponent(doctorName);
    }

    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);

    // Form submission
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const doctor = doctorInput.value;
        const date = dateInput.value;
        const time = timeInput.value;
        const patientName = patientNameInput.value;
        const patientEmail = patientEmailInput.value;

        confirmationDetails.innerHTML = `
            Doctor: ${doctor}<br>
            Date: ${date}<br>
            Time: ${time}<br>
            Patient: ${patientName}<br>
            Email: ${patientEmail}
        `;
        confirmationModal.style.display = 'block';
        bookingForm.reset();
    });

    // Close modal
    closeModal.addEventListener('click', () => {
        confirmationModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === confirmationModal) {
            confirmationModal.style.display = 'none';
        }
    });
});