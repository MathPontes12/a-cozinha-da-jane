import Price from "@/Components/Price/Price"


const Empadao = ({ preparado, congelado, outros, tipo1, tipo2, tipo3 }) => {
    return (
        <div className="flex flex-col items-center gap-[40px] ml-[-50px]">
            <div className="flex xl:flex-row flex-col xl:gap-[50px] gap-[60px]">
                {preparado.map((itens) =>

                    <Price key={itens.id}>

                        <article className="flex flex-col gap-[15px]">

                            <h1 className="text-white text-center font-secundaria text-[24px]">{tipo1}</h1>
                            <div className="flex place-items-end gap-[10px]">
                                <p className="font-secundaria text-[20px] text-white">{itens.preco}</p>
                                <p className="font-secundaria text-[14px] text-white"> {itens.unidades} </p>
                            </div>
                            <hr className="w-full h-[2px] bg-white border-white" />
                            <div className="flex place-items-end gap-[10px] pl-[30px]">
                                <p className="font-secundaria text-[20px] text-white">{itens.precoPorcao}</p>
                                <p className="font-secundaria text-[14px] text-white"> {itens.unidades2} </p>
                            </div>
                            <hr className="w-full h-[2px] bg-white border-white" />
                            <div className="flex place-items-end gap-[10px] pl-[60px]">
                                <p className="font-secundaria text-[20px] text-white">{itens.preco3}</p>
                                <p className="font-secundaria text-[14px] text-white"> {itens.unidades3} </p>
                            </div>
                        </article>
                    </Price>

                )}

                {congelado.map((itens) =>

                    <Price key={itens.id}>

                        <article className="flex flex-col gap-[15px]">

                            <h1 className="text-white text-center font-secundaria text-[24px]">{tipo2}</h1>
                            <div className="flex place-items-end gap-[10px]">
                                <p className="font-secundaria text-[20px] text-white">{itens.preco}</p>
                                <p className="font-secundaria text-[14px] text-white"> {itens.unidades} </p>
                            </div>
                            <hr className="w-full h-[2px] bg-white border-white" />
                            <div className="flex place-items-end gap-[10px] pl-[30px]">
                                <p className="font-secundaria text-[20px] text-white">{itens.precoPorcao}</p>
                                <p className="font-secundaria text-[14px] text-white"> {itens.unidades2} </p>
                            </div>
                            <hr className="w-full h-[2px] bg-white border-white" />
                            <div className="flex place-items-end gap-[10px] pl-[60px]">
                                <p className="font-secundaria text-[20px] text-white">{itens.preco3}</p>
                                <p className="font-secundaria text-[14px] text-white"> {itens.unidades3} </p>
                            </div>

                        </article>

                    </Price>
                )}

                {outros.map((itens) =>

                    <Price key={itens.id}>

                        <article className="flex flex-col gap-[15px]">

                            <h1 className="text-white text-center font-secundaria text-[24px]">{tipo3}</h1>
                            <div className="flex place-items-end gap-[10px]">
                                <p className="font-secundaria text-[20px] text-white">{itens.preco}</p>
                                <p className="font-secundaria text-[14px] text-white"> {itens.unidades} </p>
                            </div>
                            <hr className="w-full h-[2px] bg-white border-white" />
                            <div className="flex place-items-end gap-[10px] pl-[30px]">
                                <p className="font-secundaria text-[20px] text-white">{itens.precoPorcao}</p>
                                <p className="font-secundaria text-[14px] text-white"> {itens.unidades2} </p>
                            </div>

                        </article>

                    </Price>
                )}
            </div>

        </div>
    )
}

export default Empadao