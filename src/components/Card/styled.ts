import styled from 'styled-components'

export const CardBlog = styled.div`
  width: 100%; /* ajusta a largura dos cards */
  margin: 0; /* remove o espaçamento entre os itens */
  padding: 20px; /* adiciona margens internas */
  box-sizing: border-box;

  height: 16.25rem;
  background: ${(props) => props.theme['blue-700']};
  border-radius: 10px;
  left: calc(50% - 416px / 2 - 224px);
  top: 631px;
  padding: 42px 32px;

  .CardContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-bottom: 35px;
    span:first-child {
      font-family: Nunito;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
    }

    span:nth-child(2) {
      font-family: Nunito;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 130%;
    }
  }

  div:nth-child(2) {
    font-family: Nunito;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
  }

  &:hover {
    border: 1px solid #7b96b2;
    box-shadow: none;
  }
`

export const CardBlogContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 72px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 700px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    margin: 0 auto; /* centraliza o container na página */
    box-sizing: border-box;
  }
`
