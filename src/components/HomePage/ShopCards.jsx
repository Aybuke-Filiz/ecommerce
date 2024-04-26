import first from "../../assets/ShopCards/first.svg"
import second from "../../assets/ShopCards/second.svg"
import third from "../../assets/ShopCards/third.svg"

export default function ShopCards(){
    return(
        <container className="w-full h-[732px] flex lg:flex-row flex-col justify-between items-center content-center">
            <span className="w-[1185px] h-[732px] p-[80px, 0px, 80px, 0px] ">
                <section className="w-[1185px] h-[572px] gap-4">
                    <card className="w-[611px] h-[572px]">
                        <div className="w-[420px] h-[238px] bg-[#2D8BC0BF] opacity-75">
                            <h3 className="text-white">Top Product Of </h3>
                            <h3 className="text-white">the Week</h3>
                            <button className="w-48 h-14 rounded-md border p-[15px, 40px, 15px, 40px] gap-gap-2.5 opacity-100 text-white">
                            EXPLORE ITEMS
                            </button>
                            <img src={first}/>
                        </div>
                    </card>
                    <card className="w-[557px] h-[289px]">
                        <div className="w-[347px] h-[173px] bg-[#2D8BC0BF] opacity-75">
                            <h3 className="text-white">Top Product Of </h3>
                            <h3 className="text-white">the Week</h3>
                            <button className="w-48 h-14 rounded-md border p-[15px, 40px, 15px, 40px] gap-gap-2.5 opacity-100 text-white">
                            EXPLORE ITEMS
                            </button>
                            <img src={second}/>
                        </div>
                    </card>
                    <card className="w-[557px] h-[261px]">
                        <div className="w-[347px] h-[173px] bg-[#2D8BC0BF] opacity-75">
                            <h3 className="text-white">Top Product Of </h3>
                            <h3 className="text-white">the Week</h3>
                            <button className="w-48 h-14 rounded-md border p-[15px, 40px, 15px, 40px] gap-gap-2.5 opacity-100 text-white">
                            EXPLORE ITEMS
                            </button>
                            <img src={third}/>
                        </div>
                    </card>

                </section>
            </span>

        </container>
    )
}