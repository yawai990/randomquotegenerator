import { useEffect, useMemo, useState } from 'react';
import { ICardDTO } from '../../types';
import './card.style.css';

const Card = ({ quote, getQuote }: ICardDTO) => {
  const [showQuote, setShowQuote] = useState<string>();

  useEffect(() => setShowQuote(quote?.advice), []);
  useMemo(() => {
    const cardContainer = document.querySelector('.card_container');

    cardContainer?.classList.add('flip');

    cardContainer?.addEventListener('animationend', () => {
      cardContainer?.classList.remove('flip');
      setShowQuote(quote?.advice);
    });
  }, [quote]);
  return (
    <main
      onClick={getQuote}
      className="card_container_wrapper center w-[95%] h-[280px] md:w-3/5 pb-1 lg:w-4/12 select-none text-center mx-auto mt-5 rounded
      cursor-pointer flex-col"
    >
      <div
        className={`card_container relative w-[80%] rounded min-h-[70%] p-4 ${
          quote === undefined
            ? 'bg-transparent'
            : 'bg-white flip border text-black drop-shadow-md'
        }`}
      >
        {quote === undefined ? (
          <div className="search_card w-full h-full bg-white center text-black border overflow-hidden text-lg font-bold tracking-wider rounded-lg relative">
            Click Me To Search Quote
          </div>
        ) : (
          <p className="w-[80%] mx-auto text-justify tracking-wide">
            <span className="h-full text-2xl text-blue-400 mx-1 inline-block">
              ❝
            </span>
            <span className="italic text-[1.2rem]">{showQuote}</span>
            <span className="text-2xl text-blue-400 mx-1 inline-block">❞</span>
          </p>
        )}
        <p className="w-full text-end pr-5 text-sm italic mt-2 text-gray-600">
          {quote?.date}
        </p>
      </div>
    </main>
  );
};

export default Card;
