import HeroImage from "../../../assets/food/food2.jpg";
export default function Heading() {
  return (
    <header className="reserve-table">
      <img
        className="header-reserve"
        src={HeroImage}
        alt="Little Lemon Ingredients"
      ></img>
      <div className="reserve-header-text">
        <h1>About us</h1>
      </div>
    </header>
  );
}