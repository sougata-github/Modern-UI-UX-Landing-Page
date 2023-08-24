import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="What is GPT-3"
        text="
        GPT-3, or Generative Pre-trained Transformer 3, 
        is a state-of-the-art language model developed by OpenAI. It can understand and generate human-like text, making it incredibly versatile for tasks like content creation, translation, and more."
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        The possibilities are beyond your imagination
      </h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Chatbots"
        text="Elevate user engagement with our GPT-3-powered chatbot, offering dynamic and human-like interactions."
      />
      <Feature
        title="Knowledgebase"
        text="Harness the intelligence of GPT-3 to build a comprehensive knowledgebase, enabling instant access to informative and well-structured content."
      />
      <Feature
        title="Education"
        text="Revolutionize learning using GPT-3, delivering personalized and interactive educational experiences that adapt to each learner's needs."
      />
    </div>
  </div>
);

export default WhatGPT3;
