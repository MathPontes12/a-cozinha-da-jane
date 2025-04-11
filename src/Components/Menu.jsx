'use client';

import Banner from "@/Components/Banner/Banner"
import ButtonMenu from "@/Components/ButtonMenu/ButtonMenu"
import WhatsappLogo from "@/Components/WhatsappLogo/WhatsappLogo"
import CardMenu from "@/Components/CardsMenu/CardsMenu"
import dados from '@/docks/ItemsMenu.json';
import { useState } from "react";

const Menu = () => {


    const [itensMenu, setItensMenu] = useState([])

    const aoClicar = (menuEscolhido) => {
        const itens = dados[menuEscolhido];
        setItensMenu(itens)
    }

    return (
        <div className="relative bg-marrom flex flex-col items-center w-full min-h-screen xl:gap-[80px] gap-[60px] xl:pb-[120px] pb-[60px]">

            <Banner />
            <div className="flex flex-col items-center xl:gap-[80px] gap-[40px]">

                <div className="bg-bege border-roxo flex xl:gap-[0px] border-[4px] 
                rounded-[70px] xl:my-[20px] xl:mx-[42px]">

                    <ButtonMenu nome='Fritos' escolhido={aoClicar} />
                    <ButtonMenu nome='Empadas' escolhido={aoClicar} />
                    <ButtonMenu nome='Assados' escolhido={aoClicar} />
                    <ButtonMenu nome='Doces' escolhido={aoClicar} />

                </div>

                <div className="flex xl:flex-row flex-col xl:gap-[50px] gap-[20px]">
                    {itensMenu.map((item) =>
                        <CardMenu
                            key={item.id}
                            nomeDoItem={item.nome}
                            saborEspecifico={item.sabores}
                            imagemItems={item.imagem}
                        />)}

                </div>


            </div>
            <WhatsappLogo />
        </div>
    )
}

export default Menu