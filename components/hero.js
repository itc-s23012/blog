import styles from 'styles/hero.module.css'
import Image from 'next/legacy/image'
import cube from 'images/cube.jpg'
const Hero = ({ title, subtitle, imageOn = false }) => {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {imageOn && (
        <figure className={styles.image}>
          <Image
            src={cube}
            alt=''
            priority
            placeholder='blur'
            layout='responsive'
            sizes='(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw'
          />
        </figure>
      )}
    </div>
  )
}

export default Hero
