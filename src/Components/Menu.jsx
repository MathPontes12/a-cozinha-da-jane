'use client';

import ButtonMenu from "@/Components/ButtonMenu/ButtonMenu"
import CardMenu from "@/Components/CardsMenu/CardsItemsMenu"
import dados from '@/docks/ItemsMenu.json';
import { useState } from "react";


const Menu = ({ aoClicarNoCard }) => {


    const [itensMenu, setItensMenu] = useState([])

    const aoClicar = (menuEscolhido) => {
        const itens = dados[menuEscolhido];
        setItensMenu(itens)
    }


    return (
       
            <div className="flex flex-col items-center xl:gap-[80px] gap-[40px]">

                <div className="bg-bege border-roxo flex xl:gap-[0px] border-[4px] 
                rounded-[70px] xl:my-[20px] xl:mx-[42px] xl:p-0 p-[5px] flex-wrap justify-center">

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


            </div>

    )
}

export default Menu