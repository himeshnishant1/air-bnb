// app/search/page.tsx
import Header from '../components/Header';
import Footer from '../components/Footer';
import { format } from 'date-fns';
import InfoCard from '../components/InfoCard';
import { SearchData } from '../interface/type';


async function Search({ searchParams }: { searchParams: Promise<{ location: string, startDate: string, endDate: string, noOfGuests: string }> }) {
  const { location, startDate, endDate, noOfGuests } = await searchParams;

  const formatedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formatedEndDate = format(new Date(endDate), "dd MMMM yy");

  const range = `${formatedStartDate} - ${formatedEndDate}`;

  const searchResult = await getSearchResults({});
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} | guests`} />

      <main className='flex'>
        <section className='flex-grow pt-14 px-6'>
          <p className='text-xs'>300+ Stays - {range} - for {noOfGuests} guests</p>
          <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>

          <div className='hidden md:inline-flex space-x-3 mb-5 text-gray-800 whitespace-nowrap'>
            <p className='button'>Cancellation Flexibility</p>
            <p className='button'>Type of Place</p>
            <p className='button'>Rooms and Beds</p>
            <p className='button'>More Filters</p>
          </div>
          <div className='flex flex-col'>
            {searchResult.map((el: SearchData) => (
              <InfoCard
                key={el.img}
                img={el.img}
                location={el.location}
                title={el.title}
                description={el.description}
                star={el.star}
                price={el.price}
                total={el.total}
              />))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

async function getSearchResults(params: any) {
  const response = await fetch("https://links.papareact.com/isz");
  const data = await response.json();
  return data;
}

export default Search;
