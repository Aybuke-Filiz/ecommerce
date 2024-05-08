import first from "../../assets/Content/first.svg"
import second from "../../assets/Content/second.svg"

export default function Content(){

    return(
        <container className="w-full h-[658px] flex flex-row items-center">
            <span className="w-full h-[658px] p-[80px, 0px, 80px, 0px]">
                <card className="w-full h-[498px] g-[90px] flex flex-row items-center">
                <div className="w-[512.6px] h-[498px] flex flex-row items-center gap-2.5">
                        <img className="gap-2.5" src={first}/>
                        <img className="gap-2.5"src={second}/>
                    </div>
                    <div className="w-[447px] h-60 gap-4 flex flex-col justify-end ">
                        <h5 className="text-click">Featured Products</h5>
                        <h2 className="text-headerTop">We love what we do</h2>
                        <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                    </div>
                </card>
            </span>
        </container>
    )
}