import "./header.css";
import people from "../../assets/assets/people.png";
import ai from "../../assets/assets/ai.png";

const Header = () => {
  return (
    <section className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          GPT-3 by OpenAI offers exciting potential for creating extraordinary
          web applications. Its advanced language capabilities empower
          developers to redefine user experiences and shape the future of web
          development in remarkable ways.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 requested access a visit in 24 hours.</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </section>
  );
};

export default Header;
