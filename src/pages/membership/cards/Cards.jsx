import {Link} from "react-router-dom"

import style from "./cards.module.css"

const Cards = ( {image, title, subtitle, explore} ) => {
  return (
    <div className={style.cards}>
        <img src={image} alt="Cards" width={"100%"} />
        <p className={style.title}>{title}</p>
        <p className={style.subtitle}>{subtitle}</p>
        {explore ? <Link>Explore</Link> : null}
    </div>
  )
}

export default Cards