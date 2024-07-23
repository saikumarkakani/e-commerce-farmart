import { Banners } from "../Body/Banners/banners.component";
import { FeatureBrands } from "../Body/FeatureBrands/featurebrand.component";
import { FeaturedPro } from "../Body/FeatureProducts/featurePro.component";
import { HealthDaily } from "../Body/Health-Daily/health.component";
import { JustLanding } from "../Body/JustLanding/justlanding.component";
import { TopSavers } from "../Body/TopSavers/topsavers.component";
import { Categories } from "../Category/category.component";


export function Home(){
    return(
        <div>
       <Banners></Banners>
       <Categories></Categories>
       <FeatureBrands></FeatureBrands>
       <TopSavers></TopSavers>
       <JustLanding></JustLanding>
       <FeaturedPro></FeaturedPro>
       <HealthDaily></HealthDaily>
        </div>
    )
}