import { FooterContainer } from './styles'
import github from '../../assets/github2.png';

function Footer() {
  return (
    <FooterContainer>
      <a href="http://github.com/LeonAndrade/arapuca.dev">
        <img src={github} alt="github logo" />
      </a>
    </FooterContainer>
  )
}

export default Footer;
