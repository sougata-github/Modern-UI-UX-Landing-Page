import { Feature } from "../../components";
import "./features.css";

const Features = () => {
  const featuresData = [
    {
      title: "Seamless Automation Beyond Imagination",
      text: "Unleash the power of GPT-3 to automate tasks and processes that once seemed unimaginable, streamlining your workflow like never before.",
    },
    {
      title: "Crafting Tomorrow's Conversations, Today",
      text: "Step into the future of communication with GPT-3, as it generates natural, contextually-rich dialogues that resonate and connect with your audience",
    },
    {
      title: "Innovation at Your Fingertips",
      text: "Experience firsthand the innovation GPT-3 brings, enabling you to create applications and solutions that redefine industry standards and open doors to new possibilities.",
    },
    {
      title: "Personalized Experiences Redefined",
      text: "Embrace the future of personalization through GPT-3, tailoring user experiences so precisely that each interaction feels like a one-of-a-kind journey.",
    },
  ];

  return (
    <section className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It.Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started.</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature key={index} title={item.title} text={item.text} />
        ))}
      </div>
    </section>
  );
};

export default Features;
