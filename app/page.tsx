import Banner from "./_component/Banner";
import Explore from "./_component/Explore";
import Footer from "./_component/Footer";
import GreatestOutDoors from "./_component/GreatestOutDoors";
import Live from "./_component/Live";
import Header from "./_component/header/Header";
function page() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Explore />
        <Live />
        <GreatestOutDoors
          img="https://images.unsplash.com/photo-1609688669309-fc15db557633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          linkText="Get Inspired"
        />
      </main>
      <Footer />
    </>
  );
}

export default page;
