import kirmizisac from "../../assets/Hero/kirmizisac.svg"

export default function Hero(){
    return(
            
            <container className="flex lg:flex-row flex-col w-full h-[622px] bg-gradient-to-r from-blue-200 to-teal-200 rounded-3xl">
                <div className="flex flex-col">
                <h5 className="text-[#2A7CC7]">SUMMER 2020</h5>
                <h1 className="text-softText pb-[1rem]">NEW COLLECTION</h1>
                <h4 className="text-title">We know how large objects will act,</h4>
                <h4>but things on a small scale.</h4>
                <button className="bg-[#23A6F0] p-[15px, 40px, 15px, 40px] rounded-md gap-2.5 w-56 h-16">
                    <h3 className="text-white">SHOP NOW</h3>
                </button>
            </div>
            <div>
                <img className=" w-[687px] h-[620px] top-20 "src={kirmizisac}/>
            </div>
        </container>
    )
}