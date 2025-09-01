import FieldContact from "@/Components/Field-contact/FieldContact"
import WhatsappLogo from "@/Components/WhatsappLogo/WhatsappLogo"
import Footer from "./Footer/Footer"

const Contact = () => {
    return (
        <div className="flex flex-col items-center w-full h-fit
        xl:pt-[100px] pt-[50px]">

            <div className="flex xl:flex-row flex-col xl:items-center items-center xl:text-start text-center xl:gap-[180px] gap-[50px] mb-[100px]">
                <FieldContact
                    nome="Central de Vendas"
                    children={
                        <div className="xl:mt-[100px] xl:leading-[40px] leading-[30px]">
                            <p>
                                Faça já sua encomenda.
                            </p>
                            <p>
                                De Seg a Sex das 09h às 17h.
                            </p>
                            <p>
                                Sáb das 09h às 15h.
                            </p>
                            <p >
                                Whatsapp: <strong>+55 21 99542-2555</strong>
                            </p>
                            <p className="font-black">
                                Pedidos com 3 dias de antecedência <br/> e confirmados mediante ao <br/> pagamento de 50%  do valor total
                            </p>
                        </div>

                    } />
                <FieldContact
                    nome="Formas de Pagamento"
                    children={
                        <div className="flex flex-col items-center xl:mt-[135px] xl:gap-[50px] gap-[10px]">
                            <img className="w-fit xl:h-[60px] h-[50px] rounded-2xl" src="/Images/Contact/pix.jpeg" alt="imagem do simbolo de pix" />
                            <div className="flex flex-col items-center gap-[10px]">
                                <img className="w-fit xl:h-[100px] h-[80px] p-[10px] rounded-2xl" src="/Images/Contact/cartoes.jpeg" alt="imagem do cartao" />
                                <p>
                                    crédito/débito
                                </p>
                            </div>
                        </div>
                    }
                />
                <FieldContact
                    nome="A empresa"
                    children={
                        <div className="xl:mt-[125px] xl:mb-[180px] xl:leading-[40px]">
                            <p>
                                A cozinha da Jane
                            </p>
                            <p>
                                CNPJ: 51.651.989/0001-34
                            </p>
                        </div>

                    } />
            </div>
            <WhatsappLogo />
            <Footer/>
        </div>
    )
}

export default Contact