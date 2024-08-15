import Client from "../components/HomePageComponents/Client";
import Container from "../components/ShopPageComponents/Container";
import Filter from "../components/ShopPageComponents/Filter";
import ProductCardsShopPage from "../components/ShopPageComponents/ProductCardsShopPage";
import ShopCards from "../components/ShopPageComponents/ShopCards";


export default function ShopPage(){
    return(
        <>
        <Container/>
        <ShopCards/>
        <Filter/>
        <ProductCardsShopPage/>
        <Client/>
        </>
    )
}