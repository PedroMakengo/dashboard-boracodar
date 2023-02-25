import styles from './styles.module.css'

import emojiImg from '../../assets/emoji.svg'

interface CardProps {
  type: string
  title: string
}

export function Card({ type, title }: CardProps) {
  switch (type) {
    case 'geral':
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
            <p>
              <span>NPS Score </span>
              <span>75</span>
            </p>
          </div>
        </div>
      )
      break
    case 'vendas':
      return (
        <div className={styles.card}>
          <div className={styles.header}>
            <h1>{title}</h1>
          </div>
          <div className={styles.body}></div>
          <div className={styles.footer}>
            <ul>
              <li>
                <span>
                  <small></small>
                  Esperado
                </span>
                <span>100</span>
              </li>
              <li>
                <span>
                  <small></small>
                  Alcançado
                </span>
                <span>70</span>
              </li>
            </ul>
          </div>
        </div>
      )
      break
    case 'metas':
      return (
        <div className={styles.card}>
          <div className={styles.header}>
            <h1>{title}</h1>
          </div>
          <div className={styles.body}></div>
          <div className={styles.footer}>
            <div className={styles.footer}>
              <ul>
                <li>
                  <span>
                    <small></small>
                    Esperado
                  </span>
                  <span>R$ 70K</span>
                </li>
                <li>
                  <span>
                    <small></small>
                    Alcançado
                  </span>
                  <span>R$ 63K</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
      break
    default:
      return (
        <div className={styles.card}>
          <h1>Testando</h1>
        </div>
      )
      break
  }
}
