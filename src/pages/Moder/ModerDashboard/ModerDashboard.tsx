import React, {useEffect, useState} from 'react';
import axios from "axios";
import {apiConfig, apiUrl} from "../../../components/api/apiReference";
import {Button, Table} from "antd";
import dateFormat from "dateformat";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";

export const ModerDashboard = () => {

  const [reservations, setReservations] = useState<any>([])

  const fetchData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/reservations/`, apiConfig);

      setReservations(response.data.results)
    } catch (e) {
      console.log(e)
    }
  }

  const removeHandler = async (id: any) => {
    try {
      await axios.delete(`${apiUrl}/reservations/${id}`, apiConfig);

      fetchData()
    } catch (e) {
      console.log(e)
    }
  }

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
    },
    {
      title: 'Действия',
      dataIndex: 'actions',
      key: 'actions',
      render: (text: any, record: any) => (
        <div>
          <Button type={'primary'} style={{marginRight: '10px'}}>
            <EditOutlined />
          </Button>
          <Button type="primary" danger style={{marginRight: '10px'}} onClick={() => removeHandler(record.id)}>
            <DeleteOutlined />
          </Button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div>
      <h1>Бронирования</h1>
      <Table dataSource={reservations} columns={columns} />
    </div>
  )
}