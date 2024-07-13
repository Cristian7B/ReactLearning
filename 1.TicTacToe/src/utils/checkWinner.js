import { WINNER_COMBOS } from "../constanst";

export const checkWinner = (boardToReview) => {
    for(const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToReview[a] &&
        boardToReview[a] === boardToReview[b] &&
        boardToReview[a] === boardToReview[c]
      )
      {
        return boardToReview[a]
      }
    }
    return boardToReview.every(square => square !== null) ? false : null;

}