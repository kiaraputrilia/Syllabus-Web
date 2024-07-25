function loadContent(select) {
    const value = select.value;
    const contentSections = document.querySelectorAll('.content-section');

    contentSections.forEach(section => {
        if (section.id === value + '-content') {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}
