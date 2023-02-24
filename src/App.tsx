import styles from './styles/styles.module.css'
import { Card } from './components/Card'

export function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <div className={styles.contentHeader}>
          <Card title="NPS Geral" type="emoji" />
          <Card title="NPS Geral" type="emoji" />
          <Card title="NPS Geral" type="emoji" />
        </div>
        <div className={styles.contentFooter}>
          <Card title="NPS Geral" type="emoji" />
        </div>
      </div>
    </div>
  )
}
