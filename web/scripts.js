// Personal information
const personalInfo = {
    name: "Muyideen Morenigbade",
    username: "Morex",
    email: "muyideenmorenigbade@gmail.com",
    github: "https://github.com/MMuyideen/hng-stage1"
};

// Populate personal information
document.getElementById('name').textContent = personalInfo.name;
document.getElementById('username').textContent = personalInfo.username;
document.getElementById('email').textContent = personalInfo.email;

// Set up GitHub link
const githubLink = document.getElementById('github');
githubLink.href = personalInfo.github;
githubLink.textContent = personalInfo.github;

// Interactive background color change
const colorButton = document.getElementById('colorButton');
const body = document.body;

colorButton.addEventListener('click', function() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    body.style.backgroundColor = "#" + randomColor;
});

// Display server information
fetch('/')
    .then(response => {
        const server = response.headers.get('X-Powered-By') || 'Information unavailable';
        document.getElementById('server-software').textContent = server;
    })
    .catch(error => {
        console.error('Error fetching server info:', error);
        document.getElementById('server-software').textContent = 'Information unavailable';
    });