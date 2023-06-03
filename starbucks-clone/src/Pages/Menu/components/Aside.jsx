import React from 'react'

export default function Aside(props) {
    const { data, displayItems } = props


    return (
        <aside ref={props.asideRef}>
            <div className="aside-mainbox" ref={props.asideBoxRef}>
                <ul className='first-layer-ul'>
                    <li className='first-layer-li'>
                        <span className='menu-type'>Drinks</span>
                        <ul className='menu-ul'>
                            {
                                data
                                    .filter(item => item.type === "Drinks")
                                    .map(item => item.category)
                                    .filter((category, index, arr) => arr.indexOf(category) === index)
                                    .map(category => {
                                        return (
                                            <li key={category} > <p className="aside-choice" onClick={() => displayItems(category)}> {category} </p> </li>
                                        )
                                    })
                            }
                        </ul>
                    </li>
                </ul>

                <ul className='first-layer-ul'>
                    <li className='first-layer-li'>
                        <span className='menu-type'>Food</span>
                        <ul className='menu-ul'>
                            {data
                                .filter(item => item.type === "Food")
                                .map(item => item.category)
                                .filter((category, index, arr) => arr.indexOf(category) === index)
                                .map(category => {
                                    return (
                                        <li key={category}><p className="aside-choice" onClick={() => displayItems(category)}> {category} </p></li>
                                    )

                                })
                            }
                        </ul>
                    </li>
                </ul>

                <ul className='last first-layer-ul'>
                    <li className='first-layer-li'>
                        <span className='menu-type'>At Home Coffee</span>
                        <ul>
                            {
                                data
                                    .filter(item => item.type === "At Home Coffee")
                                    .map(item => item.category)
                                    .filter((category, index, arr) => arr.indexOf(category) === index)
                                    .map(category => {
                                        return (
                                            <li key={category}><p className="aside-choice" onClick={() => displayItems(category)}> {category} </p></li>
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

