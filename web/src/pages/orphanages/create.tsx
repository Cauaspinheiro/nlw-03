import React, { ChangeEvent, FormEvent, useState } from 'react'

import { FiPlus } from 'react-icons/fi'

import { StyledCreateOrphanage } from '../../styles/pages/orphanages/CreateOrphanage'
import CreateOrphanageMap from '../../components/CreateOrphanageMap'
import Sidebar from '../../components/Sidebar'
import { LeafletMouseEvent } from 'leaflet'
import api from '../../services/api'
import { useRouter } from 'next/router'

const CreateOrphanage: React.FC = () => {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 })
  const [name, setName] = useState('')
  const [about, setAbout] = useState('')
  const [instructions, setInstructions] = useState('')
  const [opening_hours, setOpening_hours] = useState('')
  const [open_on_weekends, setOpen_on_weekends] = useState(true)
  const [images, setImages] = useState<File[]>([])
  const [previewImages, setPreviewImages] = useState<string[]>([])

  const router = useRouter()

  function handleMapClick(e: LeafletMouseEvent) {
    const { lat, lng } = e.latlng

    setPosition({
      latitude: lat,
      longitude: lng
    })
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const reqData = new FormData()

    images.forEach(image => {
      reqData.append('images', image)
    })

    reqData.append('name', name)
    reqData.append('about', about)
    reqData.append('instructions', instructions)
    reqData.append('opening_hours', opening_hours)
    reqData.append('open_on_weekends', String(open_on_weekends))
    reqData.append('latitude', String(position.latitude))
    reqData.append('longitude', String(position.longitude))

    try {
      await api.post('/orphanages', reqData)

      alert('Cadastro realizado com sucesso!')

      router.push('/orphanages')
    } catch (error) {
      console.log(error.response)
    }
  }

  function handleSelectImages(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return

    const selectedImages = Array.from(e.target.files)

    setImages(selectedImages)

    const selectedImagesPreview = selectedImages.map(image => {
      return URL.createObjectURL(image)
    })

    setPreviewImages(selectedImagesPreview)
  }

  return (
    <StyledCreateOrphanage>
      <Sidebar />

      <main>
        <form className="create-orphanage-form" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados</legend>

            <CreateOrphanageMap
              latitude={position.latitude}
              longitude={position.longitude}
              onclick={handleMapClick}
            />

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </label>
              <textarea
                id="name"
                maxLength={300}
                value={about}
                onChange={e => setAbout(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="images-container">
                {previewImages.map((image, index) => {
                  return <img key={index} src={image} alt={name} />
                })}

                <label htmlFor="image[]" className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </label>
              </div>

              <input
                multiple
                onChange={handleSelectImages}
                type="file"
                id="image[]"
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea
                id="instructions"
                value={instructions}
                onChange={e => setInstructions(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Horário de funcionamento</label>
              <input
                id="opening_hours"
                value={opening_hours}
                onChange={e => setOpening_hours(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekendss">Atende fim de semana</label>

              <div className="button-select">
                <button
                  type="button"
                  className={open_on_weekends ? 'active' : null}
                  onClick={() => setOpen_on_weekends(!open_on_weekends)}
                >
                  Sim
                </button>
                <button
                  type="button"
                  className={!open_on_weekends ? 'active' : null}
                  onClick={() => setOpen_on_weekends(!open_on_weekends)}
                >
                  Não
                </button>
              </div>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </StyledCreateOrphanage>
  )
}
export default CreateOrphanage
