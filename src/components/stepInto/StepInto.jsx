import Button from '../button/Button'

import style from './stepinto.module.css'

const StepInto = () => {
  return (
    <section className={style.container}>
        <p className={style.title}>STEP INTO WHAT FEELS GOOD</p>
        <p className={style.subtitle}>Cause everyone should know the feeling of running in that perfect pair.</p>
        <Button title="Find Your Shoe"/>
    </section>
  )
}

export default StepInto