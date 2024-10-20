import React from 'react';
import { GoHeart } from "react-icons/go";
import { usePlants } from '../PlantsContext/PlantContext';// Adjust the import path as needed
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory
import "./Plants.css";

const Plants = () => {
  const plantDataList = usePlants(); // Get the plant data from the context
  const itemsPerPage = 8; // Number of items to display per page
  
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const navigate = useNavigate(); 

  // Calculate the index of the first and last item to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
  // Get the current items to display
  const currentItems = plantDataList.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(plantDataList.length / itemsPerPage);

  // Function to change the page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleViewProduct = (plant) => {
    navigate('/thank-you', { state: { product: plant } });
  };
  const handleAddToCart = (plant) => {
    const confirmMessage = "Do you want to add this plant to your cart?";
    if (window.confirm(confirmMessage)) {
      // If the user confirms, navigate to the AddToCart page
      navigate('/add-to-cart', { state: { product: plant } });
    }
  };
  return (
    <div className="plant-container">
      <div className="plant-sec1">
        <div className="buttons">
          <button className="plant">Plants</button>
          <button className="pots">Pots</button>
        </div>
        <p>
          Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
          necessitatibus enim ut internos accusantium a numquam autem ab rerum
          omnis. Non molestiae ratione et laborum doloribus aut molestiae
          voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae
          est voluptatem eius. Et architecto nihil id labore omnis hic iste
          deleniti et porro aspernatur. excepturi sit molestiae obcaecati qui
          quis beatae est voluptatem eius. Et architecto nihil id labore omnis
          hic iste deleniti et porro aspernatur.
        </p>
      </div>

      <div className="plant-sec2">
        <h1>Nursery</h1>

        <div className="plants-images">
          <div className="desc">
            <img
              src="https://res.cloudinary.com/day1peihn/image/upload/v1729355667/plant4_oosecb.png"
              alt="plant"
            />
            <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum</p>
          </div>

          <div className="desc">
            <img
              src="https://res.cloudinary.com/day1peihn/image/upload/v1729355666/plant1_zzf1c5.png"
              alt="plant"
            />
            <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum</p>
          </div>

          <div className="desc">
            <img
              src="https://res.cloudinary.com/day1peihn/image/upload/v1729355666/plant2_m1icik.png"
              alt="plant"
            />
            <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum</p>
          </div>

          <div className="desc">
            <img
              src="https://res.cloudinary.com/day1peihn/image/upload/v1729355666/plant3_mcznjk.png"
              alt="plant"
            />
            <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum</p>
          </div>

          <div className="desc">
            <img
              src="https://res.cloudinary.com/day1peihn/image/upload/v1729355666/plant5_bnd3kc.png"
              alt="plant"
            />
            <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum</p>
          </div>

          <div className="desc">
            <img
              src="https://res.cloudinary.com/day1peihn/image/upload/v1729355667/plant4_oosecb.png"
              alt="plant"
            />
            <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum</p>
          </div>
        </div>
      </div>

      <div className="plants-section3">
        <div className="left">
          <div className="left-desc">
            <p>Filter</p>
            <p>CLEAR ALL</p>
          </div>
          <hr />
          <div className="left-desc">
            <p>Types of plants</p>
            <p>+</p>
          </div>
          <hr />
          <div className="left-desc">
            <p>Price</p>
            <p>+</p>
          </div>
          <hr />
          <div className="left-desc">
            <p>Nursery</p>
            <p>+</p>
          </div>
          <hr />
          <div className="left-desc">
            <p>Ideal Plants Location</p>
            <p>+</p>
          </div>
          <hr />
          <div className="left-desc">
            <p>Indoor/Outdoor</p>
            <p>+</p>
          </div>
          <hr />
          <div className="left-desc">
            <p>Maintenance</p>
            <p>+</p>
          </div>
          <hr />
          <div className="left-desc">
            <p>Plant size</p>
            <p>+</p>
          </div>
          <hr />
          <div className="left-desc">
            <p>Water Schedule</p>
            <p>+</p>
          </div>
          <hr />
          <div className="left-desc">
            <p>Color</p>
            <p>+</p>
          </div>
          <hr />
          <div className="left-desc">
            <p>Seasonal</p>
            <p>+</p>
          </div>
          <hr />
          <div className="left-desc">
            <p>Light Efficient</p>
            <p>+</p>
          </div>
        </div>

        <div className="right">
        <div className="right-sec1"></div>
      <div className='rightsec-pagination'>
      <div className="right-sec2">
          {currentItems.map((plant, index) => (
            <div key={index}>
              <div className="plant-image">
                <div className="wishlist">
                  <GoHeart className="wishlist-icon" />
                </div>
                <img src={plant.img} alt="plant" />
                <button className="view-product" onClick={() => handleViewProduct(plant)}>View Product</button>
              </div>
              <div className="plants-image-desc">
                <h1>{plant.plantName}</h1>
                <p>{plant.description}</p>
                <div className="rating-div">
                  <img
                    src="https://res.cloudinary.com/day1peihn/image/upload/v1729359063/star_ttykry.png"
                    alt="rating"
                  />
                  <p>{plant.rating}</p>
                </div>
                <div className="price">
                  <p className="old-price">{plant.price.oldPrice}</p>
                  <p className="new-price">{plant.price.newPrice}</p>
                </div>
                <div className="buttons-add">
                  <button className="add-to-cart" onClick={() => handleAddToCart(plant)}>- Add to cart +</button>
                  <button className="buy-rent">Buy or Rent</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
                
              >
                {index + 1}
              </button>
            ))}
          </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Plants;
