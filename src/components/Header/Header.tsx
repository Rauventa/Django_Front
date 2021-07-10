import React from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import { $t } from '../../lib/i18t';
import './Header.scss'

export const Header = () => {

    const history = useHistory()

    const logoutHandler = () => {
        localStorage.removeItem('role');

        history.push('/')
        window.location.reload()
    }

  return (
    <header className={'header'}>
      <div className="header__logo">
        <NavLink to={'/'}>
          {$t('Сервис резервации')}
        </NavLink>
      </div>
        {localStorage.role ?
            <div className="header__nav">
                {/*<NavLink to={'/'} className={'header__nav_item'}>*/}
                {/*  {$t('Reserve')}*/}
                {/*</NavLink>*/}

                <div className={'header__nav_item'} onClick={logoutHandler}>
                    {localStorage.role}, Выйти
                </div>
            </div> : null
        }
    </header>
  )
}