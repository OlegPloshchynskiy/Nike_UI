import featured from '../../../public/images/Featured.jpg'
import style from './featured.module.css'

const Featured = () => {
  return (
    <div>
        <p className={style.title}>Featured</p>
        <img src={featured} alt="" width="100%"/>
    </div>
  )
}

export default Featured