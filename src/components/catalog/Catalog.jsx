import style from './catalog.module.css'

const Catalog = () => {
  return (
    <div className={style.catalog}>
        <div className={style.catalog_cols}>
            <ul>
                <li>Icons</li>
                <li>Air Force 1</li>
                <li>Huarache</li>
                <li>Air Max 90</li>
                <li>Air Max 95</li>
            </ul>
        </div>
        <div className={style.catalog_cols}>
            <ul>
                <li>Shoes</li>
                <li>All Shoes</li>
                <li>Custom Shoes</li>
                <li>Jordan Shoes</li>
                <li>Running Shoes</li>
            </ul>
        </div>
        <div className={style.catalog_cols}>
            <ul>
                <li>Clothing</li>
                <li>All Clothing</li>
                <li>Modest Wear</li>
                <li>Hoodies & Pullovers</li>
                <li>Shirts & Tops</li>
            </ul>
        </div>
        <div className={style.catalog_cols}>
            <ul>
                <li>Kids'</li>
                <li>Infant & Toddler Shoes</li>
                <li>Kids' Shoes</li>
                <li>Kids' Jordan Shoes</li>
                <li>Kids' Basketball Shoes</li>
            </ul>
        </div>
    </div>
  )
}

export default Catalog