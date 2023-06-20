import React from 'react'
import Layout from '../../layout/Layout'
import { Link } from 'react-router-dom'

import style from './storeinfo.module.css'

const StoreInfo = () => {
  return (
    <Layout>
        <header className={style.header}>
            <Link to="/findstore" className={style.go_back}>Back to Search</Link>
        </header>
    </Layout>
  )
}

export default StoreInfo