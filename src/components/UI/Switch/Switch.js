import React, { useState } from "react";

import classes from "./Switch.module.scss";

const Switch = ({ toggle }) => {
  const [switchOn, setSwitchOn] = useState(false);

  const switchToggleHandler = () => {
    console.log("test");
    setSwitchOn((p) => !p);
    toggle();
  };

  const switchOnClass = switchOn ? classes.on : "";

  return (
    <div
      className={`${classes.switch} ${switchOnClass}`}
      onClick={switchToggleHandler}
    >
      <div className={classes.switch__thumb} />
    </div>
  );
};

export default Switch;
