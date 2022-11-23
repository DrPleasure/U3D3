import { useState } from "react";

const ToggleOnClick = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current);
  };

  return (
    <div>
      <button className={isActive ? "bg-salmon" : ""} onClick={handleClick}>
        Click
      </button>
    </div>
  );
};

export default ToggleOnClick;
