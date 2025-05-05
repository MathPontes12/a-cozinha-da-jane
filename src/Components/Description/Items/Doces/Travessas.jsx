import MiniCards from "@/Components/CardsMenu/MiniCards"
import Price from "@/Components/Price/Price"


const Travessa = ({ preparado, sabores }) => {
    return (
        <div className="flex flex-col items-center gap-[40px]">
            {preparado.map((itens) =>

                <Price key={itens.id}>

                    <article className="flex flex-col gap-[15px]">
                        <div className="flex place-items-end gap-[10px]">
                            <p className="font-secundaria text-[26px] text-white">{itens.preco}</p>
                            <p className="font-secundaria text-[14px] text-white"> {itens.unidades} </p>
                        </div>
                    </article>
                </Price>

            )}



            <div className="flex gap-[20px]">
                {sabores.map((sabor) =>
                    <MiniCards nome={sabor.nome} className={`${sabor.cor} shadow-lg/20 w-fit`} key={sabor.id} />
                )}
            </div>
        </div>
    )
}

export default Travessa