import React, { useCallback } from "react"
import styled from "styled-components"
import { useInput, getStringNumbers } from "../utils"
import Title from "./Title";
import Section from "./Section";
import Input from "./Input";
import Result from "./Result";
import Subtitle from "./Subtitle";


const PageAccountString: React.FC = () => {
  const { bind, value } = useInput('    _  _     _  _  _  _  _   | _| _||_||_ |_   ||_||_|  ||_  _|  | _||_|  ||_| _|')

  const getNumbers = useCallback((value: string) => {
    return getStringNumbers(value)
  }, [])

  return (
    <Section>
      <Title>Account String</Title>
      <p>
        Given a string rappresenting an account number<br />
        We now need to extract the characters that compose each account number.
        The function return an array of number rappresented by strings
      </p>

      <Input {...bind} />

      <Subtitle>Numbers:</Subtitle>

      <div>
        {getNumbers(value).map((item, index) => (
          <Result inline>{item}</Result>
        ))}
      </div>
    </Section>
  )
}

export default PageAccountString