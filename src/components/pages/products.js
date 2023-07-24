import { Fragment } from "react";
import phone from '../../assets/phone.jpg'
import laptop from '../../assets/laptop.webp'
import monitor from '../../assets/monitor.webp'
import ProductsList from "../productsList/productsList";

const Products = ()=>{
    
        const DummyData = [
            {
                name:'Phone',
                image:phone,
                description:'A brand new phone',
                id:'p1'
            },
            {
                name:'LapTop',
                image:laptop,
                description:'A brand new laptop for you',
                id:'p2'
            },
            {
                name:'monitor',
                image:monitor,
                description:'A brand new monitor',
                id:'p3'
            }
        ];
    
    return(
        <div>
            <ProductsList DummyData={DummyData}></ProductsList>
        </div>
    )
};
export default Products;