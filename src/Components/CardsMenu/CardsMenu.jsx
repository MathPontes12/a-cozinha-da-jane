import MiniCards from "./MiniCards"
import TitlesCardMenu from "./TitlesCardMenu"

const CardMenu = ({ nomeDoItem, saborEspecifico, imagemItems }) => {
    return (
        <div className="xl:w-[320px] w-[250px] h-fit flex flex-col items-center p-[30px] rounded-[30px] border-[2px]
         border-roxoTransparente bg-begeTransparente text-white font-secundaria shadow-xl/20">

            <img className="w-fit xl:h-[220px] h-[120px] border-[2px] border-white rounded-[30px] shadow-lg/30"
                src={`/Images/Menu/Cardapio/${imagemItems}.jpeg`} alt="foto do item do menu" />

            <h1 className="xl:text-[24px] text-[18px] mt-[27px] ">{nomeDoItem}</h1>

            <div className="flex flex-col mt-[20px] items-center gap-[10px]">
                <TitlesCardMenu nome='Sabor' />

                <div className="flex gap-[10px]">
                    {saborEspecifico.map((sabor) =>
                        <div key={sabor.id}>

                            <MiniCards nome={sabor.nome} cor={sabor.cor} />

                        </div>
                    )}
                </div>

            </div>

        </div>
    )
}

export default CardMenu