import nike_logo from '../../../public/images/preloader-logo.png'

import style from './preloader.module.css'

const Preloader = () => {
  return (
    <div className={style.preloader}>
        <img src={nike_logo} alt="" width="200px" className={style.logo} />
    </div>
  )
}

export default Preloader