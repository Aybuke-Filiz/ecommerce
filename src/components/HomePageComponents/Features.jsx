import book from "../../assets/Features/book.svg"
import newspaper from "../../assets/Features/newspaper.svg"
import arrow from "../../assets/Features/arrow.svg"

export default function Features(){
    return(
        <container className="w-full h-[632px]">
            <span className="w-full h-[616px] p-[80px, 0px, 80px, 0px] gap-20">
                <card className="w-[692px] h-[102px]">
                    <div className="w-[691px] h-[102px] gap-2.5 flex flex-col justify-center">
                        <h4 className="text-softText flex justify-center">Featured Products</h4>
                        <h3 className="text-headerTop flex justify-center">THE BEST SERVICES</h3>
                        <p className="text-softText flex justify-center">Problems trying to resolve the conflict between </p>
                    </div>
                </card>
                <card className="w-full h-[274px] gap-8 flex justify-between">
                    <div className="w-[315px] h-[254px] p-[35px, 40px, 35px, 40px] gap-5">
                        <img className="flex justify-center"src={book}/>
                        <h3 className="text-headerTop flex justify-center">Easy Wins</h3>
                        <p className="text-softText flex justify-center">Get your best looking smile now!</p>
                    </div>
                    <div className="w-[315px] h-[254px] p-[35px, 40px, 35px, 40px] gap-5">
                        <img className="flex justify-center"src={newspaper}/>
                        <h3 className="text-headerTop flex justify-center">Concrete</h3>
                        <p className="text-softText flex justify-center">Defalcate is most focused in helping you discover your most beautiful smile</p>
                    </div>
                    <div className="w-[315px] h-[254px] p-[35px, 40px, 35px, 40px] gap-5 ">
                        <img className="flex justify-center"src={arrow}/>
                        <h3 className="text-headerTop flex justify-center">Hack Growth</h3>
                        <p className="text-softText flex justify-center">Overcame any hurdle or any other problem.</p>
                    </div>
                </card>
            </span> 
        </container>
    )
}