function showProject(id) {
    const projectItems = document.querySelectorAll('.project-item');
    const projectInfos = document.querySelectorAll('.project-info');

    projectItems.forEach(item => item.classList.remove('active'));
    projectInfos.forEach(info => info.classList.remove('active'));

    document.querySelector(`[onclick="showProject('${id}')"]`).classList.add('active');
    document.getElementById(id).classList.add('active');
}
