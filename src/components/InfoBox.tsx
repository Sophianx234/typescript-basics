import { ReactNode } from "react"
type HintBoxProps = {
    type: 'hint';
    children: ReactNode
}
type WarningBoxProps = {
    children: ReactNode;
    type: 'warning';
    severity: 'low'| 'medium'| 'high';
    
}

type InfoBoxProps = HintBoxProps | WarningBoxProps


export default function InfoBox(props:InfoBoxProps){
    const {children} = props
    if(props.type === 'hint'){

        return <aside className="infobox infobox-hint">
        <p>{children}</p>
    </aside>
    }
    const {severity} = props
    return (
        <aside className={`infobox infobox-warning warning--${severity}`}>
            <h2>Warning</h2> 
            <p>{children}</p>
        </aside>
    )
}