import image from '../../../public/images/dont-miss.jpg'
import Button from '../button/Button'
import style from './dontmiss.module.css'

const Dontmiss = () => {

    const styles = {
        fontWeight: 600,
        fontSize: "22px"
    }

  return (
    <div style={{marginTop: "84px"}}>
        <p style={styles}>Dont Miss</p>
        <img src={image} alt="" />

        <div className={style.text_container}>
            <div className={style.title}>FLIGHT ESSENTIALS</div>
            <div className={style.subtitle}>Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</div>
            <Button title="Shop" />
        </div>

    </div>
  )
}

export default Dontmiss