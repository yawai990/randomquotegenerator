import { FormEvent } from 'react';
import { LiaSearchSolid } from 'react-icons/lia';
import { toast } from 'react-toastify';

const SearchCom = ({
  fetchQuoteByText,
}: {
  fetchQuoteByText: (key: string) => void;
}) => {
  const handleSearchKey = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const elements = e.currentTarget;
    const searchText = elements.search_text.value;

    if (!searchText.trim().length) {
      toast.error('enter text in the search filed', {
        position: 'top-center',
        autoClose: 1000,
      });
      return null;
    }
    fetchQuoteByText(searchText);
    elements.search_text.value = '';
  };

  return (
    <form onSubmit={handleSearchKey}>
      <div className="relative border-b bg-slate-600 text-white rounded py-0.5">
        <input
          type="text"
          name="search_text"
          placeholder="Search Quote"
          className="outline-none bg-transparent px-5 placeholder:text-white tracking-wide py-1"
        />
        <LiaSearchSolid className="absolute top-1/2 -translate-y-1/2 right-2" />
      </div>
    </form>
  );
};

export default SearchCom;
