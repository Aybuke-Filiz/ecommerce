import Header from "../header";
import Client from "./Client";
import Hero from "./Hero";
import ShopCards from "./ShopCards";


export default function PageContent(){

    return(
        <>
        <Header/>
        <Hero/>
        <Client/>
        <ShopCards/>
        </>
    )
}