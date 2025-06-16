  <script>
    const toggle = document.getElementById('darkToggle');
    const html = document.documentElement;
    toggle.addEventListener('click', () => {
      html.classList.toggle('dark');
      toggle.textContent = html.classList.contains('dark') ? '☀️' : '🌙';
    });

    const menuBtn = document.getElementById('menuBtn');
    const sideMenu = document.getElementById('sideMenu');
    const closeMenu = document.getElementById('closeMenu');

    menuBtn.addEventListener('click', () => sideMenu.classList.remove('hidden'));
    closeMenu.addEventListener('click', () => sideMenu.classList.add('hidden'));
  </script>
