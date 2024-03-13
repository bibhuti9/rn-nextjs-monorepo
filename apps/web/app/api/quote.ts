import { quoteType } from "@repo/ui/src/apis";

export const getQuoteApi = (): Promise<quoteType> => {
  return new Promise((resolve, _) => {
    fetch("https://api.quotable.io/random?tags=technology,famous-quotes")
      .then((res) => res.json())
      .then((result) => resolve(result));
  });
};
