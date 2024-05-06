function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const offset = 5; 
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition - offset;
  
    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }