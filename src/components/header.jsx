import Telefon from "../assets/Header/aramaicon.svg"
import Mektup from "../assets/Header/mektup.svg"
import instagram from "../assets/Header/instagram.svg"
import youtube from "../assets/Header/youtube.svg"
import facebook from "../assets/Header/facebook.svg"
import twitter from "../assets/Header/twitter.svg"
export default function Header(){
    return(
        <container>
        <header className="bg-headerTop w-full ">
            <div className="navBarDark">
                <div >
                    <h6 className="text-white "><img  src={Telefon}/>(225)555-0118</h6>
                    <h6 className="text-white"><img src={Mektup}/>michelle.rivera@example.com</h6>
                    <h6 className="text-white">Follow Us  and get a chance to win 80% off</h6>
                    <h6 className="text-white">Follow Us  :<img src={instagram}/><img src={youtube}/><img src={facebook}/><img src={twitter}/></h6>
                </div>
            </div>
            </header>
        </container>
        
    );
}