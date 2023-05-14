export const filterProject = (projects, selectedProject) => {
    const filteredProject = projects.filter(
        (project) => project.id === selectedProject
    )[0];

    return filteredProject;
};