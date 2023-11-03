import { Card, HeaderNav, ErrorCom, Loading } from './components';
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
    fetchQuoteByText,
    getRandomQuoteFromPrevious,
    debouncedClick,
  } = useFetch();

  if (isError) {
    return <ErrorCom />;
  }

  return (
    <main className="min-h-screen text-center pt-10 font-garamond bg-gray-100">
      {/* for noti */}
      <ToastContainer />

      {(isLoading || isLoading || isFetching || quoteSearchLoading) &&
        createPortal(<Loading />, document.body)}

      <h5 className="header">RANDOM QUOTE GENERATOR</h5>

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
  );
}
