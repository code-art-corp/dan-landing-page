import TokenomicsImg from '../assets/tokenomics.png'

export const TokenNomics = () => {
    return (
        <div id='tokenomics'>
            <div className="title">
                TOKENOMICS
            </div>
            <div className="Presentation">
                <div className="subPresentation">
                    <div className="subtitle">
                        Anyone can buy DANs through the official D.A.O platform responsible for the DAN network. <br />
                        DANs are backed by US Dollar, when someone buys them, D.A.O authorities create new coins on the network
                    </div>
                </div>
                <div className="subPresentation">
                    <div className="subtitle">
                        DAO guarantees the repurchase of coins as well, that is, if you have received DANs for any service provided and want to exchange for US dollars or any other available crypto, just make the operation through the DAO platform.
                    </div>
                </div>
                <img alt='referal' src={TokenomicsImg} width='100%' height='400px' style={{marginTop: '-20%'}}/>
            </div>
        </div>
    )
}