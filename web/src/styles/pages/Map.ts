import styled from 'styled-components'

export default styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;

  aside {
    width: 32vw;

    background: ${props => props.theme.gradients.blue};

    padding: 64px;

    display: flex;

    flex-direction: column;
    justify-content: space-between;

    header {
      h2 {
        font-size: 4rem;
        font-weight: 800;
        line-height: 4.2rem;
        margin-top: 6.4rem;
      }

      p {
        line-height: 2.8rem;
        margin-top: 2.4rem;
      }
    }

    footer {
      display: flex;
      flex-direction: column;

      line-height: 24px;

      strong {
        font-weight: 800;
      }
    }
  }

  #return-button {
    position: absolute;
    z-index: 10;

    right: 40px;
    bottom: 40px;

    width: 64px;
    height: 64px;

    background: ${props => props.theme.colors.blue};

    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: 0.3s background;

    :hover {
      background: #17d6eb;
    }
  }
`
