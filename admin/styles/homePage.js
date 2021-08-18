import styled from 'styled-components'

export const DashboardStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .top-container {
    flex: 1;

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
  .section-container {
    flex: 4;
  }
`
