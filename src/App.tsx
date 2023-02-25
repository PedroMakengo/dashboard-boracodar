import { useState, useEffect } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { Card } from './components/Card'
import styles from './styles/styles.module.css'

export function App() {
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setInterval(() => {
      setLoading(true)
    }, 2000)
  }, [])

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <div className={styles.contentHeader}>
          {loading ? (
            <Card title="NPS Geral" type="emoji" />
          ) : (
            <SkeletonTheme baseColor="#363447" highlightColor="#292738">
              <Skeleton count={18} height={10} />
            </SkeletonTheme>
          )}
          {loading ? (
            <Card title="NPS Geral" type="emoji" />
          ) : (
            <SkeletonTheme baseColor="#363447" highlightColor="#292738">
              <Skeleton count={18} height={10} />
            </SkeletonTheme>
          )}
          {loading ? (
            <Card title="NPS Geral" type="emoji" />
          ) : (
            <SkeletonTheme baseColor="#363447" highlightColor="#292738">
              <Skeleton count={18} height={10} />
            </SkeletonTheme>
          )}
        </div>
        <div className={styles.contentFooter}>
          {loading ? (
            <Card title="NPS Geral" type="emoji" />
          ) : (
            <SkeletonTheme baseColor="#363447" highlightColor="#292738">
              <Skeleton count={8} height={10} />
            </SkeletonTheme>
          )}
        </div>
      </div>
    </div>
  )
}
