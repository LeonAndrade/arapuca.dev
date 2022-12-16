import styled from 'styled-components';

export const IntroContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
`

export const IntroContent = styled.p`
  height: fit-content;
  margin-top: 2rem;
  text-align: left;

  strong {
    font-weight: 600;
    background: -webkit-linear-gradient(77deg, rgb(42, 79, 19) 0%, rgba(120,177,18,1) 34%, rgba(125,191,18,1) 67%, rgb(208, 233, 135) 100%);
    background-clip: inherit;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
