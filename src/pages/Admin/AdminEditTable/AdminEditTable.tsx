import React, {useEffect, useState} from 'react';
import {Form, Input} from "antd";
import {Button} from "../../../components/Button/Button";
import {useHistory, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getRestaurant} from "../../../store/actions/restaurantsActions";
import axios from "axios";
import {apiConfig, apiUrl} from "../../../components/api/apiReference";
import {getRestaurantPlaces} from "../../../store/actions/placesActions";

export const AdminEditTable = () => {

  const history = useHistory()

  const {id}: any = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRestaurant(id))
    dispatch(getRestaurantPlaces(id))
  }, [])

  const restaurant = useSelector((state: any) => state.restaurantsReducer.restaurant)
  const places = useSelector((state: any) => state.placesReducer.restaurantPlaces);

  const [formState, setFormState] = useState<any>(restaurant)

  const formChangeHandler = (value: any, iterator: string) => {
    switch (iterator) {
      case 'table_number':
        setFormState((prev: any) => {
          return {
            ...prev,
            table_number: value
          }
        })
        break;
      case 'max_places':
        setFormState((prev: any) => {
          return {
            ...prev,
            max_places: value
          }
        })
        break;
      case 'hall_number':
        setFormState((prev: any) => {
          return {
            ...prev,
            hall_number: value
          }
        })
        break;
    }
  }

  const handleSubmit = async () => {
    try {
      await axios.put(`${apiUrl}/places/${id}/`, {...formState, restaurant: 1}, apiConfig)

      history.push('/admin')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      <h1>Редактирование стола</h1>

      <Form
        name="basic"
      >
        <Form.Item
          label="Название ресторана"
          name="table_number"
        >
          <Input
            defaultValue={formState.table_number}
            onChange={(e) => formChangeHandler(e.target.value, 'table_number')}
          />
        </Form.Item>
        <Form.Item
          label="Город"
          name="max_places"
        >
          <Input
            defaultValue={formState.max_places}
            onChange={(e) => formChangeHandler(e.target.value, 'max_places')}
          />
        </Form.Item>
        <Form.Item
          label="Адресс"
          name="hall_number"
        >
          <Input
            defaultValue={formState.hall_number}
            onChange={(e) => formChangeHandler(e.target.value, 'hall_number')}
          />
        </Form.Item>

        <Form.Item>
          <Button primary onClick={handleSubmit}>
            Редактировать стол
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}