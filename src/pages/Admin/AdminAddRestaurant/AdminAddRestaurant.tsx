import React, {useEffect, useState} from 'react';
import {Form, Input} from "antd";
import {Button} from "../../../components/Button/Button";
import axios from "axios";
import {apiConfig, apiUrl} from "../../../components/api/apiReference";
import {useHistory} from "react-router-dom";

export const AdminAddRestaurant = () => {

  const [formState, setFormState] = useState<any>({})

  const history = useHistory()

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
      case 'city':
        setFormState((prev: any) => {
          return {
            ...prev,
            city: value
          }
        })
        break;
      case 'address':
        setFormState((prev: any) => {
          return {
            ...prev,
            address: value
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
    }
  }

  const handleSubmit = async () => {
    try {
      await axios.post(`${apiUrl}/restaurants/`, {...formState, owner: 1}, apiConfig)

      history.push('/admin')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      <h1>Добавление ресторана</h1>

      <Form
          name="basic"
      >
        <Form.Item
            label="Название ресторана"
            name="name"
            rules={[{ required: true, message: 'Пожалуйста, введите название ресторана' }]}
        >
          <Input
              onChange={(e) => formChangeHandler(e.target.value, 'name')}
          />
        </Form.Item>
        <Form.Item
            label="Город"
            name="city"
            rules={[{ required: true, message: 'Пожалуйста, введите город' }]}
        >
          <Input
              onChange={(e) => formChangeHandler(e.target.value, 'city')}
          />
        </Form.Item>
        <Form.Item
            label="Адресс"
            name="address"
            rules={[{ required: true, message: 'Пожалуйста, введите адресс' }]}
        >
          <Input
              onChange={(e) => formChangeHandler(e.target.value, 'address')}
          />
        </Form.Item>
        <Form.Item
            label="Телефон"
            name="phone"
            rules={[{ required: true, message: 'Пожалуйста, введите телефон' }]}
        >
          <Input
              onChange={(e) => formChangeHandler(e.target.value, 'phone')}
          />
        </Form.Item>

        <Form.Item>
          <Button primary onClick={handleSubmit}>
            Создать ресторан
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}