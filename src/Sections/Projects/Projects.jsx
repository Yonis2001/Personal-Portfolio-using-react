import react from 'react';
import viberr from '../../assets/viberr.png';
import frshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';


function Projects() {
  return (
        <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
  <div className={styles.projectsContainer}>
      <ProjectCard src={viberr} link={"https://yonis2001.github.io/Bookinder/"}
      h3="Bookinder"
      p="Book search app"/>

<ProjectCard src={frshBurger} link={"https://www.pythonanywhere.com/user/yonisabdullahi/shares/54e50221c00a4d44b716a5aefbf3be20/"}
      h3="Rock,paper,Scissors"
      p="Play a fun game of rock, paper and Scissors "/>

<ProjectCard src={hipsster} link={"https://yonis2001.github.io/Ferris-wheel/"}
      h3="Ferris wheel"
      p="Ferris wheel using CSS Animations"/>

    </div>
    </section>
    
  );
}

export default Projects;