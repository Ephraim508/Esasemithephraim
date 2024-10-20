
import './Header.css'
import { AiOutlineUser } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
const Header=()=>{
    return(
        <div className="header-section">
            <div className="part-1">
               <p className='free-shopping'>Free Shipping on orders above 999/-</p>
               <p>Call us on: +91 9876805120</p>
            </div>
            <div className='part-2'>
                <div className='logo'>
                    <img src="https://res.cloudinary.com/day1peihn/image/upload/v1729314647/logo_ioq5kx.png" alt='logo'/>
                    <h1>Chaperone</h1>
                </div>
                <ul className='lists'>
                    <li>Home</li>
                    <li className='plantspots'>Plants & Pots</li>
                    <li>Tools</li>
                    <li>Our Services</li>
                    <li>Blog</li>
                    <li>Our Story</li>
                    <li>FAQ</li>
                </ul>

               <div className='profile-cart'>
               <div className='profile'>
                <AiOutlineUser className='prof-icon' />
                <p>My Profile</p>
                </div>

                <div className='cart'>
                <BsCart2  className='cart-icon'/>
                <p>Cart</p>
                </div>
               </div>

            </div>

            <div className='search-bar'>

                   <img src="https://res.cloudinary.com/day1peihn/image/upload/v1729314739/search_t30foe.png" className='search-icon' alt='search'/>
                   <input type='text' placeholder='Search' className='input'/>
                   <img src='https://res.cloudinary.com/day1peihn/image/upload/v1729314739/leaf_nerijd.png' className='search-bar-logo' alt='search-logo'/>

            </div>
        </div>
    )
}

export default Header