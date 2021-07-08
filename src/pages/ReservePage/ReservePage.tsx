import React, {useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import Breadcrumb from "antd/lib/breadcrumb";
import {useSelector} from "react-redux";
import './ReservePage.scss'
import {Button} from "../../components/Button/Button";
import axios from "axios";
import {apiConfig, apiUrl} from "../../components/api/apiReference";
import {DatePicker, Form, Input, message, Result, TimePicker} from 'antd';
import moment from 'moment';

export const ReservePage = () => {

  const {id}: any = useParams();

  const restaurant = useSelector((state: any) => state.restaurantsReducer.restaurant);

  const defaultFormState = {
    reserved_at: '2021-07-07T16:14:00.013Z',
    phone: '',
    name: '',
    date: '',
    time: '',
    places: 1
  }

  const [formState, setFormState] = useState<any>(defaultFormState)
  const [result, setResult] = useState<boolean>(false)

  const formChangeHandler = (value: any, iterator: string) => {

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
      case 'date':
        setFormState((prev: any) => {
          return {
            ...prev,
            date: value
          }
        })
        break;
      case 'time':
        setFormState((prev: any) => {
          return {
            ...prev,
            time: value
          }
        })
        break;
    }
  }

  const submitHandler = async () => {
    try {
      await axios.post(`${apiUrl}/reservations/`,
        {
        ...formState, restaurant: restaurant.id, place: id, reserved_at: `${formState.date} ${formState.time}`
        },
        apiConfig);

      setResult(true)
    } catch (e) {
      console.log(e)
      message.error('Ошибка при резервировании');
    }

  }

  return (
    <div className={'reserve-page'}>
      <h1>Зарезервировать стол #{id} в ресторане "{restaurant.name}"</h1>

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
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
        >
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
              label={'Дата'}
              name={'date'}
              rules={[{ required: true, message: 'Пожалуйста, введите дату бронирования' }]}
          >
            <DatePicker value={formState.date} onChange={(date, dateString) => formChangeHandler(dateString, 'date')} />
          </Form.Item>

          <Form.Item
              label={'Время'}
              name={'time'}
              rules={[{ required: true, message: 'Пожалуйста, введите время бронирования' }]}
          >
            <TimePicker value={formState.time} onChange={(time, timeString) => formChangeHandler(timeString, 'time')} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
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
            label="Колличество персон"
            name="places"
            rules={[{ required: true, message: 'Пожалуйста, укажите количество персон' }]}
          >
            <Input
              value={formState.places}
              onChange={(e) => formChangeHandler(e.target.value, 'places')}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button primary onClick={submitHandler}>
              Зарезервировать
            </Button>
          </Form.Item>
        </Form>
      </div>

      {result ?
          <div className="reserve-page__result">
            <Result
                status="success"
                title="Вашу бронирование подтверждено!"
                subTitle="Спасибо за выбор нашего ресторана, с вами свяжется наш менеджер в течении 30 минут."
                extra={[
                  <Button primary href={'/'}>
                    Продолжить
                  </Button>,
                ]}
            />
          </div> : null
      }
    </div>
  )
}