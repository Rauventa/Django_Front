import React, {useState} from 'react';
import {Form, Input, message} from "antd";
import {Button} from "../../../components/Button/Button";
import {useHistory} from "react-router-dom";
import {moderData} from "../../../lib/moderData";

export const ModerLogin = () => {

  const defaultFormState = {
    password: ''
  }

  const history = useHistory()

  const [formState, setFormState] = useState<any>(defaultFormState)

  const passwordChangeHandler = (value: any) => {
    setFormState((prev: any) => {
      return {
        ...prev,
        password: value
      }
    })
  }

  const handleSubmit = () => {
    if (moderData.password === formState.password) {
      localStorage.setItem('role', 'Модератор')
      history.push('/moder')
      window.location.reload()
    } else {
      message.error('Неверный пароль модератора');
    }
  }

  return (
    <div className={'moder-login'}>

      <h1>Вход модератора</h1>

      <Form
        name="basic"
      >
        <Form.Item
          label="Пароль"
          name="password"
          rules={[{ required: true, message: 'Пожалуйста, введите пароль' }]}
        >
          <Input.Password
            onChange={(e) => passwordChangeHandler(e.target.value)}
          />
        </Form.Item>

        <Form.Item>
          <Button primary onClick={handleSubmit}>
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}