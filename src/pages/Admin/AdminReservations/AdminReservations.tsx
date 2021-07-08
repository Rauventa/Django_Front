import React, { useEffect } from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getReservation} from "../../../store/actions/reservationActions";
import {Table} from "antd";
import dateFormat from 'dateformat';

export const AdminReservations = () => {

    const {id}: any = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getReservation(id))
    }, [])

    const reservations = useSelector((state: any) => state.reservationReducer.reservations);

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Заказчик',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Телефон',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Id стола',
            dataIndex: 'place',
            key: 'place',
        },
        {
            title: 'Количество персон',
            dataIndex: 'places',
            key: 'places',
        },
        {
            title: 'Время бронирования',
            dataIndex: 'reserved_at',
            key: 'reserved_at',
            render: (text: any) => (
                <div>
                    {dateFormat(text, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
                </div>
            )
        }
    ];

    return (
        <div>
            <Table
                dataSource={reservations}
                columns={columns}
            />
        </div>
    )
}