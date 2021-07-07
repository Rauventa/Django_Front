import React, {useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import Breadcrumb from "antd/lib/breadcrumb";
import {useSelector} from "react-redux";
import './ReservePage.scss'
import {Button} from "../../components/Button/Button";
import axios from "axios";
import {apiConfig, apiUrl} from "../../components/api/apiReference";
import {Form, Input} from 'antd';

export const ReservePage = () => {

  const {id}: any = useParams();

  const restaurant = useSelector((state: any) => state.restaurantsReducer.restaurant);

  const defaultFormState = {
    reserved_at: '2021-07-07T16:14:00.013Z',
    phone: '',
    name: '',
    places: 1
  }

  const [formState, setFormState] = useState<any>(defaultFormState)

  const formChangeHandler = (value: any, iterator: string) => {

    console.log(value)

    switch (iterator) {
      case 'name':
        setFormState((prev: any) => {
          return {
            ...prev,
            name: value
          }
        })
        break;
      case 'phone':
        setFormState((prev: any) => {
          return {
            ...prev,
            phone: value
          }
        })
        break;
      case 'places':
        setFormState((prev: any) => {
          return {
            ...prev,
            places: value
          }
        })
        break;
    }
  }

  const submitHandler = async () => {

    console.log(formState, restaurant.id)
    try {
      const response = await axios.post(`${apiUrl}/reservations/`,
        {
        ...formState, restaurant: restaurant.id, place: id
        },
        apiConfig);

      console.log(response)
    } catch (e) {
      console.log(e)
    }

  }

  return (
    <div className={'reserve-page'}>
      <h1>Зарезервировать</h1>

      <Breadcrumb>
        <Breadcrumb.Item>
          <NavLink to="/">Список рестаранов</NavLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <NavLink to={`/restaurant/${restaurant.id}`}>{restaurant.name}</NavLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          1
        </Breadcrumb.Item>
      </Breadcrumb>

      <div className="reserve-page__form">
        <Form>
          <Form.Item
            label="Имя"
            name="name"
            rules={[{ required: true, message: 'Пожалуйста, введите свое имя' }]}
          >
            <Input
              value={formState.name}
              onChange={(e) => formChangeHandler(e.target.value, 'name')}
            />
          </Form.Item>

          <Form.Item
            label="Телефон"
            name="phone"
            rules={[{ required: true, message: 'Пожалуйста, введите ваш телефон' }]}
          >
            <Input
              type={'phone'}
              value={formState.phone}
              onChange={(e) => formChangeHandler(e.target.value, 'phone')}
            />
          </Form.Item>

          <Form.Item
            label="Колличество мест"
            name="places"
            rules={[{ required: true, message: 'Пожалуйста, укажите количество мест' }]}
          >
            <Input
              value={formState.places}
              onChange={(e) => formChangeHandler(e.target.value, 'places')}
            />
          </Form.Item>
        </Form>
        <Button primary onClick={submitHandler}>
          Зарезервировать
        </Button>
      </div>
    </div>
  )
}