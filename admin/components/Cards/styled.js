import styled from 'styled-components'

export const CardStyled = styled.div`
  width: 100%;
  height: 150px;

  padding: 1.5rem;

  background: ${({ theme }) => theme.colors.backgroundLight};
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  border: 1px solid ${({ theme }) => theme.colors.grayDark};
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .card-title {
    h2 {
      text-transform: uppercase;
      font-size: 1.5rem;
      font-weight: 900;
      color: ${({ theme }) => theme.colors.primary};
      letter-spacing: 0.2rem;
    }
  }
  .card-body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      font-size: 1.2rem;
      font-weight: 700;
      letter-spacing: 0.1rem;
    }
    .card-star {
      display: flex;
      align-items: end;
      gap: 0.3rem;
      color: #059669;
      p {
        text-transform: lowercase;
        font-size: 1rem;
        font-weight: 100;
      }
    }
  }
`
