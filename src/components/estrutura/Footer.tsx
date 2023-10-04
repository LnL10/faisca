import Image from "next/image";
import headerImage from "./headerImage/faisca.png"
import { IconBrandFacebook, IconBrandFacebookFilled, IconBrandInstagram, IconBrandTwitter } from "@tabler/icons-react";

export default function Footer(){
    return(
        <div className="flex bg-zinc-600 h-56 w-full ">
            <div>
                <span>Redes Sociais:</span>

                <div className="flex" ><IconBrandFacebook />Facebook</div>
                <div className="flex"><IconBrandInstagram/>Instagram</div>
                <div className="flex"><IconBrandTwitter/>Twitter</div>
            
            </div>
        </div>
    )
}