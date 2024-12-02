import styles from "./Styles/TecnologySection.module.css";

export default function TecnologySection({
  title,
  description,
  logo,
  link,
  shadowColor,
}) {
  return (
    <section className={styles.tecnologySection}>
      <figure>
        <img
          src={logo}
          alt={title}
          style={{
            "--shadow-color": shadowColor, // Definindo a cor da sombra
          }}
        />
      </figure>
      <div className={styles.aboutTec}>
        <h1>{title}</h1>
        <p>{description}</p>
        {link && (
          <a href={link} className={styles.learnMoreButton}>
            Ver mais sobre {title}
          </a>
        )}
      </div>
    </section>
  );
}
