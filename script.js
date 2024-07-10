const title = document.querySelector('.title')
const leaf1 = document.querySelector('.leaf1')
const leaf2 = document.querySelector('.leaf2')
const bush2 = document.querySelector('.bush2')
const mount1 = document.querySelector('.mount1')
const mount2 = document.querySelector('.mount2')

document.addEventListener('scroll', function() {
    let value = window.scrollY
    // console.log(value)
    title.style.marginTop = value * 1.1 + 'px'

    leaf1.style.marginLeft = -value + 'px'
    leaf2.style.marginLeft = value + 'px'

    bush2.style.marginBottom = -value + 'px'

    mount1.style.marginBottom = -value * 1.1 + 'px'
    mount2.style.marginBottom = -value * 1.2 + 'px'
})

document.addEventListener('DOMContentLoaded', function() {
    const collapsibleHeaders = document.querySelectorAll('.collapsible');

    collapsibleHeaders.forEach(header => {
        const content = header.nextElementSibling; // Get the content next to the header
        const parentSection = header.closest('.eds124br'); // Get the parent section

        // Initially set the content to display block (uncollapsed)
        content.style.height = content.scrollHeight + 'px'; // Set height to its natural height

        header.addEventListener('click', function() {
            const isCollapsed = parentSection.classList.toggle('collapsed');

            if (isCollapsed) {
                content.style.height = '0px'; // Collapse the content
            } else {
                content.style.height = content.scrollHeight + 'px'; // Expand the content
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');
    const overlay = document.getElementById('overlay');

    projects.forEach(project => {
        project.addEventListener('click', function() {
            if (!this.classList.contains('expanded')) {
                closeAllProjects(); // Close any open projects
                this.classList.add('expanded');
                this.classList.remove('hovered'); // Remove hover effect when expanded
                overlay.style.display = 'block';
                document.body.classList.add('no-scroll');

                // Animate expand
                const projectDetails = this.querySelector('.project-details');
                const height = projectDetails.scrollHeight;

                projectDetails.style.height = '0px'; // Start with 0 height
                setTimeout(() => {
                    projectDetails.style.height = height + 'px'; // Expand to full height
                }, 10); // Delay to ensure initial height setting takes effect
            }
        });

        const closeBtn = project.querySelector('.close-btn');
        closeBtn.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevents the project from closing on close button click
            closeProject(project);
        });
    });

    overlay.addEventListener('click', function() {
        closeAllProjects();
    });

    function closeProject(project) {
        const projectDetails = project.querySelector('.project-details');
        const height = projectDetails.scrollHeight;

        // Animate collapse
        projectDetails.style.height = height + 'px'; // Set to current height
        setTimeout(() => {
            projectDetails.style.height = '0px'; // Collapse to 0 height
            project.classList.remove('expanded');
            overlay.style.display = 'none';
            document.body.classList.remove('no-scroll');
        }, 10); // Delay to ensure height transition takes effect
    }

    function closeAllProjects() {
        projects.forEach(project => {
            if (project.classList.contains('expanded')) {
                closeProject(project);
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const aboutContent = document.querySelector('.about-content');

    aboutContent.addEventListener('click', function() {
        aboutContent.classList.toggle('expanded');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.about-extra .gallery img');
    let currentIndex = 0;
    const totalImages = images.length;

    function nextSlide() {
        const currentImage = images[currentIndex];
        const nextIndex = (currentIndex + 1) % totalImages;
        const nextImage = images[nextIndex];

        currentImage.classList.remove('active');
        nextImage.classList.add('active');

        currentIndex = nextIndex;
    }

    // Initially show the first image
    images[currentIndex].classList.add('active');

    setInterval(nextSlide, 3000); // Change image every 3 seconds
});
