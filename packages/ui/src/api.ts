import { useEffect, useState } from "react";
import { getQuoteApi } from "../../../apps/web/app/api/quote";

export interface quoteType {
  _id: string;
  content: string;
  author: string;
  tags: string[];
  authorSlug: string;
}

export const getQuote = () => {
  const [quote, setQuote] = useState<quoteType>();
  useEffect(() => {
    (async () => {
      const result = await getQuoteApi();
      setQuote(result);
    })();
  }, []);
  return { quote };
};
