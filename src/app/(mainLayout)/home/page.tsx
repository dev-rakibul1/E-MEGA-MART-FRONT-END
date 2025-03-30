import HomeCategories from "@/components/home/HomeCategories";
import HomeProductListCart from "@/components/home/HomeProductList";
import DailyOffer from "@/components/home/offers/DailyOffer";
import HomeProductSlider from "@/components/home/slider/HomeProductSlide";
import { default as FarmerMotionSlider } from "@/components/home/slider/HomeTopSlider";

const HomePage = () => {
  return (
    <div>
      <FarmerMotionSlider />
      <HomeProductListCart />
      <HomeCategories />
      <HomeProductSlider />
      <DailyOffer />
    </div>
  );
};

export default HomePage;
