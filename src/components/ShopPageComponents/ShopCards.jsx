import one from "../../assets/ShopCardsShopPage/one.svg"
import two from "../../assets/ShopCardsShopPage/two.svg"
import three from "../../assets/ShopCardsShopPage/three.svg"
import four from "../../assets/ShopCardsShopPage/four.svg"
import five from "../../assets/ShopCardsShopPage/five.svg"


export default function ShopCards(){
    return(
        <>
        <continer className="w-full h-[271px]">
            <span className="w-[1088px] h-[271px] pt-0 pr-0 pb-[48px] pl-0 left-176">
                <div className="w-[1088px]  h-[223px] gap-3.5 flex lg:flex-row  flex-col justify-around items-center">
                    <img src={one}/>
                    <img src={two}/>
                    <img src={three}/>
                    <img src={four}/>
                    <img src={five}/>
                </div>
            </span>
        </continer>
        </>
    )
}