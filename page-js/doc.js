const classSearch = document.getElementById('classSearch');
    if (classSearch) {
      classSearch.addEventListener('input', () => {
        const query = classSearch.value.trim().toLowerCase();
        document.querySelectorAll('.class-pill').forEach((pill) => {
          const token = pill.getAttribute('data-class-name').toLowerCase();
          const match = !query || token.includes(query);
          pill.style.display = match ? 'inline-flex' : 'none';
        });
      });
    }
