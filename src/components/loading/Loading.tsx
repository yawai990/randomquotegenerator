import Lottie from "lottie-react";
import loadingData from "../../constants/lotties/loading.json";

const Loading = () => {
  return (
    <div className="absolute top-0 w-screen h-screen flex justify-center items-center bg-overlay">
      <div className="w-[220px] h-[220px] bg-white drop-shadow-md rounded-md flex justify-center items-center">
        <Lottie
          width={180}
          height={180}
          animationData={loadingData}
          loop={true}
        />
      </div>
    </div>
  );
};

export default Loading;
