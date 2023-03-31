import React from "react";

const Button = ({ onClick }) => {
  return (
    <div>
      <button className="Button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default Button;
