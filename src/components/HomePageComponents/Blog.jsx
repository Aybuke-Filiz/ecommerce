import first from "../../assets/Blog/first.svg"
import stars from "../../assets/Blog/stars.svg"
import totalsales from "../../assets/Blog/totalsales.svg"
import colors from "../../assets/Blog/colors.svg"
import clock from "../../assets/Blog/clock.svg"
import lessons from "../../assets/Blog/lessons.svg"
import progress from "../../assets/Blog/progress.svg"
import more from "../../assets/Blog/more.svg"
import second from "../../assets/Blog/second.svg"
import sale from "../../assets/Blog/sale.svg"
import icons from "../../assets/Blog/icons.svg"

//TODO:resmin üzerine sale yazısı ve alta ikonlar eklenecek
export default function Blog(){
    return(
        <container className="w-full h-[744px] ">
            <span className="w-[1050px] h-[744px] p-[80px, 0px, 80px, 0px] gap-24 flex items-center">
                <card className="w-[309px] h-[84px]">
                    <div className="w-[309px] h-[84px] gap-2.5">
                        <h6 className="text-click">Practice Advice</h6>
                        <h2 className="text-headerTop">Featured Posts</h2>
                    </div>
                </card>
                <card className="w-[1050px] h-[404px] gap-8">
                    <span className="w-[508px] h-[404px] ">
                        <div className="">
                        <img src={sale}/>
                        <img src={first}/>
                        <img src={icons}/>
                        </div>
                        <div className="flex items-center gap-2.5">
                        <p className="text-click">English Department</p>
                        <img src={stars}/>
                        </div>
                        <h5 className="text-headerTop">Graphic Design</h5>
                        <p>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                        <img src={totalsales}/>
                        <div className="flex items-center gap-2.5">
                            <h5 className="text-faint">$16.48</h5>
                            <h5 className="text-green">$6.48</h5>
                        </div>
                        <img src={colors}/>
                        <div className="flex items-center gap-1">
                            <img src={clock}/>
                            <p className="text-softText">22h...</p>
                            <img src={lessons}/>
                            <p className="text-softText">64 Lessons</p>
                            <img src={progress}/>
                            <p className="text-softText">Progress</p>
                        </div>
                        <button className="w-[141.14px] h-[44px] rounded-[37px] border p-[10px, 20px, 10px, 20px] g-2.5 border-click flex items-center">
                            <h6 className="text-click">Learn More</h6>
                            <img src={more}/>
                        </button>
                    </span>
                </card>
                <card className="w-[1050px] h-[404px] gap-8">
                    <span className="w-[508px] h-[404px]">
                        <img src={sale}/>
                        <img src={second}/>
                        <img src={icons}/>
                        <div className="flex items-center gap-2.5">
                        <p className="text-click">English Department</p>
                        <img src={stars}/>
                        </div>
                        <h5 className="text-headerTop">Graphic Design</h5>
                        <p>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                        <img src={totalsales}/>
                        <div className="flex items-center gap-2.5">
                            <h5 className="text-faint">$16.48</h5>
                            <h5 className="text-green">$6.48</h5>
                        </div>
                        <img src={colors}/>
                        <div className="flex items-center gap-1">
                            <img src={clock}/>
                            <p className="text-softText">22h...</p>
                            <img src={lessons}/>
                            <p className="text-softText">64 Lessons</p>
                            <img src={progress}/>
                            <p className="text-softText">Progress</p>
                        </div>
                        <button className="w-[141.14px] h-[44px] rounded-[37px] border p-[10px, 20px, 10px, 20px] g-2.5 border-click flex items-center">
                            <h6 className="text-click">Learn More</h6>
                            <img src={more}/>
                        </button>
                    </span>
                </card>
            </span>
        </container>
    )
}