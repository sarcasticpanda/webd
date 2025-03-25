document.addEventListener('DOMContentLoaded', () => {
    const doctorListings = document.querySelector('.doctor-listings');
    const specialtyFilter = document.getElementById('specialty-filter');
    const cityFilter = document.getElementById('city-filter');
    const availabilityFilter = document.getElementById('availability-filter');
    const ratingFilter = document.getElementById('rating-filter');
    const filterBtn = document.getElementById('filter-btn');

    const doctors = [
        { name: 'Dr. Priya Sharma', specialty: 'Dentists', location: 'Mumbai', experience: '10 years', rating: '4.7', image: 'im/result_1.jpeg', availability: 'Today' },
        { name: 'Dr. Sanjay Gupta', specialty: 'General Physicians', location: 'Bangalore', experience: '15 years', rating: '4.8', image: 'im/result_1.jpeg', availability: 'Tomorrow' },
        { name: 'Dr. Neha Patel', specialty: 'Ophthalmologists', location: 'Chennai', experience: '8 years', rating: '4.9', image: 'im/result_1.jpeg', availability: 'Today' },
        { name: 'Dr. Vikram Singh', specialty: 'Cardiologists', location: 'Hyderabad', experience: '12 years', rating: '4.6', image: 'im/result_1.jpeg', availability: 'Tomorrow' },
        { name: 'Dr. Rakesh Kumar', specialty: 'Orthopedics', location: 'Pune', experience: '9 years', rating: '4.4', image: 'im/result_1.jpeg', availability: 'Today' },
    ];

    function displayDoctors(filteredDoctors) {
        doctorListings.innerHTML = '';
        filteredDoctors.forEach(doctor => {
            const card = document.createElement('div');
            card.className = 'doctor-card';
            card.innerHTML = `
                <img src="${doctor.image}" alt="${doctor.name}">
                <h3>${doctor.name}</h3>
                <p>Specialty: ${doctor.specialty}</p>
                <p>Location: ${doctor.location}</p>
                <p>Experience: ${doctor.experience}</p>
                <p>Rating: ${doctor.rating}/5</p>
                <button class="book-btn" onclick="window.location.href='booking.html?doctor=${encodeURIComponent(doctor.name)}'">Book Appointment</button>
            `;
            doctorListings.appendChild(card);
        });
    }

    // Initial display of all doctors
    displayDoctors(doctors);

    // Filter functionality
    filterBtn.addEventListener('click', () => {
        const specialty = specialtyFilter.value;
        const city = cityFilter.value.toLowerCase();
        const availability = availabilityFilter.value;
        const rating = ratingFilter.value;

        const filteredDoctors = doctors.filter(doctor => {
            return (
                (!specialty || doctor.specialty === specialty) &&
                (!city || doctor.location.toLowerCase().includes(city)) &&
                (!availability || doctor.availability === availability) &&
                (!rating || parseFloat(doctor.rating) >= parseFloat(rating))
            );
        });

        displayDoctors(filteredDoctors);
    });

    // Pre-fill filters from URL parameters (from home page search)
    const urlParams = new URLSearchParams(window.location.search);
    const specialtyFromUrl = urlParams.get('specialty');
    const locationFromUrl = urlParams.get('location');
    if (specialtyFromUrl) specialtyFilter.value = specialtyFromUrl;
    if (locationFromUrl) cityFilter.value = locationFromUrl;
    if (specialtyFromUrl || locationFromUrl) filterBtn.click();
});