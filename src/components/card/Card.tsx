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
      className="card_container_wrapper center w-[95%] h-[280px] md:w-3/5 pb-1 lg:w-4/12 select-none text-center mx-auto rounded
      flex-col"
    >
      <div
        className={`card_container relative cursor-pointer rounded-lg px-4 w-full h-full ${
          quote === undefined
            ? 'bg-transparent'
            : 'bg-primary flip text-white drop-shadow-md'
        }`}
      >
        {quote === undefined ? (
          <div className="bg-primary center w-full h-full text-white overflow-hidden text-lg font-bold tracking-wider rounded-lg relative">
            Click Me To Search Quote
          </div>
        ) : (
             <p className="h-full center text-justify tracking-wide">       
            <span className="italic text-[1.2rem]">
            <span className="text-2xl not-italic justify-self-start text-blue-400 mx-1 inline-block">
              ❝
            </span>
            {showQuote}
            <span className="text-2xl not-italic  text-blue-400 mx-1 inline-block">❞</span>
            </span>
          </p>   
      )}
       
      </div>
    </main>
  );
};

export default Card;
