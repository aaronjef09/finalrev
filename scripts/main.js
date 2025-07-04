document.addEventListener('DOMContentLoaded', function() {
  const teamContainer = document.getElementById('team-container');
  const skillsContainer = document.getElementById('skills-container');
  const projectsContainer = document.getElementById('projects-container');

  team.forEach(member => {
    const col = document.createElement('div');
    col.className = 'col-md-3 mb-4';
    col.innerHTML = `
      <div class="profile-card team-card p-4 text-center">
        <img src="https://github.com/${member.username}.png" 
             alt="${member.name}" 
             class="profile-img rounded-circle mb-3">
        <h5>${member.name}</h5>
        <p class="text-muted mb-3">${member.role}</p>
        <div class="d-flex flex-wrap justify-content-center">
          <a href="${member.github}" target="_blank" class="btn btn-github btn-action">
            <i class="fab fa-github me-2"></i>Profile
          </a>
          <a href="${member.portfolio}" target="_blank" class="btn btn-portfolio btn-action">
            <i class="fas fa-globe me-2"></i>Portfolio
          </a>
        </div>
      </div>
    `;
    teamContainer.appendChild(col);
  });

  team.forEach(member => {
    member.projects.forEach(project => {
      const col = document.createElement('div');
      col.className = 'col-md-6 mb-4';
      col.innerHTML = `
        <div class="card p-4 projects-card h-100">
          <h4><i class="fas fa-${getProjectIcon(member.role)} me-2"></i>${project.title}</h4>
          <p>${project.description}</p>
          <a href="${project.link}" target="_blank" class="btn btn-github">
            <i class="fas fa-external-link-alt me-2"></i>View Project
          </a>
        </div>
      `;
      projectsContainer.appendChild(col);
    });
  });

  skills.forEach(skill => {
    const skillElement = document.createElement('div');
    skillElement.className = 'skill-item';
    skillElement.innerHTML = `
      <i class="${skill.icon} skill-icon ${skill.class}"></i>
      <span class="skill-name">${skill.name}</span>
    `;
    skillsContainer.appendChild(skillElement);
  });

  function getProjectIcon(role) {
    if (role.includes('Frontend')) return 'laptop-code';
    if (role.includes('Backend')) return 'server';
    if (role.includes('Full Stack')) return 'code';
    return 'cloud';
  }
});