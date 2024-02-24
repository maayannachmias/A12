import { useEffect } from "react";

const useDescriptionTitle = (description: string, title: string): void => {
  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]')!;
    metaDescription.setAttribute("content", description);

    const titleElement = document.querySelector("title")!;
<<<<<<< HEAD
    titleElement.innerText = "TicTacTask | " + title;
=======
    titleElement.innerText = "Tic-Tac Task | " + title;
>>>>>>> 6121bd2978936fe6d9fc8ecdfc054434f4bb2d43
  }, [description, title]);
};

export default useDescriptionTitle;
