import { useState } from "react";
import CreateQuiz_Initial from "./CreateQuiz_Initial";
import CreateQuiz_Questions from "./CreateQuiz_Questions";
import CreateQuiz_Rounds from "./CreateQuiz_Rounds";

function CreateQuiz() {
  const [page, setPage] = useState(1);

  const handleClick = () => {
    if (page <= 2) {
      setPage(page + 1);
    }
  };

  const handleBack = () => {
    if (page >= 1) {
      setPage(page - 1);
    }
  };

  return (
    <div
      id="create-quiz-content"
      className="flex justify-center items-center h-[115vh] sm:h-[90vh] md:h-full w-screen md:w-[88vw] lg:w-[84vw] absolute right-0 z-0"
    >
      <div className="component-content h-full w-full">
        {page === 1 && <CreateQuiz_Initial />}
        {page === 2 && <CreateQuiz_Rounds />}
        {page === 3 && <CreateQuiz_Questions />}
      </div>
      <div className="buttons">
        {page === 2 || page === 3 ? (
          <button onClick={handleBack}>Nazad</button>
        ) : (
          ""
        )}
        {page === 2 && <button>Dodaj runde</button>}
        {page === 3 && (
          <>
            <button>Odbaci kviz</button>
            <button>Spremi kviz</button>
          </>
        )}
        {page === 1 || page === 2 ? (
          <button onClick={handleClick}>Dalje</button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default CreateQuiz;
