import React from "react";
import { IQuotes } from "../../types";

interface ICardDTO {
  quote: IQuotes | undefined;
  clickDisable: boolean;
  getQuote: () => void;
}

const Card = ({ quote, getQuote, clickDisable }: ICardDTO) => {
  return (
    <div
      onClick={getQuote}
      className={`w-2/5 select-none min-h-[140px] border mx-auto mt-5 rounded glass flex justify-center items-center 
      ${!clickDisable ? "cursor-pointer" : "cursor-no-drop"}`}
    >
      {quote === undefined ? "Click Me To Search Quote" : quote.advice}
    </div>
  );
};

export default Card;
