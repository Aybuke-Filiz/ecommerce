import logo from "../assets/Footer/logo.svg"
import media from "../assets/Footer/media.svg"

export default function Footer(){
    return(
        <footer className="w-full h-[488px]">
            <container className="w-full h-[142px]">
                <span className="w-[1050px] h-[138px] p-[40px, 0px, 40px, 0px] ">
                    <div className="w-[1049px] h-[58px] g-[577.5px] bg-[#FAFAFA] flex justify-between">
                        <img src={logo}/>
                        <img className="w-60 h-6"src={media}/>
                    </div>
                </span>
                <span className="w-full h-[272px]">
                    <card className="w-full h-[270px] p-[50px, 0px, 50px, 0px] flex flex-row items-center">
                        <div className="w-[1041px] h-[170px] gap-8 flex flex-row items-center">
                        <div className="flex lg:flex-col gap-5">
                <h5 className="text-title">Company Info</h5>
                <div className="w-24 h-32 gap-2.5 flex flex-col">
                <a href="#">About Us</a>
                <a href="#">Carrier</a>
                <a href="#">We are hiring</a>
                <a href="#">Blog</a> 
                </div>
                </div>
                <div className="flex lg:flex-col gap-5">
                <h5 className="text-title">Company Info</h5>
                <div className="w-24 h-32 gap-2.5 flex flex-col">
                <a href="#">About Us</a>
                <a href="#">Carrier</a>
                <a href="#">We are hiring</a>
                <a href="#">Blog</a>
                </div>
                </div>
                <div className="flex lg:flex-col gap-5">
                <h5 className="text-title">Features</h5>
                <div className="w-36 h-32 gap-2.5 flex flex-col">
                <a href="#">Business Marketing</a>
                <a href="#">User Analytic</a>
                <a href="#">Live Chat</a>
                <a href="#">Unlimited Support</a>
                </div>
                </div>
                <div className="flex lg:flex-col gap-5">
                <h5 className="text-title">Resources</h5>
                <div className="w-[106px] h-32 gap-2.5 flex flex-col">
                <a href="#">IOS & Android</a>
                <a href="#">Watch a Demo</a>
                <a href="#">Customers</a>
                <a href="#">API</a>
                </div>
                </div>
                </div>
                <div className="w-80 h-[131px] gap-5">
                    <h5 className="text-title">Get In Touch</h5>
                    <div className="w-80 h-14 rounded-md border bg-[#E6E6E6] flex flex-row justify-end">
                        <p className="text-softText">Your Email</p>
                        <button className="w-[117px] h-14 rounded-[0px, 5px, 5px, 0px] border bg-[#23A6F0]">
                            <p className="w-[72px] h-7 text-white">Subscribe</p>
                        </button>
                        </div> 
                </div>
                    </card>
                    <card className="w-full h-[74px] bg-[#FAFAFA]">
                        <div className="w-full h-[74px] p-[25px, 0px, 25px, 0px] bg-[#FAFAFA] flex flex-row justify-start items-center">
                            <div className="w-[600px] h-6 gap-[213px]">
                                <h6 className="text-softText">Made With Love By Finland All Right Reserved </h6>
                            </div>
                        </div>
                    </card>
                </span>
            </container>
        </footer>
    )
}