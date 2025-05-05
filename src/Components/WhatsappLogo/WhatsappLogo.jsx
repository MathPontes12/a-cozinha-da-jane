'use client';

import { useEffect, useState } from "react"

const WhatsappLogo = () => {

    const [balaoAparece, SetBalaoAparece] = useState(false)

    useEffect(() => {
        setTimeout(() => SetBalaoAparece(true), 7000)
        const tempo = setTimeout(() => SetBalaoAparece(false), 17000);
        return () => clearTimeout(tempo);
    }, []);
    

    return (

        <div className="flex fixed  bottom-0 left-0 z-50">

            <a href="https://contate.me/ios/acozinhadajane" target="_blank" rel="noopener noreferrer">
                <img className="w-fit xl:h-[60px] h-[50px]  
                xl:ml-[50px] ml-[20px] xl:mb-[60px] mb-[20px]
                xl:cursor-pointer xl:hover:opacity-50"
                    src="/Images/WhatsappLogo.png" alt="logo do whatsapp" />
            </a>
            {balaoAparece && (
                
                <p className="rounded-t-[70px] rounded-br-[70px] bg-white text-black font-secundaria
                 h-fit p-[9px] mt-[-35px] text-[14px]"> 
                Dúvidas? Entre em contato
                </p>
                
                )}
        </div>
    )
}

export default WhatsappLogo