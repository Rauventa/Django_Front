import React from 'react';
import { NavLink } from 'react-router-dom';
import { $t } from '../../lib/i18t';
import './Header.scss'

export const Header = () => {
  return (
    <header className={'header'}>
      <div className="header__logo">
        <NavLink to={'/'}>
          {$t('Сервис резервации')}
        </NavLink>
      </div>
      <div className="header__nav">
        {/*<NavLink to={'/'} className={'header__nav_item'}>*/}
        {/*  {$t('Reserve')}*/}
        {/*</NavLink>*/}
      </div>
    </header>
  )
}