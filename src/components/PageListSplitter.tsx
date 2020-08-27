import Section from "./Section"
import React, { useCallback } from "react"
import Title from "./Title"
import { useInput, splitAccounts } from "../utils"
import Textarea from "./Textarea"
import Result from "./Result"
import Subtitle from "./Subtitle"

const PageListSplitter: React.FC = () => {
  const { bind, value } = useInput(`
    _  _     _  _  _  _  _ 
  | _| _||_||_ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _|

 _  _  _  _  _  _  _  _  _ 
 _| _| _| _| _| _| _| _| _|
|_ |_ |_ |_ |_ |_ |_ |_ |_ `.substring(1))
  
  const getAccounts = useCallback((value: string): string[] | null => {
    return splitAccounts(value)
  }, [])

  return (
    <Section>
      <Title>Account list splitter</Title>
      <p>
        I need a function to (given a list of account numbers)<br />
        return an array of string containing the single account number.
        <br /><br />
        The function get a multiline text,<br />
        remove the new lines<br />
        and split the account numbers based on string length
      </p>
      
      <Textarea rows={10} style={{ width: 220 }} {...bind}>{value}</Textarea>

      <Subtitle>Accounts:</Subtitle>
    
      {getAccounts(value)?.map(account => (
        <Result key={account}>{account}</Result>
      ))}
    </Section>
  )
}

export default PageListSplitter