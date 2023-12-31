function updatePersonalInfo(fieldId, fieldValue) {
  // Get input values for personal information
  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var bio = document.getElementById("bio").value;

  // Update the preview content for personal information
  var hp = document.getElementById("view");

  switch (fieldId) {
    case "first-name":
      hp.querySelector(".first-name").textContent = fieldValue;
      break;
    case "last-name":
      hp.querySelector(".last-name").textContent = fieldValue;
      break;
    case "email":
      hp.querySelector(".email-val").textContent = fieldValue;
      break;
    case "phone":
      hp.querySelector(".phone-val").textContent = fieldValue;
      break;
    case "bio":
      hp.querySelector(".desc").textContent = fieldValue;
      break;
    default:
      break;
  }
}

var addedExperiences = [
  {
    orgname: "",
    orgadd: "",
    tnr: "",
    role: "",
    activity: "",
  },
];

function updateExperiencePreview() {
  var exp_p = document.getElementById("experience-preview");
  exp_p.innerHTML =
    '<div class="section__title">Experience</div><div class="section__list">';

  // Loop through added experiences and update the preview
  addedExperiences.forEach(function (experience, index) {
    var orgname = experience.orgname;
    var orgadd = experience.orgadd;
    var tnr = experience.tnr;
    var role = experience.role;
    var activity = experience.activity;

    // Append the HTML for each experience to the experience preview
    exp_p.innerHTML += `
    <div class="section__list-item">
      <div class="left">
        <div class="name">${orgname}</div>
        <div class="addr">${orgadd}</div>
        <div class="duration">${tnr}</div>
      </div>
      <div class="right">
        <div class="name">${role}</div>
        <div class="desc">${activity}</div>
      </div>
    </div>
    <br/>
  `;

    // Add an event listener for each field to update only the corresponding section
    document
      .getElementById(`orgname${index + 1}`)
      .addEventListener("input", function () {
        exp_p.querySelector(`#orgname${index + 1} .name`).innerHTML =
          this.value;
      });

    document
      .getElementById(`orgadd${index + 1}`)
      .addEventListener("input", function () {
        exp_p.querySelector(`#orgadd${index + 1} .addr`).innerHTML = this.value;
      });

    document
      .getElementById(`tnr${index + 1}`)
      .addEventListener("input", function () {
        exp_p.querySelector(`#tnr${index + 1} .duration`).innerHTML =
          this.value;
      });

    document
      .getElementById(`role${index + 1}`)
      .addEventListener("input", function () {
        exp_p.querySelector(`#role${index + 1} .name`).innerHTML = this.value;
      });

    document
      .getElementById(`activity${index + 1}`)
      .addEventListener("input", function () {
        exp_p.querySelector(`#activity${index + 1} .desc`).innerHTML =
          this.value;
      });
  });

  exp_p.innerHTML += "</div></div>"; // Close the Experience section
}

function updateExperience(index) {
  var experience = addedExperiences[index - 1];

  // Update the corresponding properties in the experience object
  experience.orgname = document.getElementById(`orgname${index}`).value;
  experience.orgadd = document.getElementById(`orgadd${index}`).value;
  experience.tnr = document.getElementById(`tnr${index}`).value;
  experience.role = document.getElementById(`role${index}`).value;
  experience.activity = document.getElementById(`activity${index}`).value;

  updateExperiencePreview(); // Update the preview after each input change
}

function updateEducationPreview() {
  var edu_p = document.getElementById("education-preview");
  edu_p.innerHTML =
    '<div class="section__title">Education</div><div class="section__list">';

  addedEducations.forEach(function (education) {
    var eduName = education.eduName;
    var eduAddress = education.eduAddress;
    var eduTenure = education.eduTenure;

    edu_p.innerHTML += `
    <div class="section__list-item">
      <div class="left">
        <div class="name">${eduName}</div>
        <div class="addr">${eduAddress}</div>
        <div class="duration">${eduTenure}</div>
      </div>
    </div>
    <br/>
  `;
  });

  edu_p.innerHTML += "</div></div>"; // Close the Education section
}

function updateProjectsPreview() {
  var proj_p = document.getElementById("projects-preview");
  proj_p.innerHTML =
    '<div class="section__title">Projects</div><div class="section__list">';

  addedProjects.forEach(function (project) {
    var projectName = project.projectName;
    var projectDescription = project.projectDescription;

    proj_p.innerHTML += `
    <div class="section__list-item">
        <div class="name">${projectName}</div>
        <div class="text" style="overflow-wrap: break-word;">${projectDescription}</div>
      </div>
    <br/>
  `;
  });

  proj_p.innerHTML += "</div></div>"; // Close the Projects section
}

function updateSkillsPreview() {
  var skills_p = document.getElementById("skills-preview");
  skills_p.innerHTML =
    '<div class="section__title">Skills</div><div class="skills">';

  addedSkills.forEach(function (skill) {
    var skillName = skill.skillName;

    skills_p.innerHTML += `
    <div class="skills__item">
      <div class="left">
        <div class="name">${skillName}</div>
      </div>
    </div>
  `;
  });

  skills_p.innerHTML += "</div></div>"; // Close the Skills section
}

function updatePreview() {
  updatePersonalInfo();
  updateExperiencePreview();
  updateEducationPreview();
  updateProjectsPreview();
  updateSkillsPreview();
  var container = document.querySelector(".container");

  // Set the top position dynamically based on the scroll position
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  container.style.top = scrollTop + 10 + "px";
}

var experienceCounter = 1; // Counter for unique IDs

function addExperience() {
  var container = document.querySelector(".experience");

  // Increment the counter
  experienceCounter++;

  // Create an object to store the values of the added experience
  var experience = {
    orgname: "",
    orgadd: "",
    tnr: "",
    role: "",
    activity: "",
  };

  var newExperience = document.createElement("div");

  newExperience.innerHTML = `
    <div>
      <label>Organisation Name:</label>
      <input type="text" id="orgname${experienceCounter}" oninput="updateExperiencePreview(${experienceCounter})"/>
      <br>
      <label>Organisation Address:</label>
      <input type="text" id="orgadd${experienceCounter}" oninput="updateExperiencePreview(${experienceCounter})"/>
      <br>
      <label>Tenure:</label>
      <input type="text" id="tnr${experienceCounter}" oninput="updateExperiencePreview(${experienceCounter})"/>
      <br>
      <label>Role:</label>
      <input type="text" id="role${experienceCounter}" oninput="updateExperiencePreview(${experienceCounter})"/>
      <br>
      <label>Activity:</label>
      <input type="text" id="activity${experienceCounter}" oninput="updateExperiencePreview(${experienceCounter})"/>
    </div>
  `;

  container.appendChild(newExperience);

  // Update the experience object in the array
  addedExperiences.push(experience);

  // Add event listeners to the new input fields
  newExperience.querySelectorAll("input").forEach((input, index) => {
    input.addEventListener("input", function () {
      // Update the corresponding property in the experience object
      experience[input.id.replace(/\d+/g, "")] = input.value;
      updateExperiencePreview(); // Update the preview after each input change
    });
  });
}

function undoExperience() {
  var container = document.querySelector(".experience");

  // Check if there are any added experiences
  if (addedExperiences.length > 0) {
    // Remove the last added experience from the container
    container.removeChild(container.lastChild);

    // Remove the corresponding experience object from the array
    addedExperiences.pop();

    // Update the preview after undoing
    updateExperiencePreview();
  }
}

var addedEducations = [
  {
    eduName: "",
    eduAddress: "",
    eduTenure: "",
  },
];

var addedProjects = [
  {
    projectName: "",
    projectDescription: "",
  },
];

var addedSkills = [
  {
    skillName: "",
  },
];

var educationCounter = 1; // Counter for unique IDs
var projectCounter = 1; // Counter for unique IDs
var skillsCounter = 1; // Counter for unique IDs

function addEducation() {
  var container = document.querySelector(".education");

  // Increment the counter
  educationCounter++;

  // Create an object to store the values of the added education
  var education = {
    eduName: "",
    eduAddress: "",
    eduTenure: "",
  };

  var newEducation = document.createElement("div");

  newEducation.innerHTML = `
    <div>
      <br>
      <label>Institute Name:</label>
      <input type="text" id="eduName${educationCounter}" oninput="updateEducation(${educationCounter})"/>
      <br>
      <label>Institute Address:</label>
      <input type="text" id="eduAddress${educationCounter}" oninput="updateEducation(${educationCounter})"/>
      <br>
      <label>Tenure:</label>
      <input type="text" id="eduTenure${educationCounter}" oninput="updateEducation(${educationCounter})"/>
    </div>
  `;

  container.appendChild(newEducation);

  // Update the education object in the array
  addedEducations.push(education);

  // Add event listeners to the new input fields
  newEducation.querySelectorAll("input").forEach((input, index) => {
    input.addEventListener("input", function () {
      // Update the corresponding property in the education object
      education[input.id.replace(/\d+/g, "")] = input.value;
      updateEducationPreview(); // Update the preview after each input change
    });
  });
}

function updateEducation(index) {
  var education = addedEducations[index - 1];

  // Update the corresponding properties in the education object
  education.eduName = document.getElementById(`eduName${index}`).value;
  education.eduAddress = document.getElementById(`eduAddress${index}`).value;
  education.eduTenure = document.getElementById(`eduTenure${index}`).value;

  updateEducationPreview(); // Update the preview after each input change
}

function undoEducation() {
  var container = document.querySelector(".education");

  // Check if there are any added education entries
  if (addedEducations.length > 0) {
    // Remove the last added education entry from the container
    container.removeChild(container.lastChild);

    // Remove the corresponding education object from the array
    addedEducations.pop();

    // Update the preview after undoing
    updateEducationPreview();
  }
}

function addProject() {
  var container = document.querySelector(".projects");

  // Increment the counter
  projectCounter++;

  // Create an object to store the values of the added project
  var project = {
    projectName: "",
    projectDescription: "",
  };

  var newProject = document.createElement("div");

  newProject.innerHTML = `
    <div>
      <br>
      <label>Project Name:</label>
      <input type="text" id="projectName${projectCounter}" oninput="updateProject(${projectCounter})"/>
      <br>
      <label>Description:</label>
      <textarea id="projectDescription${projectCounter}" oninput="updateProject(${projectCounter})"></textarea>
    </div>
  `;

  container.appendChild(newProject);

  // Update the project object in the array
  addedProjects.push(project);

  // Add event listeners to the new input fields
  newProject.querySelectorAll("input, textarea").forEach((input, index) => {
    input.addEventListener("input", function () {
      // Update the corresponding property in the project object
      project[input.id.replace(/\d+/g, "")] = input.value;
      updateProjectPreview(); // Update the preview after each input change
    });
  });
}

function updateProject(index) {
  var project = addedProjects[index - 1];

  // Update the corresponding properties in the project object
  project.projectName = document.getElementById(`projectName${index}`).value;
  project.projectDescription = document.getElementById(
    `projectDescription${index}`
  ).value;

  updateProjectsPreview(); // Update the preview after each input change
}

function undoProject() {
  var container = document.querySelector(".projects");

  // Check if there are any added project entries
  if (addedProjects.length > 0) {
    // Remove the last added project entry from the container
    container.removeChild(container.lastChild);

    // Remove the corresponding project object from the array
    addedProjects.pop();

    // Update the preview after undoing
    updateProjectsPreview();
  }
}

function addSkill() {
  var container = document.querySelector(".skills");

  // Increment the counter
  skillsCounter++;

  // Create an object to store the values of the added skill
  var skill = {
    skillName: "",
  };

  var newSkill = document.createElement("div");

  newSkill.innerHTML = `
    <div>
      <br>
      <label>Skill Name:</label>
      <input type="text" id="skillName${skillsCounter}" oninput="updateSkill(${skillsCounter})"/>
    </div>
  `;

  container.appendChild(newSkill);

  // Update the skill object in the array
  addedSkills.push(skill);

  // Add event listeners to the new input fields
  newSkill.querySelectorAll("input").forEach((input, index) => {
    input.addEventListener("input", function () {
      // Update the corresponding property in the skill object
      skill[input.id.replace(/\d+/g, "")] = input.value;
      updateSkillsPreview(); // Update the preview after each input change
    });
  });
}

function updateSkill(index) {
  var skill = addedSkills[index - 1];

  // Update the corresponding property in the skill object
  skill.skillName = document.getElementById(`skillName${index}`).value;

  updateSkillsPreview(); // Update the preview after each input change
}

function undoSkill() {
  var container = document.querySelector(".skills");

  // Check if there are any added skill entries
  if (addedSkills.length > 0) {
    // Remove the last added skill entry from the container
    container.removeChild(container.lastChild);

    // Remove the corresponding skill object from the array
    addedSkills.pop();

    // Update the preview after undoing
    updateSkillsPreview();
  }
}
