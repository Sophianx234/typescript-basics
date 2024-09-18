import { ReactNode } from "react"

type InfoBoxProps = {
    children: ReactNode;
    type: 'hint'| 'warning'
}

export default function InfoBox({children, type}:InfoBoxProps){
    if(type === 'hint'){

        return <aside className="infobox infobox-hint">
        <p>{children}</p>
    </aside>
    }
    return (
        <aside className="infobox infobox-warning warning--medium">
            <h2>Warning</h2> 
            <p>{children}</p>
        </aside>
    )
}