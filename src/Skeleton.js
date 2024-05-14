import React from "react";
import { Link } from "react-router-dom";

export const Skeleton = ({ field, width, height }) => {
  const fieldComponents = {
    td: (
      <td className={`w-${width} h-${height}`}>
        <div className="animate-skeleton">&nbsp;</div>
      </td>
    ),
    ul: (
      <ul className="grid lg:grid-cols-2 lg:grid-rows-3 gap-10 w-full md:grid-cols-1 sm:grid-cols-1 sm:mb-10">
        <li className="flex justify-center align-center">
          <div className="rounded-md flex justify-center items-center lg:w-1/2 lg:h-40 bg-white md:w-[70vw] md:h-40 sm:w-[90vw] sm:h-[30vh]">
            <div className="h-full w-1/3 animate-skeleton">&nbsp;</div>
            <div className="flex flex-col w-2/3 px-2 py-1 h-full  gap-1">
              <div className="w-8 h-1/5 self-end">
                <div className="animate-skeleton">&nbsp;</div>
              </div>
              <h2 className="text-2xl font-bold animate-skeleton">&nbsp;</h2>
              <p className="animate-skeleton">&nbsp;</p>
              <div className="flex justify-between h-1/4">
                <button className="w-8 h-full">
                  <div className="animate-skeleton">&nbsp;</div>
                </button>
                <div
                  to="#"
                  className="w-24 h-full py-2 text-white rounded-md bg-green-500 text-center animate-skeleton"
                >
                  &nbsp;
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="flex justify-center align-center">
          <div className="rounded-md flex justify-center items-center lg:w-1/2 lg:h-40 bg-white md:w-[70vw] md:h-40 sm:w-[90vw] sm:h-[30vh]">
            <div className="h-full w-1/3 animate-skeleton">&nbsp;</div>
            <div className="flex flex-col w-2/3 px-2 py-1 h-full  gap-1">
              <div className="w-8 h-1/5 self-end">
                <div className="animate-skeleton">&nbsp;</div>
              </div>
              <h2 className="text-2xl font-bold animate-skeleton">&nbsp;</h2>
              <p className="animate-skeleton">&nbsp;</p>
              <div className="flex justify-between h-1/4">
                <button className="w-8 h-full">
                  <div className="animate-skeleton">&nbsp;</div>
                </button>
                <div
                  to="#"
                  className="w-24 h-full py-2 text-white rounded-md bg-green-500 text-center animate-skeleton"
                >
                  &nbsp;
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="flex justify-center align-center">
          <div className="rounded-md flex justify-center items-center lg:w-1/2 lg:h-40 bg-white md:w-[70vw] md:h-40 sm:w-[90vw] sm:h-[30vh]">
            <div className="h-full w-1/3 animate-skeleton">&nbsp;</div>
            <div className="flex flex-col w-2/3 px-2 py-1 h-full  gap-1">
              <div className="w-8 h-1/5 self-end">
                <div className="animate-skeleton">&nbsp;</div>
              </div>
              <h2 className="text-2xl font-bold animate-skeleton">&nbsp;</h2>
              <p className="animate-skeleton">&nbsp;</p>
              <div className="flex justify-between h-1/4">
                <button className="w-8 h-full">
                  <div className="animate-skeleton">&nbsp;</div>
                </button>
                <div
                  to="#"
                  className="w-24 h-full py-2 text-white rounded-md bg-green-500 text-center animate-skeleton"
                >
                  &nbsp;
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="flex justify-center align-center">
          <div className="rounded-md flex justify-center items-center lg:w-1/2 lg:h-40 bg-white md:w-[70vw] md:h-40 sm:w-[90vw] sm:h-[30vh]">
            <div className="h-full w-1/3 animate-skeleton">&nbsp;</div>
            <div className="flex flex-col w-2/3 px-2 py-1 h-full  gap-1">
              <div className="w-8 h-1/5 self-end">
                <div className="animate-skeleton">&nbsp;</div>
              </div>
              <h2 className="text-2xl font-bold animate-skeleton">&nbsp;</h2>
              <p className="animate-skeleton">&nbsp;</p>
              <div className="flex justify-between h-1/4">
                <button className="w-8 h-full">
                  <div className="animate-skeleton">&nbsp;</div>
                </button>
                <div
                  to="#"
                  className="w-24 h-full py-2 text-white rounded-md bg-green-500 text-center animate-skeleton"
                >
                  &nbsp;
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    ),
    "runda-div": (
      <div className="flex justify-center items-center flex-col gap-2">
        <h2 className={`text-4xl animate-skeleton w-${width}`}>&nbsp;</h2>
        <h2 className={`text-3xl animate-skeleton w-${width}`}>&nbsp;</h2>
        <div className="w-36 h-10 p-2 rounded-md mt-6 animate-skeleton">
          &nbsp;
        </div>
      </div>
    ),
    "question-div": (
      <div className="self-start mt-10 w-full h-90vh">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <h2
            className={`lg:text-3xl mb-10 md:text-md sm:text-sm text-xl animate-skeleton w-${width}`}
          >
            &nbsp;
          </h2>
          <ul className="flex justify-center items-center flex-col gap-5 mb-5 w-1/2">
            <li
              className={`self-start w-full px-2 py-2 text-l border-2 animate-skeleton`}
            >
              &nbsp;
            </li>
            <li
              className={`self-start w-full px-2 py-2 text-l border-2 animate-skeleton`}
            >
              &nbsp;
            </li>
            <li
              className={`self-start w-full px-2 py-2 text-l border-2 animate-skeleton`}
            >
              &nbsp;
            </li>
            <li
              className={`self-start w-full px-2 py-2 text-l border-2 animate-skeleton`}
            >
              &nbsp;
            </li>
          </ul>
          <div className="text-white w-36 h-10 p-2 rounded-md mt-6 animate-skeleton">
            &nbsp;
          </div>
          <div className="flex flex-col w-full justify-around items-center md:flex-row lg:flex-row xl:flex-row">
            <div className=" w-36 h-10 p-2 rounded-md mt-6 animate-skeleton">
              &nbsp;
            </div>
            <div className="text-white w-36 h-10 p-2 rounded-md mt-6 animate-skeleton">
              &nbsp;
            </div>
          </div>
        </div>
      </div>
    ),
  };

  return fieldComponents[field];
};
