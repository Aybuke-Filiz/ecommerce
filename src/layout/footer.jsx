import logo from "../assets/Footer/logo.svg"

export default function Footer(){
    return(
        <footer className="w-full h-[488px]">
            <container className="w-full h-[142px]">
                <span className="w-[1050px] h-[138px] p-[40px, 0px, 40px, 0px] ">
                    <div className="w-[1049px] h-[58px] g-[577.5px] bg-[#FAFAFA]">
                        <img src={logo}/>


                    </div>

                </span>

            </container>
        </footer>
    )
}