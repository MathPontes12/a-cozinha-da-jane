import MiniCards from "./MiniCards"

const CardMenu = ({ nomeDoItem, precoDoItem, imagemItems, categoria }) => {
    return (

        // CARD DOS ITENS NA PAGINA MENU APÓS ESCOLHER AS CATEGORIAS

        <div className="group xl:w-[280px] w-[190px] h-fit flex flex-col items-center p-[30px] rounded-[10px] border-[2px]
         border-roxoTransparente bg-begeTransparente text-white font-secundaria 
         xl:hover:shadow-xl/20 xl:shadow-none shadow-xl/20 cursor-pointer">

            {/* IMAGEM E NOME DO ITEM */}
            <img className="w-fit xl:h-[150px] h-[100px] border-[2px] border-white rounded-[30px] 
            shadow-lg/30 xl:group-hover:scale-115 transition-transform duration-200 ease-in-out"
                src={`/Images/Cardapio/${categoria}/${imagemItems}.jpeg`} alt="foto do item do menu" />

            <h1 className="xl:text-[20px] text-[15px] mt-[27px] ">{nomeDoItem}</h1>

            <div className="flex flex-col mt-[15px] items-center xl:gap-[30px] gap-[20px]">

                {/* PREÇO */}
                <div className="flex xl:flex-row flex-col rounded-[70px] bg-white text-black font-secundaria pt-[7px] px-[7px] text-[12px] shadow-lg/20 w-fit">
                    <p className="font-secundaria text-[8px]">A partir de</p>
                    <MiniCards nome={precoDoItem}/>
                </div>

                {/* OPÇOES */}
                <div className="rounded-[70px] bg-roxo text-white border-white border-[1px] 
                font-secundaria p-[10px] xl:text-[14px] text-[12px]">
                    <p>
                        Veja as opções!
                    </p>
                </div>

            </div>

        </div>
    )
}

export default CardMenu