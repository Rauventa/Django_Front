import {Button, Table } from 'antd';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getRestaurants} from "../../../store/actions/restaurantsActions";
import {DeleteOutlined, EditOutlined} from '@ant-design/icons'
import {NavLink, useHistory} from 'react-router-dom';
import axios from "axios";
import {apiConfig, apiUrl} from "../../../components/api/apiReference";

export const AdminDashboard = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRestaurants())
    }, [])

    const history = useHistory()

    const restaurants = useSelector((state: any) => state.restaurantsReducer.restaurants).map((item: any, index: number) => {
        return {
            ...item,
            key: index
        }
    })

    const removeHandler = async (id: any) => {
        try {
            await axios.delete(`${apiUrl}/restaurants/${id}`, apiConfig)

            dispatch(getRestaurants())
        } catch (e) {
            console.log(e)
        }
    }

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            sorter: (a: any, b: any) => a.id - b.id,
        },
        {
            title: 'Название ресторана',
            dataIndex: 'name',
            key: 'name',
            render: (text: any, record: any) => (
                <NavLink to={`/admin/restaurants/${record.id}`}>
                    {text}
                </NavLink>
            )
        },
        {
            title: 'Телефон',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Город',
            dataIndex: 'city',
            key: 'city',
        },
        {
            title: 'Адрес',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Действия',
            dataIndex: 'actions',
            key: 'actions',
            render: (text: any, record: any) => (
                <div>
                    <Button type={'primary'} style={{marginRight: '10px'}} onClick={() => history.push(`/admin/edit/restaurant/${record.id}`)}>
                        <EditOutlined />
                    </Button>
                    <Button type="primary" danger style={{marginRight: '10px'}} onClick={() => removeHandler(record.id)}>
                        <DeleteOutlined />
                    </Button>
                </div>
            ),
        },
        {
            title: 'Бронирования',
            dataIndex: 'reservation',
            key: 'reservation',
            render: (text: any, record: any) => (
                <NavLink to={`/admin/restaurants/${record.id}/reservations`}>
                    Посмотреть бронирования
                </NavLink>
            )
        },
    ];

    return (
        <div className={'admin-dashboard'}>
            <h1>Сервис администратора</h1>

            <Button type={'primary'} onClick={() => history.push('/admin/add/restaurant')}>
                Добавить новый ресторан
            </Button>

            <Table dataSource={restaurants} columns={columns} />
        </div>
    )
}