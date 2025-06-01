const coursesButtonContainer = document.getElementById('courses-buttons-container');
const mainLogoContainer = document.getElementById('main-logo-container');

// Create Site Logo Img and Title
const img = document.createElement('img');
img.id = 'site-logo';
img.src = './images/cscr-logo.png';

const h1 = document.createElement('h1');
h1.id = 'site-name';

const spanCSE = document.createElement('span');
spanCSE.id = 'CSE';
spanCSE.textContent = 'CSE';

const spanR = document.createElement('span');
spanR.id = 'R';
spanR.textContent = 'R';

h1.appendChild(spanCSE);
h1.appendChild(spanR);

mainLogoContainer.appendChild(img);
mainLogoContainer.appendChild(h1);


//Create Courses Buttons in the side nav bar
const courses = [
    "Verbal Competency",
    "Analytical Competency",
    "Numerical Competency",
    "Clerical Competency",
    "General Info Competency"
  ];

  courses.forEach(course => {
    const btn = document.createElement('button');
    btn.className = 'course-option';
    btn.textContent = course.toUpperCase();
    coursesButtonContainer.appendChild(btn);
  });