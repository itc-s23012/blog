import Link from 'next/link'
import styles from 'styles/logo.module.css'

const Logo = ({ boxOn = false }) => {
  return (
    <Link href='/'>
      <h1 className={boxOn ? styles.box : styles.basic}>CUBE</h1>
    </Link>
  )
}

export default Logo
