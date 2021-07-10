import React, {useEffect} from 'react';
import {NavLink, useHistory, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getRestaurant} from "../../../store/actions/restaurantsActions";
import {getRestaurantPlaces} from "../../../store/actions/placesActions";
import {Button, Table} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";

export const AdminTables = () => {

    const {id}: any = useParams()

    const dispatch = useDispatch()

    const history = useHistory()

    useEffect(() => {
        dispatch(getRestaurant(id))
        dispatch(getRestaurantPlaces(id))
    }, [])

    const restaurant = useSelector((state: any) => state.restaurantsReducer.restaurant)
    const places = useSelector((state: any) => state.placesReducer.restaurantPlaces);

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            sorter: (a: any, b: any) => a.id - b.id,
        },
        {
            title: 'Номер стола',
            dataIndex: 'hall_number',
            key: 'hall_number',
        },
        {
            title: 'Количество мест',
            dataIndex: 'max_places',
            key: 'max_places',
            sorter: (a: any, b: any) => a.max_places - b.max_places,
        },
        {
            title: 'Номер зала',
            dataIndex: 'hall_number',
            key: 'hall_number',
        },
        {
            title: 'Действия',
            dataIndex: 'actions',
            key: 'actions',
            render: (text: any, record: any) => (
                <div>
                    <Button type={'primary'} style={{marginRight: '10px'}} onClick={() => history.push(`/admin/table/edit/${record.id}`)}>
                        <EditOutlined />
                    </Button>
                    <Button type="primary" danger style={{marginRight: '10px'}}>
                        <DeleteOutlined />
                    </Button>
                </div>
            ),
        },
    ];

    return (
        <div>

            <Button type={'primary'} onClick={history.goBack} style={{marginRight: '20px'}}>
                Назад к ресторану "{restaurant.name}"
            </Button>
            <Button type={'primary'} onClick={() => history.push(`/admin/add/table/${restaurant.id}`)}>
                Добавить новый стол
            </Button>

            <Table dataSource={places} columns={columns} />
        </div>
    )
}