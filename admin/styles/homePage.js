import styled from 'styled-components'

export const DashboardStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .top-container {
    flex: 1;
    margin-bottom: 1rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    .top-left {
      flex: 2;
    }
    .top-right {
      flex: 3;

      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 2rem;
    }
  }
  .card-container {
    flex: 2;
    margin-bottom: 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
  }
  .main-container {
    flex: 4;
    margin-bottom: 1rem;
  }
  .sub-container {
    flex: 3;
  }
`
