import styled from 'styled-components'

export const AvatarStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  .description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 0.3rem;
    span {
      font-size: 1.2rem;
      font-weight: 700;
      letter-spacing: 0.1rem;
      color: ${({ theme }) => theme.colors.white};
    }
    p {
      font-size: 0.7rem;
      font-weight: 300;
    }
  }
  .avatar {
    width: 5rem;
    height: 5rem;

    padding: 0.1rem;

    border-radius: 50%;
    border: 4px solid ${({ theme }) => theme.colors.grayDark};
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  }
`
