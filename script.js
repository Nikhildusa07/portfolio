// AOS animations
AOS.init({ duration: 1000, once: true });

// Typing animation
new Typed("#typed-text", {
  strings: ["AI/ML Engineer", "Full-Stack Developer", "Tech Enthusiast"],
  typeSpeed: 70,
  backSpeed: 50,
  loop: true
});

// Fetch GitHub Projects
async function fetchProjects() {
  const response = await fetch("https://api.github.com/users/Nikhildusa07/repos");
  const repos = await response.json();
  const container = document.getElementById("projects-container");
  container.innerHTML = "";

  repos
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
    .slice(0, 6)
    .forEach(repo => {
      const projectCard = document.createElement("div");
      projectCard.className =
        "bg-gray-700 p-4 rounded-lg shadow hover:scale-105 transition transform hover:shadow-2xl";
      projectCard.innerHTML = `
        <h4 class="text-xl font-bold mb-2">${repo.name}</h4>
        <p class="text-gray-300 mb-2">${repo.description || "No description provided."}</p>
        <a href="${repo.html_url}" target="_blank" class="text-blue-400 hover:underline">View on GitHub</a>
      `;
      container.appendChild(projectCard);
    });
}
fetchProjects();

// Modal for certificates
function openModal(imgSrc) {
  document.getElementById("modal-image").src = imgSrc;
  document.getElementById("certificate-modal").classList.remove("hidden");
  document.getElementById("certificate-modal").classList.add("flex");
}
function closeModal() {
  document.getElementById("certificate-modal").classList.add("hidden");
}
