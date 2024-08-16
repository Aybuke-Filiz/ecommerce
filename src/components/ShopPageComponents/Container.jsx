import arrow from "../../assets/Container/arrow.svg"

export default function Container(){
    return (
        <>
        <container className="flex lg:flex-row flex-col w-full h-[92px] bg-[#FAFAFA]">
        <span className="flex lg:flex-row flex-col w-full h-[44px]">
            <div className="flex lg:flex-row flex-col w-[510px] h-[32px] lg:mr-24">
                <h3 className=" text-headerTop">SHOP</h3>
            </div>
            <div className="flex lg:flex-row flex-col w-full h-[44px] gap-1.5  justify-end">
                <card className="flex lg:flex-row flex-col gap-3.5 w-[119px] h-11 p-[10px] px-0">
                <a href="#">Home</a>
                <img src={arrow}/>
                <h6 className="text-faint">SHOP</h6>
                </card>
            </div>
        </span>
        </container>
        </>
    )
}