document.addEventListener('DOMContentLoaded', () => {
    // Populate Featured Doctors
    const doctorGrid = document.querySelector('.featured-doctors .doctor-grid');
    if (doctorGrid) {
        const featuredDoctors = [
            { name: 'Dr. Sanjay Gupta', specialty: 'General Physician', location: 'Bangalore', fees: '₹500', rating: '4.8', image: 'im/result_1.jpeg' },
            { name: 'Dr. Neha Patel', specialty: 'Ophthalmologist', location: 'Chennai', fees: '₹600', rating: '4.9', image: 'im/result_1.jpeg' },
            { name: 'Dr. Vikram Singh', specialty: 'Cardiologist', location: 'Hyderabad', fees: '₹800', rating: '4.6', image: 'im/result_1.jpeg' },
        ];

        featuredDoctors.forEach(doctor => {
            const card = document.createElement('div');
            card.className = 'doctor-card';
            card.innerHTML = `
                <img src="${doctor.image}" alt="${doctor.name}">
                <h3>${doctor.name}</h3>
                <p>Specialty: ${doctor.specialty}</p>
                <p>Location: ${doctor.location}</p>
                <p>Fees: ${doctor.fees}</p>
                <p>Rating: ${doctor.rating}/5</p>
                <button class="book-btn" onclick="window.location.href='booking.html?doctor=${encodeURIComponent(doctor.name)}'">Book Now</button>
            `;
            doctorGrid.appendChild(card);
        });
    }

    // Search Functionality (Demo)
    const searchBtn = document.getElementById('search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const specialty = document.getElementById('specialty-input').value;
            const location = document.getElementById('location-input').value;
            if (specialty && location) {
                window.location.href = `find-doctors.html?specialty=${encodeURIComponent(specialty)}&location=${encodeURIComponent(location)}`;
            } else {
                alert('Please enter both specialty and location.');
            }
        });
    }

    // Testimonial Carousel
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        });

        nextBtn.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        });

        // Auto-slide every 5 seconds
        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 5000);
    }
});