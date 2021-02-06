import Styles from './footer-styles.scss'
import React, { memo } from 'react'

const FooterComponent: React.FC = () => {
  return (
    <footer className={Styles.footer}></footer>
  )
}

export const Footer = memo(FooterComponent)
