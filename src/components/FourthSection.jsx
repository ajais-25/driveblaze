import React from "react";
import fourthSection from "../assets/fourthSection.png";

const listItems = [
  "Reduced Stress: The focus on ejoyable and engaging methods helps reduce the stress commonly associated with traditional studying.",
  "Enhanced Engagement: Interactive and varied content keeps learners interested and motivated.",
  "Better Retention: Active learning stratagies improve retention and understanding of material.",
  "Community Support: Virtual study groups and forums provide a sense of community and support",
  "Adaptability: The ability to learn at one's own pace and adapt the learning process to personal preferences.",
];

const FourthSection = () => {
  return (
    <div className="h-screen flex justify-around mt-32 px-24">
      <div className="w-1/2 px-16 flex flex-col justify-center">
        <div className="font-bold text-4xl text-blue-900">
          Discover New Online Stress-free learning Solutions with ORION
        </div>
        <div className="mt-10 text-xl">
          <div className="mb-2">Benefits of Hyggex Learning Solutions</div>
          <div>
            {listItems.map((item) => (
              <li>{item}</li>
            ))}
          </div>
        </div>
      </div>
      <div className="w-1/2 overflow-hidden ml-4">
        <img className="object-contain" src={fourthSection} alt="" />
      </div>
    </div>
  );
};

export default FourthSection;
