import { Form, Input, message } from 'antd';
import React, {useState} from 'react';
import { Button } from '../../../components/Button/Button';
import {adminData} from "../../../lib/adminData";
import {useHistory} from "react-router-dom";

export const AdminLogin = () => {

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
        if (adminData.password === formState.password) {
            localStorage.setItem('role', 'Админ')
            history.push('/admin')
            window.location.reload()
        } else {
            message.error('Неверный пароль администратора');
        }
    }

    return (
        <div className={'admin-login'}>

            <h1>Вход администратора</h1>

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