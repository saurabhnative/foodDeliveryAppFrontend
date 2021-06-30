// import foodItems from "./foodItems.json";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
export function FoodItems({ foodItems, setFoodItems }) {
  useEffect(() => {
    function fetchFoodItems() {
      axios
        .get(`${process.env.REACT_APP_SERVER_URL}/delivery/getAllItems`)
        .then(function (response) {
          // handle success
          setFoodItems(response.data.results);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
    fetchFoodItems();
  }, [setFoodItems]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  const foodItemsObject = foodItems.map((foodItem) => {
    return (
      <div className="mb-4" key={foodItem.name}>
        <Link to={`/foodSubItem/${foodItem.name}`} key={foodItem.name}>
          <div className="d-flex flex-column mx-4 food-item-container">
            <div>
              <img
                src={foodItem.image}
                width={200}
                className="food-item-image"
                alt="food item"
              />
            </div>
            <div className="text-dark mt-2 font-weight-bold">
              {foodItem.name}
            </div>
          </div>
        </Link>
      </div>
    );
  });
  function renderSlider() {
    return (
      <Slider {...settings}>
        <div className="carousel-item d-flex">
          <div className="title-container d-flex align-items-center justify-content-center">
            <h1 className="text-dark title-text">50% Off First Item</h1>
          </div>
          <div className="img-container">
            <img
              src="https://res.cloudinary.com/dk22rcdch/image/upload/v1624941496/Hackathonmedia/cupcake_o6fvkj.png"
              alt="first carousal"
              height="200px"
              className="ml-auto"
            />
          </div>
        </div>
        <div className="carousel-item d-flex">
          <div className="title-container d-flex align-items-center justify-content-center">
            <h1 className="text-dark title-text">30% Off Second Item</h1>
          </div>
          <div className="img-container">
            <img
              src="https://res.cloudinary.com/dk22rcdch/image/upload/v1624941496/Hackathonmedia/cupcake_o6fvkj.png"
              alt="first carousal"
              height="200px"
              className="ml-auto"
            />
          </div>
        </div>
      </Slider>
    );
  }
  return (
    <div className="d-flex align-items-center flex-column mt-4">
      <div className="carousel-container">{renderSlider()}</div>
      <div className="d-flex mt-5 justify-content-center align-items-center row">
        {foodItemsObject}
      </div>
    </div>
  );
}
