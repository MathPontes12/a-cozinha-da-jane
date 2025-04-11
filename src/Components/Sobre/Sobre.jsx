import Titles from "../Titles/Titles"

const Sobre = () => {
    return(
        <div className="flex flex-col items-center xl:gap-20 gap-[60px]">
            <Titles titulo="Sobre" />
            <h1 className=" text-white text-justify xl:text-[22px] text-[16px] xl:mx-[112px] mx-[20px] xl:indent-20 indent-6 xl:leading-12 leading-8">
                Aliando o gostinho da comida caseira com a praticidade do dia a dia,
                A cozinha da Jane oferece uma deliciosa variedade de salgadinhos, tortas, bolinhos, dentre outros,
                feitos com ingredientes selecionados e muito carinho.
                Cada receita é preparada com o toque especial que lembra os momentos em família, garantindo sabor e qualidade em cada mordida.
                Seja para um lanche rápido, uma comemoração especial ou simplesmente para matar a vontade de algo gostoso,
                estamos aqui para tornar seu dia mais saboroso!
            </h1>
            <img className="xl:mx-[132px] mx-0 w-fit xl:h-[250px] h-[100px]" 
            src="/Images/sobre-imagem.png" alt="imagem do topico sobre" />
        </div>
    )
}

export default Sobre