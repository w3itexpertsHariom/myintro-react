import { Link } from 'react-router-dom'


interface ProfileProps {
    title: string
    // surname?: string
    // age: number
    // children?: React.ReactNode
}

const ContectUs = (props: ProfileProps) => {
    
    return (
        <>
            <div className="dlab-bnr-inr text-center" data-content={props.title}>
                <div className="container">
                    <div className="dlab-bnr-inr-entry align-m text-center">
                        <h1 className="text-white">{props.title}</h1>
                        <div className="breadcrumb-row">
                            <ul className="list-inline">
                                <li><Link to="/">Home</Link></li>
                                <li>{props.title}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="social-sidebar">
                <ul>
                    <li><Link target="_blank" to="https://www.facebook.com/dexignzone/">Facebook</Link></li>
                    <li><Link target="_blank" to="https://twitter.com/dexignzones">Twitter</Link></li>
                    <li><Link target="_blank" to="https://www.linkedin.com/in/dexignzone">Linkedin</Link></li>
                </ul>
            </div>
        </>
    )
}

export default ContectUs