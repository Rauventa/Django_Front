import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {DashboardPage} from "../pages/DashboardPage/DashboardPage";
import {RestaurantPage} from "../pages/RestaurantPage/RestaurantPage";
import {ReservePage} from "../pages/ReservePage/ReservePage";
import {AdminLogin} from "../pages/Admin/AdminLogin/AdminLogin";
import {AdminDashboard} from "../pages/Admin/AdminDashboard/AdminDashboard";
import {AdminTables} from "../pages/Admin/AdminTables/AdminTables";
import { AdminReservations } from '../pages/Admin/AdminReservations/AdminReservations';

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

    {/*  Admin routes  */}

        <Route path={'/admin/login'}>
            <AdminLogin />
        </Route>
        <Route path={'/admin'} exact>
            <AdminDashboard />
        </Route>
        <Route path={'/admin/restaurants/:id'} exact>
            <AdminTables />
        </Route>
        <Route path={'/admin/restaurants/:id/reservations'}>
            <AdminReservations />
        </Route>
    </Switch>
  )
}