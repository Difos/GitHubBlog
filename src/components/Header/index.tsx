import { HeaderContainer, HeaderContent } from './styled'
import logoText from '../../assets/githublogo.svg'
import logoImg from '../../assets/githublogo2.svg'
export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="logo" />
        <img src={logoText} alt="logo" />
      </HeaderContent>
    </HeaderContainer>
  )
}
