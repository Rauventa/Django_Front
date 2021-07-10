import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {DashboardPage} from "../pages/DashboardPage/DashboardPage";
import {RestaurantPage} from "../pages/RestaurantPage/RestaurantPage";
import {ReservePage} from "../pages/ReservePage/ReservePage";
import {AdminLogin} from "../pages/Admin/AdminLogin/AdminLogin";
import {AdminDashboard} from "../pages/Admin/AdminDashboard/AdminDashboard";
import {AdminTables} from "../pages/Admin/AdminTables/AdminTables";
import { AdminReservations } from '../pages/Admin/AdminReservations/AdminReservations';
import {AdminAddRestaurant} from "../pages/Admin/AdminAddRestaurant/AdminAddRestaurant";
import {AdminEditRestaurant} from "../pages/Admin/AdminEditRestaurant/AdminEditRestaurant";
import {AdminAddTable} from "../pages/Admin/AdminAddTable/AdminAddTable";
import {AdminEditTable} from "../pages/Admin/AdminEditTable/AdminEditTable";
import {ModerLogin} from "../pages/Moder/ModerLogin/ModerLogin";
import {ModerDashboard} from "../pages/Moder/ModerDashboard/ModerDashboard";

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
        <Route path={'/admin/restaurants/:id/reservations'} exact>
            <AdminReservations />
        </Route>
        <Route path={'/admin/add/restaurant'}>
            <AdminAddRestaurant />
        </Route>
        <Route path={'/admin/edit/restaurant/:id'} exact>
            <AdminEditRestaurant />
        </Route>
        <Route path={'/admin/add/table/:id'}>
          <AdminAddTable />
        </Route>
        <Route path={'/admin/table/edit/:id'} exact>
          <AdminEditTable />
        </Route>

        {/*  Moder routes  */}

      <Route path={'/moder/login'}>
        <ModerLogin />
      </Route>
      <Route path={'/moder'} exact>
        <ModerDashboard />
      </Route>
    </Switch>
  )
}