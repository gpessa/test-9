import styled from "styled-components"

const Result = styled.pre`
  background-color: var(--hookers-green);
  padding: 10px;
  color: var(--misty-moss);
  border-radius: 20px;
  display: ${(props: { inline?: boolean }) => props.inline ? 'inline-flex' : 'flex'};
  margin: 0 0 1rem;
  & + & {
    margin-left: ${(props: { inline?: boolean }) => props.inline ? '1rem' : '0'};
  }
`

export default Result