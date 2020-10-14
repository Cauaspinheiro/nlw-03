import React, { useEffect, useState } from 'react'
import { FiClock, FiInfo } from 'react-icons/fi'

import OrphanageMap from '../../components/OrphanageMap'
import { StyledOrphanage } from '../../styles/pages/orphanages/Orphanage'
import Sidebar from '../../components/Sidebar'
import { useRouter } from 'next/router'
import { IOrphanage } from '../../entities/Orphanage'
import api from '../../services/api'

const Orphanage: React.FC = () => {
  const { query } = useRouter()
  const [orphanage, setOrphanage] = useState<IOrphanage>()
  const [activeImagesIndex, setActiveImagesIndex] = useState(0)

  useEffect(() => {
    if (!query.id) return

    api.get<IOrphanage>(`/orphanages/${query.id}`).then(({ data }) => {
      console.log(query.id)

      setOrphanage(data)
    })
  }, [query.id])

  if (!orphanage) {
    return <p>Carregando...</p>
  }

  return (
    <StyledOrphanage>
      <Sidebar />

      <main>
        <div className="orphanage-details">
          <img
            src={orphanage.images[activeImagesIndex].url}
            alt={orphanage.name}
          />

          <div className="images">
            {orphanage.images.map((value, index) => (
              <button
                key={value.id}
                className={index === activeImagesIndex ? 'active' : ''}
                type="button"
                onClick={() => setActiveImagesIndex(index)}
              >
                <img src={value.url} alt="Lar das meninas" />
              </button>
            ))}
          </div>

          <div className="orphanage-details-content">
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>

            <div className="map-container">
              <OrphanageMap />

              <footer>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}
                >
                  Ver rotas no Google Maps
                </a>
              </footer>
            </div>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanage.instructions}</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                {orphanage.opening_hours}
              </div>
              {orphanage.open_on_weekends ? (
                <div className="open-on-weekends">
                  <FiInfo size={32} color="#39CC83" />
                  Atendemos <br />
                  fim de semana
                </div>
              ) : (
                <div className="open-on-weekends dont-open">
                  <FiInfo size={32} color="#ff669d" />
                  Não Atendemos <br />
                  fim de semana
                </div>
              )}
            </div>

            {/* <button type="button" className="contact-button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </button> */}
          </div>
        </div>
      </main>
    </StyledOrphanage>
  )
}
export default Orphanage
