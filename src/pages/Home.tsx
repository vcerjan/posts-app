import React from 'react'
import { componentGesture } from '../services/utility'

import styles from './home.module.css'

export const Home: React.FC<{ gesture: string }> = ({ gesture }) => {
  componentGesture(gesture, Home.name)

  return (
    <div className={styles.container}>
      <h1>Welcome to the Home page</h1>
    </div>
  )
}
