import Price from "@/Components/Price/Price"

const SalsichaAssada = ({ preparado }) => {
    return (
        <div className="flex flex-col items-center gap-[40px]">
            {preparado.map((itens) =>

                <Price key={itens.id}>

                    <article className="flex flex-col gap-[15px]">
                        <div className="flex place-items-end gap-[10px]">
                            <p className="font-secundaria text-[26px] text-white">{itens.preco}</p>
                            <p className="font-secundaria text-[14px] text-white"> {itens.unidades} </p>
                        </div>
                        <hr className="w-full h-[2px] bg-white border-white" />
                        <div className="flex place-items-end gap-[10px] pl-[60px]">
                            <p className="font-secundaria text-[26px] text-white">{itens.precoPorcao}</p>
                            <p className="font-secundaria text-[14px] text-white"> {itens.unidades2} </p>
                        </div>
                    </article>
                </Price>

            )}
        </div>
    )
}

export default SalsichaAssada