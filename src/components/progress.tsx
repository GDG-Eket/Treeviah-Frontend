import React from "react";

interface ProgressProps {
  percentage: number;
}

const Progress: React.FC<ProgressProps> = ({ percentage }) => {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg
      className="w-16 h-16"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="text-primary rounded-full stroke-current"
        cx="50"
        cy="50"
        r={radius}
        strokeWidth="10"
        fill="transparent"
        strokeDasharray={`${circumference} ${circumference}`}
        style={{ strokeDashoffset: offset }}
      />
      <text
        className="text-white font-bold text-xl text-center"
        x="50%"
        y="50%"
        dy=".3em"
      >
        {`${percentage.toFixed(0)}%`}
      </text>
    </svg>
  );
};

export default Progress;
