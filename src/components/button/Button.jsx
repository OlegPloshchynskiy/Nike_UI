import style from './button.module.css';

const Button = ({title, func, sFunc, styles}) => <button className={style.button} style={{...styles}} onClick={func} onSubmit={sFunc}>{title}</button>;

export default Button;