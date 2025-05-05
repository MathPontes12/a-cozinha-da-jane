
import SwitchCase from "./Description/SwitchCase"


const Description = ({ nome, imagem, preparado, congelado, outros, sabores, Voltar, categoria }) => {

    const fazerPedido = (nome) => {


        // poe na variavel o encode com a frase
        const mensagem = encodeURIComponent(`Gostaria de fazer um pedido de ${nome}`)
        // numero do celular
        const numero = '5521995422555'

        // acessa a url do whatsapp no numero e com a mensagem
        const url = `https://wa.me/${numero}?text=${mensagem}`;
        //quando clicar abre uma nova janela
        window.open(url, '_blank');
    }


    return (

        // SECTION COM NOME, FOTO, E DESCRIÇAO DO ITEM SELECIONADO
        <section className="flex xl:flex-row flex-col justify-center w-full xl:gap-[100px] gap-[30px]">
            <img className="border-[2px] border-white w-fit xl:h-[370px] h-[250px] rounded-[10px] xl:mx-0 mx-auto" src={`./Images/Cardapio/${categoria}/${imagem}.jpeg`} alt="imagem do item" />
            <div className="flex flex-col items-center">
                <h1 className="font-primaria text-[60px] text-white shadow-black text-shadow-lg/30">{nome}</h1>

                <div className="flex flex-col items-center mt-[50px] gap-[40px]">

                    <SwitchCase nome={nome} preparado={preparado} sabores={sabores} congelado={congelado} outros={outros} />

                    <button onClick={() => fazerPedido(nome)} className="flex justify-center border-[1px] p-[12px] mt-[20px]
                    bg-roxo text-white text-[20px] rounded-[20px] font-secundaria hover:scale-110 cursor-pointer">
                        Fazer o pedido
                    </button>
                    <button onClick={() => Voltar()} className="justify-center rounded-[20px] border-[1px] p-[12px] mt-[-20px] h-fit
                    bg-roxo text-white text-[12px] font-secundaria hover:scale-110 cursor-pointer">
                        Voltar pro cardápio
                    </button>

                </div>

            </div>
            
        </section>
    )
}

export default Description