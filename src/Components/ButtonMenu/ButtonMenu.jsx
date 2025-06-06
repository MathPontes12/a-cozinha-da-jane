

const ButtonMenu = ({ nome, escolhido }) => {
    return(

        // BOTAO PRA ESCOLHA DA CATEGORIA NA PAGINA MENU
        
        <button onClick={() => escolhido(nome)} className="font-secundaria rounded-[70px] 
        xl:py-[20px] py-[10px] xl:px-[42px] px-[12px] text-white xl:text-[20px] text-[16px] 
        cursor-pointer hover:not-focus:opacity-50 focus:bg-roxo text-shadow-lg/30">
            {nome}
        </button>
    )
}

export default ButtonMenu