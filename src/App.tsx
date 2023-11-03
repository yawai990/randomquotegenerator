import { Card, HeaderNav, ErrorCom, Loading, ParallaxCards } from './components';
import { useFetch } from './hooks/useFetch';
import { createPortal } from 'react-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { ReactQueryDevtools } from "react-query/devtools";

export default function App() {
  const {
    showQuote,
    isError,
    isLoading,
    isFetching,
    quoteSearchLoading,
    parallaxCardQuotes,
    fetchQuoteByText,
    getRandomQuoteFromPrevious,
    debouncedClick,
  } = useFetch();


  if (isError) {
    return <ErrorCom />;
  };


  return (
    <section className='bg-primary'>

    <ParallaxCards quotes={parallaxCardQuotes} />

    <main className="w-screen z-10 pt-10 min-h-screen text-center font-garamond bg-primary fixed top-0">
      {/* for noti */}
      <ToastContainer />

      {(isLoading || isLoading || isFetching || quoteSearchLoading) &&
        createPortal(<Loading />, document.body)}

      <h5 className="header text-white font-semibold tracking-widest text-2xl">RANDOM QUOTE GENERATOR</h5>

      {/* search form */}
      <HeaderNav
        fetchQuoteByText={fetchQuoteByText}
        getRandomQuoteFromPrevious={getRandomQuoteFromPrevious}
        debouncedClick={debouncedClick}
      />

      <Card quote={showQuote} getQuote={debouncedClick} />

      {/* for development */}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </main>
    </section>
  );
}
