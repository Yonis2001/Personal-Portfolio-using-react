import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from'../../assets/sun.svg';
import moon from'../../assets/moon.svg';
import githublight from'../../assets/github-light.svg';
import githubdark from'../../assets/github-dark.svg'
import linkedinlight from '../../assets/linkedin-light.svg';
import linkedindark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const {theme, toggleTheme} = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;

const linkedinIcon = theme === 'light' ? linkedinlight : linkedindark;

const githubIcon = theme === 'light' ? githublight : githubdark;


    return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
        <img className={styles.Hero} src={heroImg} alt="My prfile pic"/>
        <img className={styles.colorMode}src={themeIcon}alt="colorname"
        onClick={toggleTheme}/>
        </div>

        <div className={styles.info}>
            <h1>Yonis
                <br/>
            Abdulahi</h1>
            <h2>Developer</h2>
            <span> 

                <a href="https://github.com/Yonis2001/" target="_blank">
                <img src={githubIcon}/>
                </a>
                
                <a href="https://www.linkedin.com/in/yonis-abdullahi/" target="_blank">
                <img src={linkedinIcon}/>
                </a>
                
            </span>
            <p className={styles.description}>Highly motivated developer who is eager to leverage technical knowledge to contribute effectively in a software development role.

</p>
<a href={CV} download>
    <button className="hover">Resume</button>
</a>
        </div>
    </section>
    
);
    
}

export default Hero;
