function addProject() {
    const projectsList = document.getElementById('projects-list');
    const newProject = document.createElement('div');
    newProject.classList.add('bg-gray-100', 'p-4', 'rounded', 'shadow-md', 'mt-4');
    newProject.innerHTML = `
        <h3 class="text-xl font-bold">New Project Title</h3>
        <p>Description of the new project...</p>
    `;
    projectsList.appendChild(newProject);
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent successfully!');
});
