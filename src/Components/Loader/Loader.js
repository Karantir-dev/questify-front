import Loader from 'react-loader-spinner'
import styles from './Loader.module.css'

export default function Loaders({ size }) {
  return (
    <Loader
      className={styles.containerLoader}
      type="ThreeDots"
      color="#00d7ff"
      height={size}
      width={size}
    />
  )
}
