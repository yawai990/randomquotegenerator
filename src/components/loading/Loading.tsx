import Lottie from 'lottie-react';
import loadingData from '../../constants/lotties/loading.json';

const Loading = () => {
  return (
    <div className="absolute z-50 top-0 w-screen h-screen flex justify-center items-center bg-overlay">
      <div className="w-fit max-w-[260px] h-[220px] bg-white drop-shadow-md rounded-md flex flex-col justify-center items-center">
        <Lottie
          width={180}
          height={180}
          animationData={loadingData}
          loop={true}
        />
        <p className="text-sm w-full text-center italic mt-4">
          Generating Quote...
        </p>
      </div>
    </div>
  );
};

export default Loading;
