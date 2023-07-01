import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  border-radius: 6px;
  gap: 2rem;

  margin-top: -5rem;
  background: ${(props) => props.theme['blue-900']};
`

export const SummaryCard = styled.div`
  background-color: ${(props) => props.theme['gray-600']};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme['gray-300']};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 6px;
  }

  .BlogContainer {
    display: flex;
    gap: 32px;
  }

  .BlogText {
    display: grid;
    grid-template-columns: repeat(2);
  }

  .BlogText span {
    font-family: Nunito;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
  }
  .IdentifyText {
    display: flex;
    justify-content: space-between;
  }

  .IdentifyText2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
  }
  .spanTitle {
    font-family: Nunito;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
    color: ${(props) => props.theme.white};
    margin-bottom: 12px;
  }

  .IdentifyText span:first-child {
    font-family: Nunito;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;
  }

  .IdentifyText span:last-child {
    font-family: Nunito;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 160%;
  }

  .LogoContainer {
    display: flex;
    gap: 1.625rem;
  }
`
