import React, { useEffect } from "react";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";
import { useStateValue } from "../StateProvider";
import "./Checkout.css";
import AOS from "aos";
import "aos/dist/aos.css";
function Checkout() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div data-aos='flip-left' data-aos-delay='100' data-aos-anchor='.example-selector' className='checkout'>
            <div className='checkout__left'>
                <img
                    className='checkout__ad'
                    src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
                    alt=''
                />
                <div>
                    <h2 className='checkout__title'>Your Shopping Basket</h2>
                    {basket.map((item) => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className='checkout__right'>
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;
