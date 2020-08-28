import React, { useEffect, useState } from "react"
import styled from "styled-components"
import IconScroll from "./IconScroll"

const ScrollMoreButton = styled.div`
  background-color: var(--satin-sheen-gold);
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 20px solid var(--hookers-green);
`

const ScrollMore: React.FC = () => {
  const [bottom, setBottom] = useState(false)

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, [])

  const handleScroll = () => {
    const isBottom = ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) 
    setBottom(isBottom)
  }

  if (bottom) return null
  
  return (
    <ScrollMoreButton>
      <IconScroll />
    </ScrollMoreButton>
  )
}

export default ScrollMore