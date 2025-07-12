

const ButtonMenu = ({ nome, escolhido }) => {
    return(

        // BOTAO PRA ESCOLHA DA CATEGORIA NA PAGINA MENU
        
        <button 
        onClick={() => escolhido(nome)} 
        className="font-secundaria text-white xl:text-[18px] text-[16px] 
        cursor-pointer focus:border-b-white focus:border-b-[2px] text-shadow-lg/30">
            {nome}
        </button>
    )
}

export default ButtonMenu