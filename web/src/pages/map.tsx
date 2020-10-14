import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import { FiPlus } from 'react-icons/fi'

import StyledMaps from '../styles/pages/Map'

import Logo from '../../public/logo.svg'

import LeafletMap from '../components/Map'

const Map: React.FC = () => {
  return (
    <StyledMaps>
      <Head>
        <title>Happy - Map</title>
      </Head>

      <aside>
        <header>
          <Logo />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita 😀</p>
        </header>

        <footer>
          <strong>Barueri</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <LeafletMap />

      <Link href="/orphanages/create">
        <a id="return-button">
          <FiPlus size={32} color="#fff" />
        </a>
      </Link>
    </StyledMaps>
  )
}

export default Map
