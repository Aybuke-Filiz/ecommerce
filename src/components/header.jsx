import Telefon from "../assets/Header/aramaicon.svg"
import Mektup from "../assets/Header/mektup.svg"
import instagram from "../assets/Header/instagram.svg"
import youtube from "../assets/Header/youtube.svg"
import facebook from "../assets/Header/facebook.svg"
import twitter from "../assets/Header/twitter.svg"
import login from "../assets/Header/login.svg"
import arama from "../assets/Header/arama.svg"
import sepet from "../assets/Header/sepet.svg"
import like from "../assets/Header/like.svg"

export default function Header(){
    return(
    //TODO: mobil versiyon için menü çubuğu düzenlemesi
        <header className="flex flex-col">
            <span className="hidden lg:block">
            <section className="flex flex-row items-center justify-between text-white bg-headerTop w-full h-14 px-6">
                <div className="flex flex-row gap-6" >
                    <h6 className="text-white flex flex-row gap-1"><img  src={Telefon}/>(225)555-0118</h6>
                    <h6 className="text-white flex flex-row gap-1"><img src={Mektup}/>michelle.rivera@example.com</h6>
                    </div>
                    <div>
                    <h6 className="text-white">Follow Us  and get a chance to win 80% off</h6>
                    </div>
                    <div className="flex flex-row gap-4">
                    <h6 className="text-white">Follow Us</h6>
                    <h6>:</h6>
                    <img src={instagram}/><img src={youtube}/><img src={facebook}/><img src={twitter}/>
                </div>
                </section>
                </span>
        <section className="flex lg:flex-row flex-col items-center justify-between w-full h-20 px-6 bg-white">
        <div className="flex lg:flex-row items-center gap-4">
                <h3 className="lg:mr-24">Bandage</h3>
                <a href="#">Home</a>
                <a href="#">Shop</a>
                <a href="#">About</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
                <a href="#">Pages</a>
                </div>
          <div className="flex flex-row gap-1 items-center">
          <a className="flex text-click text-[14px] font-[700] gap-2" href="#">
            <img src={login} />
            Login
          </a>
          <span className=" flex text-[14px] font-[700] text-click ">/</span>
          <a className="text-click " href="#">
            Register
          </a>
          <span className="flex gap-8 ml-4">
            <a className="text-click " href="#">
              <img src={arama} alt="search" />
            </a>
            <a className="text-click" href="#">
              <img src={sepet} alt="basket" />
            </a>
            <a className="text-click flex flex-row" href="#">
              <img src={like} alt="likes" />
            </a>
          </span>
        </div>
      </section>
    </header>
        
    );
}