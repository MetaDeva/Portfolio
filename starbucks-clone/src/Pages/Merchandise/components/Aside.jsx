import React from 'react'

export default function Aside(props) {
    const { data, displayItems } = props


    return (
        <aside ref={props.asideRef}>
            <div className="aside-mainbox" ref={props.asideBoxRef}>

                <ul className='merch-first-ul first-layer-ul'>
                    <li className='metch-first-li first-layer-li'>
                        <span className='menu-type'>Merchandise</span>
                        <ul>
                            {
                                data
                                    .filter(item => item.type === "Merchandise")
                                    .map(item => item.category)
                                    .filter((category, index, arr) => arr.indexOf(category) === index)
                                    .map(category => {
                                        return (
                                            <li key={category} > <p className="merch-aside-choice aside-choice" onClick={() => displayItems(category)}> {category} </p> </li>
                                        )
                                    })
                            }
                        </ul>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

