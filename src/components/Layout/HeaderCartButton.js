import { useContext, useState, useEffect } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/CartContext';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    const cartCtx  = useContext(CartContext);

    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0); 

    const btnClass = `${classes.button} ${btnIsHighlighted ? classes.bump : '' }`; // for Cart button animation
    
    useEffect(() => {
        if(items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);
        
        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [items]);


    return (
        <>
        <button className={btnClass} onClick={props.onClick}>
            <div className={classes.icon}>
                <CartIcon />
            </div>
            <div>
                YOUR CART
            </div>
            <div className={classes.badge}>{numberOfCartItems}</div>
        </button>
        </>
    );    
}

export default HeaderCartButton;