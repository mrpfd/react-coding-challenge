import * as React from 'react'

export default function App({ children }) {
  const childrenWithProps = React.Children.map(children, (child, i) => {
    return React.cloneElement(child, {
      // These properties are available as a props in child components
      index: i
    })
  })

  return childrenWithProps
}