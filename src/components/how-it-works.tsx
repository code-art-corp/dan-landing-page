import ContractorImg from '../assets/contractor.png'
import JudgeImg from '../assets/judge.png'
import HiredImg from '../assets/hired.png'
import SuccessImg from '../assets/success.png'
import ErrorImg from '../assets/error.png'


export const HowItWorks = () => {
    return (
        <div id='hit'>
            <div className="title" style={{marginBottom: '5%'}}>
                How it works?
            </div>
            <div className="Presentation">
                <div className="subPresentation">
                    <div className="title2">
                        The contractor creates the contract by defining:
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                        justifyContent: 'space-around',
                        marginTop: '5%'
                    }}>
                        <img alt='referal' src={ContractorImg} width='150px' height='150px'/>
                        <div className="subtitle2">
                        <li>
                            The work description document
                        </li>
                        <li>
                            The employee: 0xOF912L...
                        </li>
                        <li>
                            The agreed value: 2.000 DANs
                        </li>
                        <li>
                            The judge: 0xJD92...
                        </li>
                        <li>
                            The judes fee: 30 DANs
                        </li>
                    </div>
                    </div>
                    <div className='subtitle'>
                        After creating the agreement, the total value of the contract is locked in the contractor's account, this guarantees the contractor that he has the value for the service.
                        No need to develop anything by either party, this is a native feature of the protocol 
                    </div>
                </div>
                <div className='subPresentation'>
                    <div className="title2">
                        The judge and the contracted signs the contract
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                        justifyContent: 'space-around',
                        alignContent: 'center',
                        alignItems: 'center',
                        marginTop: '5%'
                    }}>
                        <img alt='referal' src={JudgeImg} width='150px' height='150px'/>
                        <img alt='referal' src={SuccessImg} width='50px' height='50px'/>
                        <img alt='referal' src={HiredImg} width='150px' height='150px'/>
                    </div>
                </div>

            </div>
                <div className='title' style={{marginBottom: '5%'}}>
                    After the work has been done, the contract can have 3 types of finalizes...
                </div>
            <div className="Presentation">
                <div className="subPresentation">
                    <div className="title2">
                        1 - The contractor and employee notify the blockchain that the work is complete
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                        justifyContent: 'center',
                        marginTop: '5%'
                    }}>
                        <img alt='referal' src={HiredImg} width='150px' height='150px'/>
                        <img alt='referal' src={SuccessImg} width='50px' height='50px'/>
                        <img alt='referal' src={ContractorImg} width='150px' height='150px'/>
                    </div>
                    <div className='subtitle'>
                        The entire contract value is directed to the employee and the judge's fee is returned to the contractor
                    </div>
                </div>
                <div className="subPresentation">
                    <div className="title2">
                        2 - The Contractor and Hired notify the blockchain that the work was not done
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                        justifyContent: 'center',
                        marginTop: '5%'
                    }}>
                        <img alt='referal' src={HiredImg} width='150px' height='150px'/>
                        <img alt='referal' src={ErrorImg} width='50px' height='50px'/>
                        <img alt='referal' src={ContractorImg} width='150px' height='150px'/>
                    </div>
                    <div className='subtitle'>
                        The entire contract value is returned to the contractor.
                    </div>
                </div>
                <div className="subPresentation">
                    <div className="title2">
                        3 - The employee and the contractor do not enter into an agreement
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                        justifyContent: 'space-between',
                        marginTop: '5%'
                    }}>
                        <img alt='referal' src={SuccessImg} width='50px' height='50px'/>
                        <img alt='referal' src={HiredImg} width='150px' height='150px'/>
                        <img alt='referal' src={ContractorImg} width='150px' height='150px'/>
                        <img alt='referal' src={ErrorImg} width='50px' height='50px'/>
                    </div>
                    <div className='subtitle'>
                        The judge enters.
                    </div>
                </div>
                <div className="subPresentation">
                    <div className="title2">
                        In this case, the judge will analyze the case and decide for one of the parts
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                        justifyContent: 'center',
                        marginTop: '5%'
                    }}>
                        <img alt='referal' src={SuccessImg} width='50px' height='50px'/>
                        <img alt='referal' src={JudgeImg} width='150px' height='150px'/>
                        <img alt='referal' src={ErrorImg} width='50px' height='50px'/>
                    </div>
                    <div className='subtitle'>
                        The judge will take your fee and the contract amount will be directed from your decision
                    </div>
                </div>
                </div>
            </div>
    )
}