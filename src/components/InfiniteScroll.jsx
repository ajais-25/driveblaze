import React from "react";
import razorpay from "../assets/razorpay.png";
import startInUp from "../assets/startInUp.png";
import vishalakshi from "../assets/vishalakshi.png";
import wadhwani from "../assets/wadhwani.png";
import microsoft from "../assets/microsoft.png";
import startUpIndia from "../assets/startUpIndia.png";

const InfiniteScroll = () => {
  return (
    <div className="w-full flex justify-around items-center">
      <div className="font-semibold text-gray-500">
        Industry veterans
        <br />
        <span className="font-semibold text-blue-900">believe in us</span>
      </div>
      <div>
        <img src={razorpay} alt="razorpay" />
      </div>
      <div>
        <img src={startInUp} alt="razorpay" />
      </div>
      <div>
        <img src={vishalakshi} alt="razorpay" />
      </div>
      <div>
        <img src={wadhwani} alt="razorpay" />
      </div>
      <div>
        <img src={microsoft} alt="razorpay" />
      </div>
      <div>
        <img src={startUpIndia} alt="razorpay" />
      </div>
    </div>
  );
};

export default InfiniteScroll;
