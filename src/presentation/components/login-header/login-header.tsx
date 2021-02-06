import Styles from './login-header-styles.scss'
import { Logo } from '@/presentation/components'
import React, { memo } from 'react'

const LoginHeaderComponent: React.FC = () => {
  return (
    <header className={Styles.header}>
      <Logo />
      <h1>4Dev - Enquetes para Programadores</h1>
    </header>
  )
}

export const LoginHeader = memo(LoginHeaderComponent)
