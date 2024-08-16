import hooli from "../../assets/Client/hooli.svg"
import lyft from "../../assets/Client/lyft.svg"
import yaprak from "../../assets/Client/yaprak.svg"
import stripe from "../../assets/Client/stripe.svg"
import aws from "../../assets/Client/aws.svg"
import uzaylı from "../../assets/Client/uzaylı.svg"

export default function Client(){
    return(
     <div className="flex lg:flex-row  flex-col justify-around items-center gap-[30px] " >
        <img src={hooli}/>
        <img src={lyft}/>
        <img src={yaprak}/>
        <img src={stripe}/>
        <img src={aws}/>
        <img src={uzaylı}/>
        </div>

    
    )
}