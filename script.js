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
                overlay.style.display = 'block';
                document.body.classList.add('no-scroll');
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
        project.classList.remove('expanded');
        project.style.transform = ''; // Reset transform property
        project.style.boxShadow = ''; // Reset box-shadow property
        overlay.style.display = 'none';
        document.body.classList.remove('no-scroll');
    }

    function closeAllProjects() {
        projects.forEach(project => {
            project.classList.remove('expanded');
            project.style.transform = ''; // Reset transform property
            project.style.boxShadow = ''; // Reset box-shadow property
        });
        overlay.style.display = 'none';
        document.body.classList.remove('no-scroll');
    }
});
