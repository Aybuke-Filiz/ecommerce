
import Client from "../components/HomePageComponents/Client";
import Content from "../components/HomePageComponents/Content";
import Features from "../components/HomePageComponents/Features";
import Hero from "../components/HomePageComponents/Hero";
import ProductCards from "../components/HomePageComponents/ProductCards";
import ShopCards from "../components/HomePageComponents/ShopCards";


export default function PageContent(){

    return(
        <>
        <Hero/>
        <Client/>
        <ShopCards/>
        <ProductCards/>
        <Content/>
        <Features/>
        </>
    )
}