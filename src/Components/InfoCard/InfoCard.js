import styles from './InfoCard.module.css'

export default function CardInfo({ title }) {
  return (
    <>
      <div className={styles.card}>
        <p className={styles.subTitle}>{title}</p>
      </div>
    </>
  )
}
