import React from "react";

export const Round = ({
  roundName,
  roundNumber,
  changeToQuestion,
  increaseRound,
}) => {
  const handleClick = () => {
    changeToQuestion(false);
    increaseRound();
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h2 className="text-4xl">{`Runda ${roundNumber + 1}`}</h2>
      <h2 className="text-3xl">{roundName}</h2>
      <button
        className="bg-[#e1bf57] w-36 h-10 p-2 rounded-md mt-6"
        onClick={handleClick}
      >
        Pokreni
      </button>
    </div>
  );
};
