import possibilityImage from "../../assets/assets/possibility.png";
import "./possibility.css";

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">
        The possibilities are <br /> beyond your imagination
      </h1>
      <p>
        The possibilities that lie ahead are truly beyond the scope of
        imagination. With the advancements in technology, particularly the
        remarkable capabilities of GPT-3, we are at the cusp of a new era where
        innovation knows no bounds. From crafting intricate narratives to
        solving complex problems, from revolutionizing customer interactions to
        reshaping industries, the potential is vast and inspiring. It's time to
        embrace these limitless possibilities and embark on a journey of
        discovery, creativity, and transformation.
      </p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;
