import React, { useEffect } from 'react'

export const componentGesture = (componentName: string | undefined) => {
  useEffect(() => console.log(`Hello from ${componentName}`)),
  [componentName]
}