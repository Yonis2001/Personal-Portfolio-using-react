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

<ProjectCard src={frshBurger} link={"https://github.com/Yonis2001/Bookinder.git"}
      h3="Rock,paper,Scissors"
      p="Play a fun game of rock, paper and Scissors "/>

<ProjectCard src={hipsster} link={"https://trinket.io/embed/python3/a5bd54189b"}
      h3="Ferris wheel"
      p="Ferris wheel using CSS Animations"/>

    </div>
    </section>
    
  );
}

export default Projects;