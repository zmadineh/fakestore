import React, {useEffect, useState} from "react";
import Button from "../button/Button";
import "./item-card.scss";
import {products} from "../../data/products";
import {useParams} from "react-router-dom";


const ItemCard = () => {

    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        setProduct(products.filter(item => item.id === Number(id))[0])
    })

    const counterChange = (e) => {
        setCounter(Number(e.target.value))
    }

    return (
        <div className="ItemCard">

            <img className="ItemCard__image" src={product.image} alt="" />

            <div className={'d-flex'}>
                <div className={'ItemCard__counter'}>
                    <p htmlFor={'counter'} className={'ItemCard__text'}>{'قیمت :'}</p>
                    <input type="number" name="counter" step="1" onChange={counterChange} value={counter} />
                </div>
                <p className="ItemCard_price">{`${counter*product.price} تومان`}</p>
            </div>

            <Button primary={true} className={'addToCart_btn'}>{'افزودن به سبد خرید'}</Button>

        </div>
    );
};

export default ItemCard;
