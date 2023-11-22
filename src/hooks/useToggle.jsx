import React, { useState } from 'react'

const useToggle = () => {
  const [isOpen,setIsOpen]=useState(false)

  const handleClick=()=>{
      setIsOpen(!isOpen)
  }


  return (
    [isOpen,handleClick]
  )
}

export default useToggle
