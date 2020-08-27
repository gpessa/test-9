import styled from "styled-components";

const Textarea = styled.textarea`
  border: 2px solid var(--hookers-green);
  padding: 10px;
  border-radius: 20px;
  margin-bottom: 2rem;
  width: 400px;

  &:focus{
    outline: none;
    border-color: var(--satin-sheen-gold)
  }
`

export default Textarea;
