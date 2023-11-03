import Lottie from 'lottie-react';
import error from '../../constants/lotties/error.json';

const ErrorCom = () => {
  return (
    <main className="w-full h-screen flex justify-center items-center flex-col">
      <p>Oop!!!Something went wrong. Please remind the developer</p>
      <div className="w-[400px] h-[400px] flex justify-center items-center">
        <Lottie animationData={error} loop={true} />
      </div>
    </main>
  );
};

export default ErrorCom;
