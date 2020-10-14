import styled from 'styled-components'

export const StyledMap = styled.div`
  width: 100%;
  height: 100%;

  #leaflet {
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .map-popup {
    .leaflet-popup-tip-container {
      display: none;
    }

    .leaflet-popup-content-wrapper {
      background: rgba(255, 255, 255, 0.8);
      box-shadow: 17px 27px 41px rgba(23, 142, 166, 0.16);
      border-radius: 20px;
    }

    .leaflet-popup-content {
      color: ${props => props.theme.texts.title};
      font-size: 2rem;
      font-weight: 800;
      font-family: Nunito, Roboto, sans-serif;

      margin: 8px 12px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      a {
        width: 40px;
        height: 40px;

        background: ${props => props.theme.colors.blue};
        box-shadow: 17px 27px 41px rgba(23, 142, 166, 0.16);
        border-radius: 12px;

        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`
