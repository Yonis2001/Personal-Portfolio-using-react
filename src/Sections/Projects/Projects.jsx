import react from 'react';
import viberr from '../../assets/viberr.png';
import styles from './ProjectsStyles.module.css';


function Projects() {
  return (
        <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
  <div className={StyleSheet.projectsContainer}></div>
  <a href="https://github.com/Yonis2001/Bookinder.git">
  <img className="hover" src={viberr}></img>
  <h3>Bookinder</h3>
  <p>Book search app</p>
    </a>
    </section>
    
  );
}

export default Projects;