import React from 'react'
import Head from 'next/head'
import { FiArrowRight } from 'react-icons/fi'
import Link from 'next/link'

import LogoTextSVG from '../assets/logo_text.svg'
import StyledLanding from '../styles/pages/Landing'

const Landing: React.FC = () => {
  return (
    <StyledLanding>
      <Head>
        <title>Happy</title>
      </Head>

      <div id="content-wrapper">
        <LogoTextSVG />

        <main>
          <h1>Leve felicidade para o mundo</h1>

          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div id="location">
          <strong>Barueri</strong>

          <span>São Paulo</span>
        </div>

        <Link href="/orphanages">
          <a id="enter-app">
            <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
          </a>
        </Link>
      </div>
    </StyledLanding>
  )
}

export default Landing
