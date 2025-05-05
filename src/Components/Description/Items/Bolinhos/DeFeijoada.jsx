import Price from "@/Components/Price/Price"


const BolinhoDeFeijoada = ({ preparado, congelado, tipo1, tipo2 }) => {
    return (
        <div className="flex flex-col items-center xl:gap-[40px] gap-[70px]">
            <div className="flex xl:flex-row flex-col xl:gap-[100px] gap-[60px]">
                {preparado.map((itens) =>

                    <Price key={itens.id}>

                        <article className="flex flex-col gap-[15px]">

                            <h1 className="text-white text-center font-secundaria text-[24px]">{tipo1}</h1>
                            <div className="flex place-items-end gap-[10px]">
                                <p className="font-secundaria text-[26px] text-white">{itens.preco}</p>
                                <p className="font-secundaria text-[14px] text-white"> {itens.unidades} </p>
                            </div>

                        </article>
                    </Price>

                )}

                {congelado.map((itens) =>

                    <Price key={itens.id}>

                        <article className="flex flex-col gap-[15px]">

                            <h1 className="text-white text-center font-secundaria text-[24px]">{tipo2}</h1>
                            <div className="flex place-items-end gap-[10px]">
                                <p className="font-secundaria text-[26px] text-white">{itens.preco}</p>
                                <p className="font-secundaria text-[14px] text-white"> {itens.unidades} </p>
                            </div>

                        </article>
                    </Price>

                )}
            </div>

        </div>
    )
}

export default BolinhoDeFeijoada