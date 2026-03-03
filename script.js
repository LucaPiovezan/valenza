
  // ── Dados dos veículos (edite aqui) ──
  function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ 
      behavior: "smooth" 
    });
  }
}
  const cars = [
    { name: 'BMW Série 3', year: 2023, km: '15.000 km', category: 'sedan', price: 'R$ 289.900', image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop' },
    { name: 'Porsche Cayenne', year: 2022, km: '22.000 km', category: 'suv', price: 'R$ 520.000', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop' },
    { name: 'Ferrari 488', year: 2021, km: '8.000 km', category: 'esportivo', price: 'R$ 1.890.000', image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=600&h=400&fit=crop' },
    { name: 'Mercedes C300', year: 2024, km: '0 km', category: 'sedan', price: 'R$ 385.000', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop' },
    { name: 'Range Rover Sport', year: 2023, km: '10.000 km', category: 'suv', price: 'R$ 680.000', image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop' },
    { name: 'Lamborghini Huracán', year: 2022, km: '5.000 km', category: 'esportivo', price: 'R$ 2.100.000', image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop' },
  ];

  let currentFilter = 'todos';

  function renderCars(filter) {
    const grid = document.getElementById('carGrid');
    const filtered = filter === 'todos' ? cars : cars.filter(c => c.category === filter);
    grid.innerHTML = filtered.map(car => `
      <div class="vehicle-card">
        <div class="card-img">
          <img src="${car.image}" alt="${car.name}" loading="lazy"/>
          <div class="card-img-overlay"></div>
          <span class="card-badge">${car.category}</span>
        </div>
        <div class="card-body">
          <h3 class="card-name">${car.name}</h3>
          <div class="card-meta">
            <span>📅 ${car.year}</span>
            <span>⏱ ${car.km}</span>
          </div>
          <p class="card-price">${car.price}</p>
        </div>
      </div>
    `).join('');
  }

  function filterCars(filter, btn) {
    currentFilter = filter;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCars(filter);
  }

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  function toggleMenu() {
    const burger = document.getElementById('burger');
    const menu = document.getElementById('mobileMenu');
    burger.classList.toggle('open');
    menu.classList.toggle('open');
  }

  function closeMenu() {
    document.getElementById('burger').classList.remove('open');
    document.getElementById('mobileMenu').classList.remove('open');
  }

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
  });

  // Init
  renderCars('todos');
