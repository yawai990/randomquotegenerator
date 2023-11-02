import { FormEvent } from "react";

const SearchCom = ({
  fetchQuoteByText,
}: {
  fetchQuoteByText: (key: string) => void;
}) => {
  const handleSearchKey = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const elements = e.currentTarget;
    const searchText = elements.search_text.value;
    fetchQuoteByText(searchText);
    elements.search_text.value = "";
  };

  return (
    <form onSubmit={handleSearchKey}>
      <input
        type="text"
        name="search_text"
        placeholder="Search Quote"
        className="outline-none border-b"
      />
    </form>
  );
};

export default SearchCom;
