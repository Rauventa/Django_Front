import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {getRestaurants} from "../../store/actions/restaurantsActions";
import './DashboardPage.scss';
import { useHistory } from 'react-router-dom';
import Card from 'antd/lib/card';
export const DashboardPage = () => {

  const dispatch = useDispatch()
  const history = useHistory()

  const restaurants = useSelector((state: any) => state.restaurantsReducer.restaurants)

  useEffect(() => {
    dispatch(getRestaurants())
  }, []);

  const handleSelect = (id: number) => {
    history.push(`/restaurant/${id}`)
  }

  return (
    <div className={'dashboard'}>
      <h1>Дэшборд</h1>

      <div className="dashboard__restaurants">
        {restaurants?.map((item: any, index: number) => {

          return (
            <Card key={index} title={item.name} onClick={() => handleSelect(item.id)}>
              <p>{item.city}</p>
              <p>Адрес - {item.address}</p>
            </Card>
          )
        })}
      </div>
    </div>
  )
}