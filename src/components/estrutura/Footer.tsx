import Image from "next/image";
import headerImage from "./headerImage/faisca.png"
import { IconBrandFacebook, IconBrandFacebookFilled, IconBrandInstagram, IconBrandTwitter } from "@tabler/icons-react";

export default function Footer(){
    return(
        <div className="flex bg-zinc-600 h-56 w-full ">
            <div className="p-10">

                <span className="font-black border ">Redes Sociais:</span>
                    
                <div className="flex gap-3 pt-5">
                    <div className="flex" ><IconBrandFacebook /></div>
                    <div className="flex"><IconBrandInstagram/></div>
                    <div className="flex"><IconBrandTwitter/></div>
                </div>
            
            </div>
        </div>
    )
}