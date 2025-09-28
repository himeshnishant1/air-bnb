import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LargeCard from "./components/LargeCard";
import MediumCard from "./components/MediumCard";
import SmallCard from "./components/SmallCard";
import { ExploreData, LiveExploreData } from "./interface/type";

export default async function Home() {
  const exploreData = await getExploreData();
  const liveAnyWhereData = await getLiveAnyWhereData();
  return (
    <div className="">
      <Header/>
      <Banner/>
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(item => (
              <SmallCard key={item.img} img={item.img} distance={item.distance} location={item.location}/>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {liveAnyWhereData?.map(item => (
              <MediumCard key={item.title} img={item.img} title={item.title}/>
            ))}
          </div>
        </section>
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

async function getExploreData(): Promise<ExploreData[]>{
  const exploreData = await fetch('https://links.papareact.com/pyp').then(res => res.json());
  return exploreData;
} 

async function  getLiveAnyWhereData(): Promise<LiveExploreData[]> {
  const liveAnyWhereData = await fetch('https://links.papareact.com/zp1').then(res => res.json());
  return liveAnyWhereData;
}