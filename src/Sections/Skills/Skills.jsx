import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillsList from '../../common/skillsList';

function Skills() {
    return (
        <section id="Skills" className={styles.container}>
            <h1 className="sectionTitle">Coding Languages</h1>
            <div className={styles.skillsList}>
                <SkillsList src={checkMarkIcon} skill="HTML"/>
                <SkillsList src={checkMarkIcon} skill="CSS"/>
                <SkillsList src={checkMarkIcon} skill="JAVASCRIPT"/>
                <SkillsList src={checkMarkIcon} skill="PYTHON"/>
                <SkillsList src={checkMarkIcon} skill="MYSQL"/>
                </div> 
                <hr/>
                <h1 className="sectionTitle">Skills</h1>
                <SkillsList src={checkMarkIcon} skill="Teamwork"/>
                <SkillsList src={checkMarkIcon} skill="Communication"/>
                <SkillsList src={checkMarkIcon} skill="Analytical Skills"/>
                <SkillsList src={checkMarkIcon} skill="Problem Solving"/>
                <SkillsList src={checkMarkIcon} skill="Time Management"/>
        </section>
);
}

export default Skills