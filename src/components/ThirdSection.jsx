import React from "react";
import thirdSection from "../assets/thirdSection.png";

const listItems = [
  "1. Monotony: Repetitive and unengaging study methods can lead to boredom.",
  "2. Passive Learning: Methods like rote monetization often lead to shallow learning.",
  "3. Limited Interaction: Studying alone can limit discussion and different perspectives.",
  "4. Time Management: It can be difficult to manage study time with other responsibilities.",
  "5. Lack of Resources: Sometimes traditional methods do not provide enough variety in materials and perspective.",
];

const ThirdSection = () => {
  return (
    <div className="h-screen  flex justify-around px-24">
      <div className="w-1/2 overflow-hidden ml-4">
        <img className="object-contain" src={thirdSection} alt="" />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div className="font-bold w-1/2 text-4xl text-blue-900 text-center">
          Traditional Ways of Studying,
          <span className="text-blue-600">Quite</span>
          <br />
          <span className="text-blue-600">Frustrating</span>
        </div>
        <div className="mt-10 px-32 text-xl">
          <div className="mb-2">Challenges of Traditional Studying</div>
          <ol>
            {listItems.map((item) => (
              <li>{item}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
