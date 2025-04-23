// Existing code that loads projects...
window.scrollTo(0, 0); // Reset scroll to top

document.addEventListener("DOMContentLoaded", () => {
  const projectData = [
    {
      title: "Business website",
      description: "This is a business website developed by me using HTML, CSS, and JavaScript. *It is an ongoing project.*",
      image: "images/project1.png",
      link: "https://drive.google.com/drive/folders/1fGw3zUfC8JSbwmcqBsBGQySNg-y8b6P7?usp=sharing"
    },
  ];

  const projectGrid = document.querySelector(".project-grid");

  projectData.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("project-card", "fade-in");

    card.innerHTML = `
      <img src="${project.image}" alt="${project.title}" style="width:100%; border-radius:4px; margin-bottom:15px;">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" class="btn" style="margin-top:10px; display:inline-block;">View Project</a>
    `;

    projectGrid.appendChild(card);
  });

  // Scroll animation
  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("appear");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => appearOnScroll.observe(fader));
});
