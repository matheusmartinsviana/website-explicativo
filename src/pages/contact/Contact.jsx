import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import styles from "./styles/Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.contactTitle}>Contato e Colaboradores</h1>
      <div className={styles.contact1}>
        <img
          src="https://media.licdn.com/dms/image/v2/D4D03AQFnlGf5H-3MaA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730444214877?e=1738800000&v=beta&t=iAO-IcvGX3NDwbsqnOwGOgNRjUiiVOiQ9LU9TI5UAXs"
          alt=""
          width={200}
          height={"auto"}
        />
        <p>Você pode me encontrar nas seguintes redes:</p>
        <ul className={styles.socialMedia}>
          <li>
            <a
              href="https://github.com/matheusmartinsviana"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={25} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/matheusmartinsviana/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={25} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
