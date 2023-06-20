import React from 'react'
import style from './essentials.module.css'
import Cards from './cards/Cards'
import mans from '../../../public/images/mans.jpg'
import womans from '../../../public/images/womans.jpg'
import kids from '../../../public/images/kids.jpg'

const Essentials = () => {
  return (
    <div>
        <p className={style.title}>The Essentials</p>
        <div className={style.cards_block}>
            <Cards src={mans} title="Men`s" color="white" />
            <Cards src={womans} title="Women`s" color="white" />
            <Cards src={kids} title="Kids`" color="white" />
        </div>
    </div>
  )
}

export default Essentials