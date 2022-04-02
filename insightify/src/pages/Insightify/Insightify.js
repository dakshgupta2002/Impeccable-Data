import React, { useState } from 'react'
import { Divider, Header, Tabs } from '../../lib'
import './Insightify.css'
import Create from './page/Create'
import View from './page/View'

export default function Insightify() {

  const [page, setPage] = useState('Create')

  return (
    <>
      <Header />

      <div className='page'>
        <Tabs
          titles={['Create', 'View']}
          value={page}
          onClick={(e) => { setPage(e.target.outerText) }}
        />
        <Divider />
        {
          page === 'Create'
            ? <Create />
            : <View />
        }
      </div>

    </>
  )
}
