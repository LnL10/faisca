import Image from "next/image";
import footerImage from "./headerImage/faisca.png"
import { IconBrandFacebook, IconBrandFacebookFilled, IconBrandInstagram, IconBrandTwitter, IconBrandWhatsapp, IconMail, IconRecordMail } from "@tabler/icons-react";


export default function Footer(){
    return(
        
            <div className="flex gap-20 px-10 py-5 bg-zinc-600 justify-between h-56 w-full mt-10 ">
                

                <div>
                    <span className="font-black border-b-2 text-lg ">Redes Sociais:</span>
                        
                    <div className="flex gap-3 pt-5">
                        <div className="flex" ><IconBrandFacebook /></div>
                        <div className="flex"><IconBrandInstagram/></div>
                        <div className="flex"><IconBrandWhatsapp/></div>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <Image src={footerImage} className="bg-transparent object-contain" alt="footer"  width={150}/>
                        <h5 className="">© 2023 FaiscaStore</h5>
                        <h5 className="mb-8">Todos os direitos reservados.</h5>
                </div>
                
                
                <div>
                    <span className="font-black border-b-2 text-lg ">Email:</span>
                        
                    <div className="flex gap-3 pt-5">
                        <div className="flex font-light" ><IconMail/>storefaisca0@gmail.com</div>
                        
                    </div>
                </div>      
                
                
            </div>
    )
}