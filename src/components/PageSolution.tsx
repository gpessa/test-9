import React, { useCallback } from "react"
import { useInput, numberTranslate, splitAccounts, getStringNumbers, verifyChecksum } from "../utils"
import Title from "./Title";
import Section from "./Section";
import Result from "./Result";
import Textarea from "./Textarea";
import Subtitle from "./Subtitle";
import styled from "styled-components";

const Badge = styled.div`
  line-height: 37px;
  width: 35px;
  height: 35px;
  background-color: var(--vegas-gold);
  font-size: 0.7rem;
  color: white;
  margin: -7px;
  border-radius: 50%;
  display: inline-block;
  margin-left: 1rem;
  font-weight: bold;
`

const PageSolution: React.FC = () => {
  const { bind, value } = useInput(`
    _  _  _  _  _  _  _  _ 
|_||_   ||_ | ||_|| || || |
  | _|  | _||_||_||_||_||_|

 _  _  _  _  _  _  _  _  _ 
| || || || || || || || || |
|_||_||_||_||_||_||_||_||_|

                           
  |  |  |  |  |  |  |  |  |
  |  |  |  |  |  |  |  |  |

 _  _  _  _  _  _  _  _  _ 
 _| _| _| _| _| _| _| _| _|
|_ |_ |_ |_ |_ |_ |_ |_ |_ 

 _  _  _  _  _  _  _  _  _ 
 _| _| _| _| _| _| _| _| _|
 _| _| _| _| _| _| _| _| _|
                        
|_||_||_||_||_||_||_||_||_|
  |  |  |  |  |  |  |  |  |

 _  _  _  _  _  _  _  _  _ 
|_ |_ |_ |_ |_ |_ |_ |_ |_ 
 _| _| _| _| _| _| _| _| _|

 _  _  _  _  _  _  _  _  _ 
|_ |_ |_ |_ |_ |_ |_ |_ |_ 
|_||_||_||_||_||_||_||_||_|

 _  _  _  _  _  _  _  _  _ 
  |  |  |  |  |  |  |  |  |
  |  |  |  |  |  |  |  |  |

 _  _  _  _  _  _  _  _  _ 
|_||_||_||_||_||_||_||_||_|
|_||_||_||_||_||_||_||_||_|

 _  _  _  _  _  _  _  _  _ 
|_||_||_||_||_||_||_||_||_|
 _| _| _| _| _| _| _| _| _|

    _  _     _  _  _  _  _ 
  | _| _||_||_ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _|

 _  _  _  _  _  _  _  _    
| || || || || || || ||_   |
|_||_||_||_||_||_||_| _|  |

 _  _  _  _  _  _  _  _    
|_||_|| || ||_   |  |  | _ 
  | _||_||_||_|  |  |  | _|

    _  _     _  _  _  _  _ 
  | _| _||_| _ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _ `.substring(1))

  const getResult = useCallback((value: string) => {
    return splitAccounts(value)!
      .map(getStringNumbers)
      .map(accounts => {
        const arrayNumber = accounts.map(numberTranslate)
        const number = arrayNumber.join('')

        const isIll = arrayNumber.includes('?')
        if (isIll) return { number, status: 'ILL' }

        const isErr = verifyChecksum(arrayNumber as number[])
        if (isErr) return { number, status: 'ERR' }

        return { number }
      })
  }, [])

  return (
    <Section>
      <Title>Solution</Title>

      <Textarea rows={10} style={{ width: 220 }} {...bind}>{value}</Textarea>

      <Subtitle>Accounts:</Subtitle>
      
      <div>
        {getResult(value)?.map(({ number, status }) => (
          <Result inline key={number}>
            {number}
            {status && <Badge>{status}</Badge>}
          </Result>
        ))}
      </div>
    </Section>
  )
}

export default PageSolution