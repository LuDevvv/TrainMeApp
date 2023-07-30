import { Header } from "../layout/Header";
import { ContentHomePage } from "../Home/ContentHomePage";
import { Announcement } from "../common/Announcement";
import { BannerHomePage } from "../Home/BannerHomePage";
import { Footer } from "../common/Footer";
import { Testimonials } from "../common/Testimonials";
import { BlogsHomePage } from "../Home/BlogsHomePage";
import { InfoHomePage } from "../Home/InfoHomePage";
import { DietHomePage } from "../Home/DietHomePage";

export const HomePage = () => {
  return (
    <>
      {/* <Announcement /> */}
      <Header />
      <ContentHomePage />
      <InfoHomePage />
      <DietHomePage />
      <Testimonials />
      <BannerHomePage />
      
      <Footer />
    </>
  );
};
