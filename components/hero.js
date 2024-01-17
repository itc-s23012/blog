import styles from 'styles/hero.module.css'
import Image from 'next/legacy/image'
import cube from 'images-local/cube.jpg'
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
            min-width={1152}
            min-height={768}
            priority
            placeholder='blur'
          />
        </figure>
      )}
    </div>
  )
}

export default Hero
