let projects = [];

// Modal handling
const modal = document.getElementById("create-project-modal");
const btn = document.getElementById("create-project-button");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Add project
document.getElementById('submit-project-button').addEventListener('click', addProject);

function addProject() {
    const title = document.getElementById('project-title').value;
    const goal = document.getElementById('funding-goal').value;
    const description = document.getElementById('project-description').value;

    if (title && goal && description) {
        const project = {
            title,
            goal: parseFloat(goal),
            description,
            contributions: 0
        };
        projects.push(project);
        displayProjects();
        modal.style.display = "none";
        clearForm();
   