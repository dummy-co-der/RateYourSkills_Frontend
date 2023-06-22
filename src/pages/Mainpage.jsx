import Banner from "../components/mainpage/banner/Banner";
import Video from "../components/mainpage/video/Video";
import Benefit from "../components/mainpage/benefit/Benefit";
// import Faq from "../components/mainpage/faq/Faq";
import Carousel from "../components/mainpage/carousel/Carousel";
import Footer from "../common/footer/Footer";
import ProgressBar from "../common/progressbar/ProgressBar";
import ChooseUs from "../components/mainpage/chooseus/ChooseUs";

function Mainpage() {
  return (
    <div>
      <ProgressBar />
      <Banner />
      <Video />
      <ChooseUs />
      <Benefit />
      <section>
        <Carousel />
      </section>
      {/* <Faq /> */}
      <Footer />
    </div>
  );
}

export default Mainpage;
