import React from "react";
import { $t } from "../../lib/i18t";
import './Footer.scss'

export const Footer = () => {
  return (
    <footer className={'footer'}>
      <div className="footer__root">
        <div className="footer__root_author">
          {$t('(C) Rauventa')}
        </div>
        <div className="footer__root_data">
          {$t('2021')}
        </div>
      </div>
    </footer>
  )
}