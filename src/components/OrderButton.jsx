import React from "react";

const OrderButton = ({ name }) => {
  return (
    <button class="mx-4 font-NotoKo text-gray-500 hover:text-main-blue">
      {name}
    </button>
  );
};

export default OrderButton;
