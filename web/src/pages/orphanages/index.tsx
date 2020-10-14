import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FiPlus } from 'react-icons/fi'

import StyledMaps from '../../styles/pages/orphanages/Map'

import Logo from '../../../public/logo.svg'

import LeafletMap from '../../components/Map'
import api from '../../services/api'
import { IOrphanage } from '../../entities/Orphanage'

const Map: React.FC = () => {
  const [orphanages, setOrphanages] = useState<IOrphanage[]>([])

  useEffect(() => {
    api.get<IOrphanage[]>('/orphanages').then(({ data }) => setOrphanages(data))
  }, [])

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

      <LeafletMap orphanages={orphanages} />

      <Link href="/orphanages/create">
        <a id="return-button">
          <FiPlus size={32} color="#fff" />
        </a>
      </Link>
    </StyledMaps>
  )
}

export default Map
