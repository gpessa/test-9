import React, { useCallback } from "react"
import { useInput, numberTranslate } from "../utils"
import Title from "./Title";
import Section from "./Section";
import Input from "./Input";
import Result from "./Result";
import Subtitle from "./Subtitle";


const PageNumberTraslator: React.FC = () => {
  const { bind, value } = useInput(' _ |_| _|')

  const transform = useCallback((value: string) => {
    return numberTranslate(value)
  }, [])

  return (
    <Section>
      <Title>Number Traslator</Title>
      <p>
        Given a number rappresented by a string,<br />
        I now trasnform it in a proper number using a map.
      </p>

      <Input {...bind} maxLength={9} minLength={9}/>

      <Subtitle>Number:</Subtitle>

      <Result>{transform(value)}</Result>
    </Section>
  )
}

export default PageNumberTraslator