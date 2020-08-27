import styled from "styled-components"

const Title = styled.h2`
  margin: 0 0 2rem;
  font-size: 3rem;
  color: var(--satin-sheen-gold);
  font-family: "Lobster", cursive;
  position: relative;

  &:after {
    content: "";
    width: 100%;
    height: 4px;
    background-color: var(--hookers-green);
    bottom: 0;
    position: absolute;
    left: 0;
    transform: rotate(-2deg);
  }
`

export default Title