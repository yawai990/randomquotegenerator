import { MouseParallax } from 'react-just-parallax';
import { IQuotes } from '../../types';

const ParallaxCard = ({quotes}:{quotes:IQuotes[]}) => {

  const parallaxCard = "w-[320px] h-[200px] bg-primary-200";

  const getStyles = (idx:number) =>{
    switch (idx) {
      case 1:
        return 'self-end justify-self-end';
        break;
      case 2:
        return 'self-center justify-self-end translate-x-[10rem]';
        break;
      case 3:
        return 'translate-x-[10rem] translate-y-20 justify-self-end';
        break;
      default:
        return 'translate-y-[3rem]'
        break;
    }
  }

  if(!quotes.length) return null;
  return (
      <MouseParallax strength={0.10}>
        <section className='w-screen h-screen flex'>
          {
            quotes.map((d,idx)=>(
              <div key={d.id} 
              className={`
              ${parallaxCard} ${getStyles(idx)} drop-shadow-lg center scale_up`
            }
              >
              <p className="w-10/12 mx-auto text-slate-300">
              <span className="italic text-[1.2rem]">
            <span className="text-2xl not-italic justify-self-start text-blue-400 mx-1 inline-block">
              ❝
            </span>
            {d.advice}
            <span className="text-2xl not-italic  text-blue-400 mx-1 inline-block">❞</span>
            </span>
              </p>
            </div>
            ))
          }
        </section>
      </MouseParallax>
  )
}

export default ParallaxCard