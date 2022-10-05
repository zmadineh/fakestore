import React, {useEffect, useState} from "react";
import "./item-description.scss";
import {products} from "../../data/products";
import {categories} from "../../data/categories";
import {useParams} from "react-router-dom";


const ItemDescription = () => {

    const {id} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        setProduct(products.filter(item => item.id === Number(id))[0])
    })

    return (
        <div className="ItemDescription">

            {/*<h2>{`دسته بندی : ${categories.find(item => item.id == product.categoryId).title}`} </h2>*/}
            <h2>{`دسته بندی : ${product.categoryId}`} </h2>
            <h2>{`نام محصول : ${product.name}`}</h2>
            <h4>{'توضیحات کوتاه در صورت نیاز'}</h4>
            <p>{product.description}</p>

        </div>
    );
};

export default ItemDescription;
