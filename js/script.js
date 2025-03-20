document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log('Dados do formulário:', data);
    
    // Exemplo de feedback para o usuário
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    contactForm.reset();
  });

  // Animation smooth scroll for menu links
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const section = document.querySelector(this.getAttribute('href'));
      section.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});