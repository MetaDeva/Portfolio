import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import MerchandiseBanner from './components/MerchandiseBanner'
import MerchandiseItems from './components/MerchandiseItems'
import Aside from './components/Aside'


// Images
import searchIcon from '../Menu/images/search--icon.svg'
import shopee from '../Merchandise/images/shopee.png'
import lazada from '../Merchandise/images/lazada.png'
import X from '../Menu/images/x-icon.png'

import '../styles/MenuandMerch.css'

import { nanoid } from 'nanoid'

import merchItemsData from './merchandiseData'

export default function Merchandise() {

    const [merchData] = React.useState([merchItemsData]);
    const [isMerchandise] = React.useState(true)

    const scrollRef = React.useRef(null)

    const [navToggled, setNavToggled] = React.useState(false)
    const [inputToggle, setInputToggle] = React.useState(false)

    const [searchInput, setSearchInput] = React.useState('')
    const [isSearching, setIsSearching] = React.useState(false)

    const [isChosen, setIsChosen] = React.useState(false);
    const [selectedCategory, setSelectedCategory] = React.useState('');

    const [childItemSelected, setChildItemSelected] = React.useState('')
    const [childItemSelectedData, setchildItemSelectedData] = React.useState('')

    const [itemOverlaySwapTemplate, setItemOverlaySwapTemplate] = React.useState(false)

    const asideBoxRef = React.useRef(null)
    const asideRef = React.useRef(null)

    // Toggling Nav Burger
    function navToggledFunction() {
        setNavToggled(toggle => !toggle)
    }

    function scrollToElement() {
        scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }


    const inputToggledFunction = () => {
        // Perform the desired action when the media querry is at 768px 
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
            setInputToggle(true)
        }
    };

    // Set Chosen to true and false and gets the category selected
    function displayItems(category, searchInput) {
        setIsChosen(true);
        // Store the parameter in a EMPTY STATE
        setSelectedCategory(category);
        setSearchInput(searchInput)
        setIsSearching(false)
    }

    // Input functionality
    function inputDisplayItems(e) {
        setIsChosen(true)
        setIsSearching(true)
        setSearchInput(e.target.value)
    }

    // Triggers Menu <p> 
    function triggersMenu() {
        // If the isChosen is false, will make it to true 
        if (!isChosen) {
            setIsChosen(true);
        } else {
            setIsChosen(false);
            setSelectedCategory('');
        }
    }

    // Receives the selected item data from the child component | Data to the overlay
    function handleSelectedItem(boolean, item) {
        setChildItemSelected(boolean)
        setchildItemSelectedData(item)
    }

    // Exit Overlay
    function resetOverlayTemplate() {
        setChildItemSelected(false);
        // Activates when clicking an item with a different type inside of a different type (e.g Choices in the Food Overlay are drinks)
        setItemOverlaySwapTemplate(false)
    }


    const merchCoverElements = merchData.map(data => {
        return <MerchandiseItems
            key={nanoid()}
            data={data}
            category={data.category}
            type={data.type}
            imageUrl={data.imageSource}

            isChosen={isChosen}
            selectedCategory={selectedCategory}
            displayItems={displayItems}

            // Input
            searchInput={searchInput}
            isSearching={isSearching}

            // <P> MENU
            triggersMenu={triggersMenu}

            // Overlay
            transferValueItemToParent={handleSelectedItem}
        />;
    });

    const asideElements = merchData.map(data => {
        return <Aside
            key={nanoid()}
            data={data}
            displayItems={displayItems}
            asideBoxRef={asideBoxRef}
            asideRef={asideRef}
        />
    })

    const overlayElements = () => {
        if (childItemSelectedData.type === "Merchandise" || itemOverlaySwapTemplate) {
            return (
                <div className='overlay-background'>
                    <div className='overlay'>
                        <div className='overlay-imagebox'>
                            <img src={childItemSelectedData.imageSource} alt={childItemSelectedData.name} />
                        </div>
                        <div className='overlay-textbox'>
                            <div>
                                <div className='overlay-xbox'> <h3> {childItemSelectedData.name} </h3> <img src={X} onClick={resetOverlayTemplate} alt='' /> </div>
                                <h2 className='price'> {childItemSelectedData.price} </h2>

                                <div className='other-item-box'>
                                    {childItemSelectedData.links ?
                                        <div className='links-box'>
                                            <h3> Shop Now </h3>
                                            {childItemSelectedData.links.shopee ? <a href={childItemSelectedData.links.shopee} target="_blank" rel="noreferrer"> <img src={shopee} className='shopee' alt='' /> </a> : ''}
                                            {childItemSelectedData.links.lazada ? <a href={childItemSelectedData.links.lazada} target="_blank" rel="noreferrer"> <img src={lazada} className='lazada' alt='' /> </a> : ''}
                                        </div>
                                        : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <div>

            {childItemSelected ?

                overlayElements()

                : ''
            }

            <Header
                toggleFunction={navToggledFunction}
                toggled={navToggled}

                setInputToggled={setInputToggle}
                scrollToElement={scrollToElement}
                inputToggle={inputToggle}
                searchInput={searchInput}
                isMerchandise={isMerchandise}

                displayItems={displayItems}
                inputDisplayItems={inputDisplayItems}
            />
            <main>
                <MerchandiseBanner
                    scrollRef={scrollRef}
                    scrollToElement={scrollToElement}
                />

                <div>

                    <div className="menu--subheader" ref={scrollRef}>
                        <div className="menu--title">
                            <h2> Merchandise </h2>
                        </div>

                        <div className="menu--input-box">
                            <div className="menu--input">
                                <input
                                    type='text'
                                    placeholder='Search our merchandise'
                                    value={searchInput || ''}
                                    onChange={(e) => inputDisplayItems(e)}
                                />
                                <span> <img src={searchIcon} onClick={inputToggledFunction} alt='' /> </span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='row--menu-list' >

                    {asideElements}

                    {merchCoverElements}

                </div>

            </main>
            <Footer />
        </div>
    )
}
