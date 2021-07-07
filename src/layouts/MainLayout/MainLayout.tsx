import React from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import {RootRouter} from "../../router/RootRouter";
import './MainLayout.scss'

export const MainLayout = () => {
  return (
    <div className={'layout'}>
      <Header />
      <div className="layout__container">
        <RootRouter />
      </div>
      <Footer />
    </div>
  )
}