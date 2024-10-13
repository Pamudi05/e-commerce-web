import "./category.css";

function Category() {
  return (
    <div className="category">
      <div>
        <div className="title">
          <div className="box"></div>
          <p>Categories</p>
        </div>
        <h3>Browse By Category</h3>
        <div className="category-items">
          <div>
            <img src="/assets/Category-CellPhone.png" alt="Phone" />
            <h5>Phones</h5>
          </div>
          <div>
            <img src="/assets/Category-Computer.png" alt="computer" />
            <h5>Computers</h5>
          </div>
          <div>
            <img src="/assets/Category-SmartWatch.png" alt="smartWatch" />
            <h5>Smart Watch</h5>
          </div>
          <div>
            <img src="/assets/Category-Camera.png" alt="camera" />
            <h5>Camera</h5>
          </div>
          <div>
            <img src="/assets/Category-Headphone.png" alt="headPhone" />
            <h5>Head Phone</h5>
          </div>
          <div>
            <img src="/assets/Category-GamePad.png" alt="gamePad" />
            <h5>Game Pad</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
