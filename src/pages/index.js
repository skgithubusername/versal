
import Footer from "@/components/Footer";
import PartyPlanning from "@/components/PartyPlanning";
import PartyPlanningPage from "@/components/PartyPlanningPage";
import PartyPlanningPage2 from "@/components/PartyPlanningPage2";
import SliderCard from "@/components/SlliderCard";

export default function Home() {
  return (
    <div className="  min-h-full  bg-white">
    
      <PartyPlanning/>
      <PartyPlanningPage/>
      <PartyPlanningPage2/>
      <Footer/>

      {/* <SliderCard/> */}
    </div>
  );
}
