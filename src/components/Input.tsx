import styled from "styled-components"

const Input = styled.input`
  border: 2px solid var(--hookers-green);
  padding: 10px;
  border-radius: 20px;
  margin-bottom: 2rem;

  &:focus{
    outline: none;
    border-color: var(--satin-sheen-gold)
  }
`


export default Input