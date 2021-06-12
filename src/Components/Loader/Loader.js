import Loader from "react-loader-spinner"
import styles from './Loader.module.css'

export default function Loaders () {
  return (
    <div className={styles.containerLoader}>
      <Loader
        type="ThreeDots"
        color="#00d7ff"
        height={100}
        width={100}
        timeout={1000} //3 secs
      />
    </div>  
  )
}