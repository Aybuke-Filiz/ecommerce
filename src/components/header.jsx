import Telefon from "../assets/Header/aramaicon.svg"
export default function Header(){
    return(
        <>
        <container className="bg-blue">
            <div className="navBarDark">
                <div >
                    <p><img  src={Telefon}/>(225)555-0118</p>
                </div>
            </div>
        </container>
        </>
    );
}