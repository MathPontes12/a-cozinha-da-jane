
const SocialMediaBar = () => {
    return (
        
        // PARTE DAS MIDIAS SOCIAIS NA PAGINA PRINCIPAL
        <div className="bg-roxo flex flex-col items-center justify-center w-full h-fit py-[36px] gap-4">
            <h1 className="xl:text-[28px] text-[14px] text-white font-secundaria "> Siga A cozinha da Jane nas redes </h1>
            <a href="https://www.instagram.com/acozinhadajane/" target="_blank" rel="noopener noreferrer">
                <img className="bg-roxo w-auto xl:h-[68px] h-[48px] cursor-pointer hover:opacity-50" 
                src="/Images/SocialMedia/instagram.png" 
                />
            </a>
        </div>
    )
}

export default SocialMediaBar