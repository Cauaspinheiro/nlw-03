import styled from 'styled-components'

export const StyledOrphanage = styled.div`
  display: flex;
  min-height: 100vh;

  aside {
    position: fixed;
    height: 100%;
    padding: 32px 24px;
    background: linear-gradient(329.54deg, #15b6d6 0%, #15d6d6 100%);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  aside img {
    width: 48px;
  }

  aside footer a,
  aside footer button {
    width: 48px;
    height: 48px;

    border: 0;

    background: #12afcb;
    border-radius: 16px;

    cursor: pointer;

    transition: background-color 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  aside footer a:hover,
  aside footer button:hover {
    background: #17d6eb;
  }

  main {
    flex: 1;
  }

  .orphanage-details {
    width: 700px;
    margin: 64px auto;

    background: #ffffff;
    border: 1px solid #d3e2e5;
    border-radius: 20px;

    overflow: hidden;
  }

  .orphanage-details > img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  .orphanage-details .images {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    column-gap: 16px;

    margin: 16px 40px 0;
  }

  .orphanage-details .images button {
    border: 0;
    height: 88px;
    background: none;
    cursor: pointer;
    border-radius: 20px;
    overflow: hidden;
    outline: none;

    opacity: 0.6;
  }

  .orphanage-details .images button.active {
    opacity: 1;
  }

  .orphanage-details .images button img {
    width: 100%;
    height: 88px;
    object-fit: cover;
  }

  .orphanage-details .orphanage-details-content {
    padding: 80px;
  }

  .orphanage-details .orphanage-details-content h1 {
    color: #4d6f80;
    font-size: 54px;
    line-height: 54px;
    margin-bottom: 8px;
  }

  .orphanage-details .orphanage-details-content p {
    line-height: 28px;
    color: #5c8599;
    margin-top: 24px;
  }

  .orphanage-details .orphanage-details-content .map-container {
    margin-top: 64px;
    background: #e6f7fb;
    border: 1px solid #b3dae2;
    border-radius: 20px;
  }

  .orphanage-details .orphanage-details-content .map-container footer {
    padding: 20px 0;
    text-align: center;
  }

  .orphanage-details .orphanage-details-content .map-container footer a {
    line-height: 24px;
    color: #0089a5;
    text-decoration: none;
  }

  .orphanage-details
    .orphanage-details-content
    .map-container
    .leaflet-container {
    border-bottom: 1px solid #dde3f0;
    border-radius: 20px;
  }

  .orphanage-details .orphanage-details-content hr {
    width: 100%;
    height: 1px;
    border: 0;
    background: #d3e2e6;
    margin: 64px 0;
  }

  .orphanage-details .orphanage-details-content h2 {
    font-size: 36px;
    line-height: 46px;
    color: #4d6f80;
  }

  .orphanage-details .orphanage-details-content .open-details {
    margin-top: 24px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
  }

  .orphanage-details .orphanage-details-content .open-details div {
    padding: 32px 24px;
    border-radius: 20px;
    line-height: 28px;
  }

  .orphanage-details .orphanage-details-content .open-details div svg {
    display: block;
    margin-bottom: 20px;
  }

  .orphanage-details .orphanage-details-content .open-details div.hour {
    background: linear-gradient(149.97deg, #e6f7fb 8.13%, #ffffff 92.67%);
    border: 1px solid #b3dae2;
    color: #5c8599;
  }

  .orphanage-details
    .orphanage-details-content
    .open-details
    div.open-on-weekends {
    background: linear-gradient(154.16deg, #edfff6 7.85%, #ffffff 91.03%);
    border: 1px solid #a1e9c5;
    color: #37c77f;
  }

  .orphanage-details .orphanage-details-content button.contact-button {
    margin-top: 64px;

    width: 100%;
    height: 64px;
    border: 0;
    cursor: pointer;
    background: #3cdc8c;
    border-radius: 20px;
    color: #ffffff;
    font-weight: 800;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: background-color 0.2s;
  }

  .orphanage-details .orphanage-details-content button.contact-button svg {
    margin-right: 16px;
  }

  .orphanage-details .orphanage-details-content button.contact-button:hover {
    background: #36cf82;
  }
`
