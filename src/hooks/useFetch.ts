import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { IQuotes } from "../types";
import { toast } from "react-toastify";

export const useFetch = () => {
  const [previousQuotes, setPreviousQuotes] = useState<IQuotes[]>([]);
  const [showQuote, setShowQuote] = useState<IQuotes>();
  const [quoteSearchLoading, setQuoteSearchLoading] = useState<boolean>(false);
  const [clickable, setClickable] = useState<boolean>(true);

  const getRandomQuoteFromPrevious = () => {
    const randNum = Math.floor(Math.random() * previousQuotes.length);
    setShowQuote(previousQuotes[randNum]);
  };

  //search the quote by key word
  const fetchQuoteByText = async (searchKey: string) => {
    setQuoteSearchLoading(true);
    try {
      const data = await axios
        .get(`https://api.adviceslip.com/advice/search/${searchKey}`)
        .then((resp) => {
          // the resp will be no data or 1 or more
          if (resp.data.total_results) {
            const quote = resp.data.slips.slice(-1);

            return quote[0];
          } else {
            toast.error("No Quote available with your key words", {
              position: "bottom-center",
              autoClose: 2000,
            });
            return null;
          }
        });
      if (data !== null) {
        setShowQuote(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setQuoteSearchLoading(false);
    }
  };

  const fetchQuote = async () => {
    const controller = new AbortController();
    const data = await axios
      .get("https://api.adviceslip.com/advice", {
        signal: controller.signal,
      })
      .then((resp) => resp);

    controller.abort();
    return data;
  };

  const {
    data: quote,
    isLoading,
    isError,
    isFetching,
    refetch,
  } = useQuery(["posts"], fetchQuote, {
    enabled: false,
    staleTime: 1000,
    select: ({ data }) => {
      const { advice, date } = data.slip;
      return { advice, date };
    },
  });

  // to prevent simutaneous click the btn
  useEffect(() => {
    setClickable(false);
    setTimeout(() => {
      setClickable(true);
    }, 1000);
  }, [quote]);

  useEffect(() => {
    setShowQuote(quote);
  }, [isLoading, quote]);

  // if the showing quote are the same to the previous onem, it will not added to the previous quote
  useMemo(() => {
    const quoteExist = previousQuotes.find(
      (q) =>
        q.advice.trim().toLowerCase() === showQuote?.advice.trim().toLowerCase()
    );

    if (!quoteExist) {
      if (showQuote && showQuote !== undefined) {
        //   console.log(showQuote.trim().toLowerCase());
        setPreviousQuotes((prev) => [...prev, showQuote]);
      }
    }
  }, [showQuote]);

  return {
    showQuote,
    isFetching,
    isLoading,
    isError,
    quoteSearchLoading,
    clickable,
    refetch,
    getRandomQuoteFromPrevious,
    fetchQuoteByText,
  };
};
