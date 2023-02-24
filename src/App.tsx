import styles from './styles/styles.module.css'
import { Card } from './components/Card'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <div className={styles.contentHeader}>
          {<Card title="NPS Geral" type="emoji" /> && (
            <SkeletonTheme baseColor="#363447" highlightColor="#292738">
              <Skeleton count={3} height={100} />
            </SkeletonTheme>
          )}
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
