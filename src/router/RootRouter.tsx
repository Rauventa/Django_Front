import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {DashboardPage} from "../pages/DashboardPage/DashboardPage";
import {RestaurantPage} from "../pages/RestaurantPage/RestaurantPage";
import {ReservePage} from "../pages/ReservePage/ReservePage";

export const RootRouter = () => {
  return (
    <Switch>
      <Route path={'/'} exact>
        <DashboardPage />
      </Route>
      <Route path={'/restaurant/:id'}>
        <RestaurantPage />
      </Route>
      <Route path={'/reserve/:id'}>
        <ReservePage />
      </Route>
    </Switch>
  )
}