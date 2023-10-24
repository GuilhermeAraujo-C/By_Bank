import Style from './css/Serviços.module.css'

function Serviços(){
    return(
        <section id='02' className={Style.caixa2}>
            <h4>Nossos serviços</h4>
            <div className={Style.conteudo}>
                <div className={Style.serviço}>
                    <h6>Conta Digital</h6>
                    <p>Com o <bdi>cartão de crédito</bdi> Neon,
                        você só paga o que gasta e pode
                        ajustar seu próprio limite.</p>
                </div>
                <div className={Style.serviço}>
                    <h6>Empréstimo</h6>
                    <p>Transparentes, seguros e do seu jeito. Opções de empréstimos que deixam você no <bdi>controle</bdi> do início ao fim.</p>
                </div>
                <div className={Style.serviço}>
                    <h6>Pix no crédito</h6>
                    <p>Faça um Pix e pague com o <bdi>cartão de crédito:</bdi> não use o saldo da sua conta e concentre os gastos no cartão.</p>
                </div>
            </div>
        </section>
    )
}

export default Serviços