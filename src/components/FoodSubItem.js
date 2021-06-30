export function FoodSubItems(props) {
  const foodItemsObject = props.foodItems.find((item) => {
    return item.name === props.locationProps.match.params.foodCategory;
  });
  const foodItemsData = foodItemsObject.subItemsData.subItems.map((subItem) => {
    return (
      <div key={subItem.name}>
        <div className="d-flex justify-content-center">
          <div className="d-flex align-items-center">
            <img
              src={subItem.image}
              width={200}
              className="item-image"
              alt="food item"
            ></img>
          </div>
          <div className="d-flex justify-content-center w-50">
            <div className="subitem-details text-left w-75">
              <div className="h5">{subItem.name}</div>
              <div>₹{subItem.price}</div>
              <div className="text-secondary">{subItem.description}</div>
              <div
                className="btn btn-primary site-bg-primary font-weight-bold mt-3"
                onClick={() => props.handleAddToCart(subItem)}
              >
                Order Now
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
      </div>
    );
  });
  return (
    <div>
      <div className="h3 mt-1">{foodItemsData && foodItemsData.name}</div>
      <hr></hr>
      <div>{foodItemsData}</div>
    </div>
  );
}
