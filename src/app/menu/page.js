'use client';

import Description from "@/Components/Description";
import Menu from "@/Components/Menu"
import WhatsappLogo from "@/Components/WhatsappLogo/WhatsappLogo"
import { useState } from "react";


const PageMenu = () => {

    const [ItemSelecionado, setItemSelecionado] = useState('')
   
    const aoClicarNoCard = (item) => {
        setItemSelecionado(item)

        // Alterar a URL para refletir o item selecionado
        window.history.pushState({}, '', `?item=${item.nome}`); // Usando nome do item para exemplo
    }

    const clicarPraVoltar = () => {
        setItemSelecionado()

         // Voltar para a URL sem o item
        window.history.pushState({}, '', '/');
    }

    return(

        <div className="relative flex flex-col items-center w-full h-fit 
        xl:gap-[80px] gap-[60px] xl:pt-[100px] pt-[50px]">

            {ItemSelecionado ? 
            
            <Description 
            categoria={ItemSelecionado.categoria}
            nome={ItemSelecionado.nome} 
            imagem={ItemSelecionado.imagem} 
            preparado={ItemSelecionado.preparado}
            congelado={ItemSelecionado.congelado}
            outros={ItemSelecionado.outros}
            sabores={ItemSelecionado.sabores}
            Voltar={clicarPraVoltar}
            
            /> 
            
            : <Menu aoClicarNoCard={aoClicarNoCard}/>}

            <WhatsappLogo />
        </div>

    )
}

export default PageMenu