document.addEventListener('DOMContentLoaded', function() {
  const team = [
    { username: "aaronjef09", site: "https://aaronjef09.github.io/portfolio" },
    { username: "shleyxx", site: "https://github.com/shleyxx" },
    { username: "azi1408", site: "https://azi1408.github.io/" },
    { username: "johnzed899", site: "https://johnzed899.github.io" }
  ];

  const profileContainer = document.getElementById("profile-container");
  const mainView = document.getElementById("main-view");
  const profileView = document.getElementById("profile-view");

  team.forEach(member => {
    fetchGitHubProfile(member.username)
      .then(user => {
        if (!user) return;
        
        const col = document.createElement("div");
        col.className = "col-md-4 col-lg-3 mb-4 d-flex";
        col.innerHTML = `
          <div class="profile-card w-100">
            <img src="${user.avatar_url}" alt="${user.login}">
            <h5>${user.name || user.login}</h5>
            <p>${user.bio || "GitHub user."}</p>
          </div>
        `;
        
        col.querySelector('.profile-card').addEventListener('click', () => {
          showProfile({ ...user, site: member.site });
        });
        
        profileContainer.appendChild(col);
      });
  });

  window.showProfile = function(user) {
    mainView.style.display = "none";
    profileView.style.display = "block";
    
    document.getElementById("profile-avatar").src = user.avatar_url;
    document.getElementById("profile-name").textContent = user.name || user.login;
    document.getElementById("profile-bio").textContent = user.bio || "No bio available.";
    document.getElementById("profile-link").onclick = () => window.open(user.site, '_blank');
  };

  window.goBack = function() {
    profileView.style.display = "none";
    mainView.style.display = "block";
  };
});