import Banner from "@/Components/Banner/Banner"
import FieldContact from "@/Components/Field-contact/FieldContact"
import WhatsappLogo from "@/Components/WhatsappLogo/WhatsappLogo"

const Contact = () => {
    return (
        <div className="relative bg-marrom flex flex-col items-center w-full min-h-screen xl:gap-[100px] gap-[60px] xl:pb-[120px] pb-[60px]">

            <Banner />
            <div className="flex xl:flex-row flex-col xl:items-start items-center xl:gap-[220px] gap-[50px]">
                <FieldContact
                    nome="Central de Vendas"
                    children={
                        <div className="xl:mt-[100px] xl:leading-[40px] leading-[30px]">
                            <p>
                                Faça já sua encomenda.
                            </p>
                            <p>
                                De Seg a Sex das 09h às 19h.
                            </p>
                            <p>
                                Sáb das 09h às 17h.
                            </p>
                            <p >
                                Whatsapp: <strong>+55 21 99542-2555</strong>
                            </p>
                        </div>

                    } />
                <FieldContact
                    nome="Formas de Pagamento"
                    children={
                        <div className="flex flex-col items-center xl:mt-[100px] xl:gap-[50px] gap-[10px]">
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
                        <div className="xl:mt-[100px] xl:leading-[40px]">
                            <p>
                                A cozinha da Jane
                            </p>
                            <p>
                                CNPJ: 51.651.989/0001-34
                            </p>
                        </div>

                    } />
            </div>
            <WhatsappLogo/>
        </div>
    )
}

export default Contact