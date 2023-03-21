import { FC } from "react";

export const HiCard: FC = () => {
  return (
    <div className="flex-col space-y-8 w-80 p-8 bg-white rounded-3xl shadow-2xl">
      <p className="text-4xl font-bold">Hi 👋</p>
      <div className="space-y-4">
        <p>Welcome to my portfolio.</p>
        <p>Feel free to check my projects & contact info down below.</p>
      </div>
    </div>
  );
};
