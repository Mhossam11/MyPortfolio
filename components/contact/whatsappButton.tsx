"use client"
import {  FaWhatsapp } from "react-icons/fa";
import MagicButton from "../ui/magicButton";

const WhatsappButton = (  ) => {
    return ( 
        <a className="mt-5 md:m-0">
        <MagicButton
            title="Let's get in touch"
            icon={<FaWhatsapp/>}
            position="right"
            handleClick={() =>
                window.open(
                  "https://wa.me/201002784461?text=Hello!%20I%20would%20like%20to%20contact%20you",
                  "_blank"
                )
              }
        />
    </a>
     );
}

export  default WhatsappButton;