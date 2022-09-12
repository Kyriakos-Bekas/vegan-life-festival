import style from './Product.module.scss';

const Product = ({ title, description, img }) => {
    return (
        <article className={style.product}>
            <div className={`text-dark ${style.details}`}>
                <h1 className="fs-500">{title}</h1>
                <p className="fs-300">{description}</p>
            </div>

            <div className={style.thumbnail}>
                <img src={`/products/${img}`} alt={`${title} Photo`} />
            </div>
        </article>
    );
};

export default Product;
