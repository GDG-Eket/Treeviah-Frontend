import React from "react";
import { useLottie } from "lottie-react";

interface LottieProps {
  lottie: any;
}
const Lottie: React.FC<LottieProps> = ({ lottie }) => {
  const options = {
    animationData: lottie,
    loop: true,
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default Lottie;
