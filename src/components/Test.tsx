
import React from 'react'


interface ITest {
    className?: string
}
export const Test:React.FC<ITest> = ({className}) => {
  return (
    <>test</>
  )
}