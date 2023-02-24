import styles from './styles.module.css'

import emojiImg from '../../assets/emoji.svg'

interface CardProps {
  type: string
  title: string
}

export function Card({ type, title }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h1>{title}</h1>
      </div>
      <div className={styles.body}>
        <img src={emojiImg} alt="" />
        <span>Excelente!</span>
      </div>
      <div className={styles.footer}>
        <span>NPS Score 75</span>
      </div>
    </div>
  )
}
