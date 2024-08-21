import one from "../../assets/ShopCardsShopPage/one.svg"
import two from "../../assets/ShopCardsShopPage/two.svg"
import three from "../../assets/ShopCardsShopPage/three.svg"
import four from "../../assets/ShopCardsShopPage/four.svg"
import five from "../../assets/ShopCardsShopPage/five.svg"


export default function ShopCards(){
    return(
        <>
        <div className="w-full h-[271px] bg-[#FAFAFA] flex justify-center items-center">
            <div className="w-[1088px] h-[223px] gap-3.5 flex lg:flex-row flex-col justify-center items-center">
                <img src={one} />
                <img src={two} />
                <img src={three} />
                <img src={four} />
                <img src={five} />
            </div>
        </div>
    </>
);
}