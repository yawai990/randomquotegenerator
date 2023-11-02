import { CTABtn, Card, SearchCom, ErrorCom, Loading } from "./components";
import { useFetch } from "./hooks/useFetch";
import { createPortal } from "react-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { ReactQueryDevtools } from "react-query/devtools";

export default function App() {
  const {
    showQuote,
    isError,
    isLoading,
    isFetching,
    clickable,
    quoteSearchLoading,
    fetchQuoteByText,
    getRandomQuoteFromPrevious,
    refetch,
  } = useFetch();

  if (isError) {
    return <ErrorCom />;
  }

  return (
    <main className="text-center pt-10">
      {/* for noti */}
      <ToastContainer />

      {(isLoading || isLoading || isFetching || quoteSearchLoading) &&
        createPortal(<Loading />, document.body)}

      <h5>RANDOM QUOTE GENERATOR</h5>

      {/* search form */}
      <SearchCom fetchQuoteByText={fetchQuoteByText} />

      <CTABtn
        btnLabel="prev"
        clickDisable={clickable}
        click={() => getRandomQuoteFromPrevious()}
      />

      <CTABtn btnLabel="Next" clickDisable={clickable} click={refetch} />

      <Card quote={showQuote} clickDisable={clickable} getQuote={refetch} />

      {/* for development */}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </main>
  );
}
