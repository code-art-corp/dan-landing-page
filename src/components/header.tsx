import LogoImg from '../assets/logo.png'

export const Header = () => {
    return (
        <div className="Header">
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'center',
                flex: 1,
            }}>
                <img src={LogoImg} width='200px' height='200px' />
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'center',
                flex: 1,
            }}>
                <div className='subtitle' style={{flexGrow: 4}}>
                    <a href='#hit'> How it works </a>
                </div>

                <div className='subtitle' style={{flexGrow: 1}}>
                    <a href='#tokenomics'>
                        Tokenomics
                    </a>
                </div>
                <div className='subtitle' style={{flexGrow: 4}}>
                    <a href='#founders'> Be a Founder
                    </a>
                </div>
                <div className='subtitle' style={{flexGrow: 1}}>
                    <a href='#roadmap'>  Roadmap
                    </a>
                </div>


            </div>
        </div>
    )
}