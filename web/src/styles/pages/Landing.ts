import styled from 'styled-components'

export default styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${props => props.theme.gradients.blue};

  #content-wrapper {
    width: 100%;
    max-width: 1100px;

    position: relative;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;

    #location {
      position: absolute;
      right: 0;
      top: 0;

      font-size: 2.4rem;
      line-height: 34px;

      display: flex;
      flex-direction: column;

      text-align: right;

      strong {
        font-weight: 800;
      }
    }

    #enter-app {
      position: absolute;
      right: 0;
      bottom: 0;

      width: 80px;
      height: 80px;

      background: ${props => props.theme.colors.yellow};

      border-radius: 30px;

      display: flex;
      align-items: center;
      justify-content: center;

      transition: 0.3s background;
    }

    #enter-app:hover {
      background: #96feff;
    }

    main {
      max-width: 35rem;

      h1 {
        font-size: 7.6rem;
        font-weight: 900;
        line-height: 7rem;
      }

      p {
        margin-top: 40px;
        font-size: 2.4rem;
        line-height: 34px;
      }
    }
  }
`
