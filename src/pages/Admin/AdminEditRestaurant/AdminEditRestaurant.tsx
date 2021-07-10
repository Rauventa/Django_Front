import React, {useEffect, useState} from 'react';
import {Form, Input} from "antd";
import {Button} from "../../../components/Button/Button";
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";
import {apiConfig, apiUrl} from "../../../components/api/apiReference";
import {useDispatch, useSelector} from "react-redux";
import {getRestaurant} from "../../../store/actions/restaurantsActions";

export const AdminEditRestaurant = () => {

    const history = useHistory()

    const {id}: any = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRestaurant(id))
    }, [])

    const restaurant = useSelector((state: any) => state.restaurantsReducer.restaurant)

    const [formState, setFormState] = useState<any>(restaurant)

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
            await axios.put(`${apiUrl}/restaurants/${id}/`, {...formState, owner: 1, id: 1}, apiConfig)

            console.log(formState)

            history.push('/admin')
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <h1>Редактирование ресторана</h1>

            <Form
                name="basic"
            >
                <Form.Item
                    label="Название ресторана"
                    name="name"
                >
                    <Input
                        defaultValue={formState.name}
                        onChange={(e) => formChangeHandler(e.target.value, 'name')}
                    />
                </Form.Item>
                <Form.Item
                    label="Город"
                    name="city"
                >
                    <Input
                        defaultValue={formState.city}
                        onChange={(e) => formChangeHandler(e.target.value, 'city')}
                    />
                </Form.Item>
                <Form.Item
                    label="Адресс"
                    name="address"
                >
                    <Input
                        defaultValue={formState.address}
                        onChange={(e) => formChangeHandler(e.target.value, 'address')}
                    />
                </Form.Item>
                <Form.Item
                    label="Телефон"
                    name="phone"
                >
                    <Input
                        defaultValue={formState.phone}
                        onChange={(e) => formChangeHandler(e.target.value, 'phone')}
                    />
                </Form.Item>

                <Form.Item>
                    <Button primary onClick={handleSubmit}>
                        Редактировать ресторан
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}