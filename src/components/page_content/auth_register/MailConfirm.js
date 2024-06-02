import React, { useState } from "react";
import { confirmMail, getMyProfile } from "../../../services/api_user";

export const MailConfirm = () => {
  const handleClick = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const emailToken = localStorage.getItem("emailToken");
      const resp = await confirmMail(userId, emailToken);
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-[50vh] gap-20">
      <h2>Dobro došli u Quizko</h2>
      <button
        onClick={handleClick}
        className="bg-[#E1BF57] w-1/2 h-[5vh] sm:w-[50vw] h-10vh md:w-[]"
      >
        Potvrdi svoj mail
      </button>
    </div>
  );
};
