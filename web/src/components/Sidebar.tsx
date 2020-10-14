import React from 'react'
import { useRouter } from 'next/router'
import { FiArrowLeft } from 'react-icons/fi'

import Logo from '../../public/logo.svg'

import { StyledSidebar } from '../styles/components/Sidebar'

const Sidebar: React.FC = () => {
  const router = useRouter()

  function handleGoBack() {
    router.back()
  }

  return (
    <StyledSidebar>
      <Logo />

      <footer>
        <button type="button" onClick={handleGoBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </StyledSidebar>
  )
}

export default Sidebar
