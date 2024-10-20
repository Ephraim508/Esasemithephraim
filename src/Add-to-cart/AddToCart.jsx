import { useNavigate } from 'react-router-dom';
import './AddToCart'
import './AddToCart.css'
const AddToCart=()=>{
    const navigate = useNavigate(); // Initialize useNavigate

    const handleContinueShopping = () => {
        navigate('/'); // Redirect to the Plants page
    };

    return(
        <div className='addtocart'>
             <div>
                <p className='yourcart'>Your Cart</p>
             </div>
             <hr/>
             <h1 className='wishMsg'>Congratulations Order Placed!</h1>
             <div>
                <img src="https://res.cloudinary.com/day1peihn/image/upload/v1729432559/14d6293522911d4a2548b9b1cf65a33a_onq6rk.png" alt='plant' className='pot'/>
             </div>
             <p className='conclusion'>Thank you for choosing Chaperone services.<br/>
             We will soon get in touch with you!</p>
             <button className='continue'  onClick={handleContinueShopping}>cotinue shopping</button>
        </div>
    )
}

export default AddToCart