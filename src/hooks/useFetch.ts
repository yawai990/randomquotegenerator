import { useCallback, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { IQuotes } from '../types';
import { toast } from 'react-toastify';
import localforage from 'localforage';
import { APP_KEY } from '../constants/keys';

export const useFetch = () => {
  const watingTime = 1000;
  const [previousQuotes, setPreviousQuotes] = useState<IQuotes[]>([]);
  const [showQuote, setShowQuote] = useState<IQuotes>();
  const [quoteSearchLoading, setQuoteSearchLoading] = useState<boolean>(false);

  //get the previous quote from storage in
  useEffect(() => {
    (async () => {
      const preQuotes = await localforage.getItem(APP_KEY);
      if (Array.isArray(preQuotes)) {
        setPreviousQuotes(preQuotes);
      }
    })();
  }, []);

  useMemo(() => {
    //save to the localstorage
    localforage.setItem(APP_KEY, previousQuotes);
  }, [previousQuotes]);

  const getRandomQuoteFromPrevious = () => {
    if (!previousQuotes.length) {
      toast.error('NO PREVIOUS QUOTES');
      return;
    }
    const randNum = Math.floor(Math.random() * previousQuotes.length);
    setShowQuote(previousQuotes[randNum]);
  };

  //search the quote by key word
  const fetchQuoteByText = async (searchKey: string) => {
    setQuoteSearchLoading(true);
    try {
      const data = await axios
        .get(`${import.meta.env.VITE_QUOTE_URL}/search/${searchKey}`)
        .then((resp) => {
          // the resp will be no data or 1 or more
          const rand = Math.floor(Math.random() * resp.data.slips.length);
          if (resp.data.total_results) {
            const quote = resp.data.slips[rand];

            return quote;
          }
        });
      if (data !== null) {
        setShowQuote(data);
      }
    } catch (error) {
      toast.error('No Quote found', {
        position: 'bottom-center',
        autoClose: 2000,
      });
    } finally {
      setQuoteSearchLoading(false);
    }
  };

  const fetchQuote = async () => {
    const controller = new AbortController();
    const data = await axios
      .get(import.meta.env.VITE_QUOTE_URL, {
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
  } = useQuery(['posts'], fetchQuote, {
    enabled: false,
    staleTime: 10000,
    select: ({ data }) => {
      const { advice, date, id } = data.slip;

      return { advice, date, id };
    },
  });

  //preventing continual click
  const debouncedClick = useCallback(() => {
    setQuoteSearchLoading(true);
    setTimeout(() => {
      refetch();
      setQuoteSearchLoading(false);
    }, watingTime);
  }, []);

  useEffect(() => {
    setShowQuote(quote);
  }, [isLoading, quote]);

  // if the showing quote are the same to the previous onem, it will not added to the previous quote
  useMemo(() => {
    const quoteExist = previousQuotes.find((q) => q.id === showQuote?.id);

    if (!quoteExist) {
      if (showQuote && showQuote.id !== undefined) {
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
    previousQuotes,
    debouncedClick,
    getRandomQuoteFromPrevious,
    fetchQuoteByText,
  };
};
