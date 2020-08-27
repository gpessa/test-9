import React, { useCallback } from "react"
import { useInput, numberTranslate, splitAccounts, getStringNumbers, verifyChecksum } from "../utils"
import Title from "./Title";
import Section from "./Section";
import Result from "./Result";
import Textarea from "./Textarea";
import Subtitle from "./Subtitle";

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
    const accounts = splitAccounts(value)
    
    return accounts!.map(text => {
      const stringNumbers = getStringNumbers(text)
      const accountNumbers = stringNumbers.map(numberTranslate)

      const isCompromised = accountNumbers.includes('?')
      const account = accountNumbers.join('')
      
      if (isCompromised) return { account, problem: 'ILL' }
      
      const isValid = verifyChecksum(accountNumbers as number[])

      return {
        account,
        problem: !isValid && 'ERR'
      }
    })
  }, [])

  return (
    <Section>
      <Title>Solution</Title>

      <Textarea rows={10} {...bind}>{value}</Textarea>

      <Subtitle>Accounts</Subtitle>
      
      <div>
        {getResult(value)?.map(({ account, problem }) => (
          <Result inline key={account}>{account}{problem && ` ${problem}`}</Result>
        ))}
      </div>
    </Section>
  )
}

export default PageSolution