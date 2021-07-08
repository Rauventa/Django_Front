import React, {useEffect} from "react";
import {NavLink, useHistory, useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {getRestaurant} from "../../store/actions/restaurantsActions";
import {getRestaurantPlaces} from "../../store/actions/placesActions";
import './RestaurantPage.scss';
import { Button } from "../../components/Button/Button";
import {$t} from "../../lib/i18t";
import {convertDate} from "../../utils/DataConverter/dataConverter";
import Card from "antd/lib/card";
import Breadcrumb from "antd/lib/breadcrumb";

export const RestaurantPage = () => {

  const dispatch = useDispatch()
  const history = useHistory()

  const {id}: any = useParams();

  useEffect(() => {
    dispatch(getRestaurant(id))
    dispatch(getRestaurantPlaces(id))
  }, []);

  const restaurant = useSelector((state: any) => state.restaurantsReducer.restaurant)
  const places = useSelector((state: any) => state.placesReducer.restaurantPlaces);

  const reserveHandler = (id: number) => {
    history.push(`/reserve/${id}`)
  }

  return (
    <div className={'restaurants'}>
      <h1>Ресторан {restaurant.name}, {restaurant.city}, {restaurant.address}</h1>

      <Breadcrumb>
        <Breadcrumb.Item>
          <NavLink to="/">Список рестаранов</NavLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          {restaurant.name}
        </Breadcrumb.Item>
      </Breadcrumb>

      <div className={'restaurants__list'}>
        {places.length ? places.map((item: any, index: number) => {
            return (
              <Card key={index} title={`Стол #${item.table_number}`} onClick={() => reserveHandler(item.id)}>
                <p>Колличество мест: {item.max_places}</p>
                <p>Номер зала: {item.hall_number}</p>
                <p>ID: {item.id}</p>
              </Card>
            )
          }):
          <div>
            <p>Свободных столов нет</p>

              <Button primary onClick={history.goBack}>
                  Вернуться назад
              </Button>
          </div>
        }
      </div>
    </div>
  )
}