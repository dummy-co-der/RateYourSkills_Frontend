// import Banner from "../components/mainpage/banner/Banner";
import Video from "../components/mainpage/video/Video";
import Benefit from "../components/mainpage/benefit/Benefit";
import Footer from "../components/mainpage/footer/Footer";
// import Faq from "../components/mainpage/faq/Faq";
// import Carousel from "../components/mainpage/carousel/Carousel"; 
// import AutoPlay from "../components/mainpage/carousel/caro";
import Banner from "../components/mainpage/banner/Banner";

function Mainpage () {
  return (
    <div>
      <Banner />
      <Video />
      <Benefit />
      {/* <section> */} 
      {/* <Carousel /> */}
      {/* </section> */}
      {/* <Faq /> */}
      {/* <AutoPlay /> */}
      <Footer />
    </div>
  );
}

export default Mainpage;