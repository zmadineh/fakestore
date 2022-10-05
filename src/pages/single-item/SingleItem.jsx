import ItemCard from "../../components/item-card/ItemCard";
import ItemDescription from "../../components/item-description/ItemDescription";
import Container from "../../components/container/Container";
import {Link} from "react-router-dom";
import React from "react";
import './singleItem.scss';

const SingleItem = () => {

    return (
        <div>
            <Container>
                <div className={'SingleItem__header'}>
                    <Link to={'/'}>{" < برگشت به صفحه قبل"}</Link>
                </div>
                <div className={'SingleItem__content'} >
                    <ItemCard />
                    <ItemDescription />
                </div>
            </Container>
        </div>
    )
}

export default SingleItem;