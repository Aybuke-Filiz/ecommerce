import logo from "../assets/Footer/logo.svg"
import media from "../assets/Footer/media.svg"

export default function Footer(){
    return (
        <footer className="w-full bg-[#FAFAFA] px-[50px]">
            <div className="w-full h-[142px]">
                <div className="w-full h-[138px] p-[40px_0px]">
                    <div className="w-full h-[58px] bg-[#FAFAFA] flex justify-between items-center">
                        <img src={logo} alt="Logo" />
                        <img className="w-60 h-6" src={media} alt="Social Media" />
                    </div>
                </div>
                <div className="w-full h-[272px]">
                    <div className="w-full h-[270px] p-[50px_0px] flex flex-col lg:flex-row justify-between items-center gap-8">
                        <div className="w-full lg:w-[calc(25%-1rem)] h-auto flex flex-col gap-5">
                            <h5 className="text-title">Company Info</h5>
                            <div className="flex flex-col gap-2.5">
                                <a href="#">About Us</a>
                                <a href="#">Career</a>
                                <a href="#">We are hiring</a>
                                <a href="#">Blog</a>
                            </div>
                        </div>
                        <div className="w-full lg:w-[calc(25%-1rem)] h-auto flex flex-col gap-5">
                            <h5 className="text-title">Features</h5>
                            <div className="flex flex-col gap-2.5">
                                <a href="#">Business Marketing</a>
                                <a href="#">User Analytic</a>
                                <a href="#">Live Chat</a>
                                <a href="#">Unlimited Support</a>
                            </div>
                        </div>
                        <div className="w-full lg:w-[calc(25%-1rem)] h-auto flex flex-col gap-5">
                            <h5 className="text-title">Resources</h5>
                            <div className="flex flex-col gap-2.5">
                                <a href="#">iOS & Android</a>
                                <a href="#">Watch a Demo</a>
                                <a href="#">Customers</a>
                                <a href="#">API</a>
                            </div>
                        </div>
                        <div className="w-full lg:w-[calc(25%-1rem)] h-auto flex flex-col gap-5">
                            <h5 className="text-title">Get In Touch</h5>
                            <div className="w-full h-14 rounded-md border bg-[#E6E6E6] flex items-center">
                                <p className="text-softText flex-grow pl-4">Your Email</p>
                                <button className="w-[117px] h-14 rounded-[0px_5px_5px_0px] border bg-[#23A6F0] flex items-center justify-center">
                                    <p className="text-white">Subscribe</p>
                                </button>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="w-full h-[74px] bg-[#FAFAFA] flex items-center">
                    <div className="w-full h-[74px] flex items-center">
                        <h6 className="text-softText mx-[50px]">Made With Love By Finland All Rights Reserved</h6>
                    </div>
                </div>
            </div>
        </footer>
    )
}