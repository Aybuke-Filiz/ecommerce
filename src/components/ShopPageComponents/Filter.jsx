import square from "../../assets/Filter/square.svg"
import menu from "../../assets/Filter/menu.svg"
import popularity from "../../assets/Filter/custom-select.svg"


export default function Filter(){
    return(
        <>
        <container className="w-full h-24 flex items-center">
  <span className="relative w-[1050px] h-[98px] left-[195px] p-[24px] px-0 gap-[80px] flex items-center">
    <div className="w-full h-[50px] flex justify-between items-center">
      <card className="w-[168px] h-[24px] p-[0px] px-[1px] gap-[15px] flex items-center">
        <h6 className="text-softText">Showing all 12 results</h6>
      </card>
      <card className="w-[177px] h-[46px] p-0 gap-[15px] flex items-center">
  <h6 className="text-softText">Views:</h6>
  <div className="w-[107px] h-[46px] flex items-center justify-between">
    <button className="w-[46px] h-[46px] p-0 border-t border-t-[1px] border-r-0 border-b-0 border-l-0 rounded-tl-[5px]">
      <img src={square} />
    </button>
    <button className="w-[46px] h-[46px] p-0 border-t border-t-[1px] border-r-0 border-b-0 border-l-0 rounded-tl-[5px]">
      <img src={menu} />
    </button>
  </div>
</card>
      <card className="w-[252px] h-[50px] p-[0px] px-[1px] gap-[15px] flex items-center">
      <img src={popularity}/>
      <button className="w-[94px] h-[50px] p-[10px_20px] gap-[10px] rounded-tl-[5px] bg-[#23A6F0]"> 
        <h6 className="text-white">Filter</h6>
      </button>
      </card>
    </div>
  </span>
</container>
        </>
    )
}