import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['blue-800']};
  padding: 2.5rem 0 7.5rem;
  margin: 0 auto;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    padding-top: 1.5rem;
  }
`
