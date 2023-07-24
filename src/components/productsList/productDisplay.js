import { Link } from "react-router-dom";
import Classes from './productDisplay.module.css'
import { Fragment } from "react";

const ProductDisplay = ({name,image,id,description})=>{
    return(
        <Fragment>
        <div className={Classes.itemPack}>
            <img className={Classes.itemImg}  src={image}></img>
            <h3 className={Classes.itemName} >Name:  {name}</h3>
            <h3 className={Classes.itemDescription}>description:  {description}</h3>
            <Link className={Classes.itemLink} to={'/products/'+id}>More Information</Link>
        </div>
        
        </Fragment>

    )
}
export default ProductDisplay;