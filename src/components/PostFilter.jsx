import React from 'react'
import MySelect from './UI/select/MySelect'
import MyInput from './UI/input/MyInput'

export default function PostFilter({filter, setFilter}) {
  return (
    <div>
    <MyInput
      value={filter.query}
      onChange={(event) => setFilter({...filter, query: event.target.value})}
      placeholder="Поиск..."
    />
    <MySelect
      value={filter.sort}
      onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
      defaultValue="Сортировка"
      options={[
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По описанию' },
      ]}
    ></MySelect>
  </div>
  )
}
