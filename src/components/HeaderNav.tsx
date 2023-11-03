import { SearchCom, CTABtn } from '.';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const HeaderNav = ({
  fetchQuoteByText,
  getRandomQuoteFromPrevious,
  debouncedClick,
}: any) => {
  return (
    <main className="w-[95%] md:w-3/5 lg:w-2/5 mx-auto flex justify-between items-center py-5 mt-5 flex-wrap gap-2">
      <SearchCom fetchQuoteByText={fetchQuoteByText} />

      <div className="flex gap-1">
        <CTABtn icon={<FaChevronLeft />} click={getRandomQuoteFromPrevious} />

        <CTABtn icon={<FaChevronRight />} click={debouncedClick} />
      </div>
    </main>
  );
};

export default HeaderNav;
