import React, {useState} from 'react';

export const AdminAddRestaurant = () => {

  const defaultFormState = {

  }

  const [formState, setFormState] = useState<any>(defaultFormState)

  const formChangeHandler = (value: any, iterator: string) => {
    switch (iterator) {

    }
  }

  return (
    <div>
      <h1>Добавление ресторана</h1>
    </div>
  )
}