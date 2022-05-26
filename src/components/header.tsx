import LogoImg from '../assets/logo.png'

export const Header = () => {
    return (
        <div className="Header">
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1
            }}>
                <img src={LogoImg} width='200px' height='200px' />
                <div className='title'>
                    D.A.N
                </div>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1
            }}>
                <div className='subtitle'>
                    <a href='#hit'> How it works </a>
                </div>

                <div className='subtitle'>
                    <a href='#tokenomics'>
                        Tokenomics
                    </a>
                </div>
                <div className='subtitle'>
                    <a href='#founders'> Founder
                    </a>
                </div>
                <div className='subtitle'>
                    <a href='#roadmap'>  Roadmap
                    </a>
                </div>


            </div>
        </div>
    )
}