import React, { useCallback } from "react"
import styled from "styled-components"
import { useInput, verifyChecksum } from "../utils"
import iconFail from '../assets/icon-fail.svg';
import iconSuccess from '../assets/icon-success.svg';
import Title from "./Title";
import Section from "./Section";
import Input from "./Input";
import Subtitle from "./Subtitle";

const Icon = styled.img`
  width: 30px;
  height: 30px; 
`

const PageChecksum: React.FC = () => {
  const { bind, value } = useInput('457508000')
  
  const isValid = useCallback((value: string): boolean => {
    const arr = value.split('').map(Number)
    return verifyChecksum(arr)
  }, [])
  
  return (
    <Section>
      <Title>CheckSum</Title>
      <p>
        I started from the easy thing (I hope I got it right).
        <br />I created a function to calculate the checksum.
        <br />The function accept an array of numbers and response true/false
      </p>

      <Input {...bind} />

      <Subtitle>Is valid:</Subtitle>

      {isValid(value) ?
        <Icon src={iconSuccess} /> :
        <Icon src={iconFail} />
      }
      
    </Section>
  )
}

export default PageChecksum