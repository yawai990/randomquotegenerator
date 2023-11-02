import React from "react";

const CTABtn = ({
  btnLabel,
  clickDisable,
  click,
}: {
  btnLabel: string;
  clickDisable: boolean;
  click: () => void;
}) => {
  return (
    <button disabled={!clickDisable} onClick={click}>
      {btnLabel}
    </button>
  );
};

export default CTABtn;
