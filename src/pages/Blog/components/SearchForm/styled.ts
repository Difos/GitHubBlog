import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;
  max-width: 1120px;
  margin: 0 auto;
  flex-direction: column;
  padding-top: 74px;

  .TextContent {
    display: flex;
    justify-content: space-between;
  }

  .TextContent span:first-child {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 160%;
  }

  .TextContent span:nth-child(2) {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    color: ${(props) => props.theme['blue-400']};
  }

  .ContainerControls {
    display: flex;
    flex-direction: row;
    gap: 12px;
    input {
      flex: 1;
      border-radius: 6px;
      box-sizing: border-box;
      border: 1px solid #1c2f41;
      background: ${(props) => props.theme['blue-900']};
      color: ${(props) => props.theme['blue-500']};
      padding: 1rem;

      &::placeholder {
        color: ${(props) => props.theme['blue-500']};
      }
    }
    button {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      border: 0;
      padding: 1rem;
      background: transparent;
      border: 1px solid ${(props) => props.theme['green-300']};
      color: ${(props) => props.theme['green-300']};
      font-weight: bold;
      border-radius: 6px;
      cursor: pointer;

      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }
      &:not(:disabled):hover {
        background: ${(props) => props.theme['green-500']};
        border: ${(props) => props.theme['green-500']};
        color: ${(props) => props.theme.white};
        transition: background-color 0.6s, color 0.6s, border-color 0.6s;
      }
    }
  }
`
