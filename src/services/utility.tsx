import React, { useEffect } from 'react'

export const componentGesture = (gesture: string, componentName: string | undefined) => {
  useEffect(() => console.log(`${gesture} ${componentName}`)),
  [gesture, componentName]
}
