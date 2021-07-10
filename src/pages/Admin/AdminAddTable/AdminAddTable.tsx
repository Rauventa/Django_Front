import React, {useEffect, useState} from 'react';
import {Form, Input} from "antd";
import {Button} from "../../../components/Button/Button";
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";
import {apiConfig, apiUrl} from "../../../components/api/apiReference";
import {useDispatch, useSelector} from "react-redux";
import {getRestaurant} from "../../../store/actions/restaurantsActions";

export const AdminAddTable = () => {

  const [formState, setFormState] = useState<any>({})

  const {id}: any = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRestaurant(id))
  }, [])

  const restaurant = useSelector((state: any) => state.restaurantsReducer.restaurant)

  const history = useHistory()

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
      await axios.post(`${apiUrl}/places/`, {...formState, restaurant: id}, apiConfig)

      history.push(`/admin/restaurants/${id}`)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      <h1>Добавление стол в ресторан "{restaurant.name}"</h1>

      <Form
        name="basic"
      >
        <Form.Item
          label="Номер стола"
          name="table_number"
        >
          <Input
            onChange={(e) => formChangeHandler(e.target.value, 'table_number')}
          />
        </Form.Item>
        <Form.Item
          label="Количество мест"
          name="max_places"
        >
          <Input
            onChange={(e) => formChangeHandler(e.target.value, 'max_places')}
          />
        </Form.Item>
        <Form.Item
          label="Номер зала"
          name="hall_number"
        >
          <Input
            onChange={(e) => formChangeHandler(e.target.value, 'hall_number')}
          />
        </Form.Item>

        <Form.Item>
          <Button primary onClick={handleSubmit}>
            Создать стол
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}