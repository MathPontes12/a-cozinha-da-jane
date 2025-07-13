'use client';

import ButtonMenu from "@/Components/ButtonMenu/ButtonMenu"
import CardMenu from "@/Components/CardsMenu/CardsItemsMenu"
import dados from '@/docks/ItemsMenu.json';
import { useState } from "react";
import Footer from "./Footer/Footer";


const Menu = ({ aoClicarNoCard }) => {


    const [itensMenu, setItensMenu] = useState(dados['Salgadinhos'])

    const aoClicar = (menuEscolhido) => {
        const itens = dados[menuEscolhido];
        setItensMenu(itens)
    }


    return (
       
            <div className="flex flex-col items-center w-full xl:gap-[80px] gap-[40px]">

                <div className="bg-linear-to-r from-roxo to-roxoSecundario shadow-xl/50 flex xl:gap-[90px] gap-[30px] w-full
                xl:mx-[42px] xl:pt-[30px] pt-[30px] xl:pb-[20px] pb-[10px] border-t-bege border-t-[1px] flex-wrap justify-center">

                    <ButtonMenu nome='Salgadinhos' escolhido={aoClicar} />
                    <ButtonMenu nome='Bolinhos' escolhido={aoClicar} />
                    <ButtonMenu nome='Empadas' escolhido={aoClicar} />
                    <ButtonMenu nome='Pratos' escolhido={aoClicar} />
                    <ButtonMenu nome='Doces' escolhido={aoClicar} />

                </div>

                <div className="xl:flex xl:flex-wrap grid grid-cols-2 place-items-center xl:w-fit w-full xl:mx-[100px] xl:gap-[50px] gap-[10px]">
                    {itensMenu.map((item) =>
                       
                            <button onClick={() => aoClicarNoCard(item)} key={item.id}>
                                <CardMenu
                                nomeDoItem={item.nome}
                                precoDoItem={item.preçoApartir}
                                imagemItems={item.imagem}
                                categoria={item.categoria}
                            />
                            </button>

                    )}

                </div>
                <Footer/>
            </div>

    )
}

export default Menu