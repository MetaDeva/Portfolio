import React from 'react'

export default function Poster(props) {
    return (
        <div className='column--tall'>

            <div className='first--content'>
                <div className="tall-column--images" style={{ backgroundImage: `url(${props.firstImageUrl})` }}></div>
                <div className='text-box'>
                    <h1> {props.title} </h1>
                    <h2> {props.desc} </h2>
                    <div className='button-box'>
                        <button> See More </button>
                    </div>
                </div>
            </div>

            <div className='second--content'>
                <div className="tall-column--images" style={{ backgroundImage: `url(${props.secondImageUrl})` }}></div>
                <div className='text-box'>
                    <h1> {props.secondTitle} </h1>
                    <h2> {props.secondDesc}</h2>
                    <div className='button-box'>
                        <button> Learn More </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
