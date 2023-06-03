import React from 'react'
import Header from '../../components/Header'
import BannerMenu from '../Menu/components/MenuBanner'
import MenuItems from '../Menu/components/MenuItems'
import Aside from './components/Aside'
import Footer from '../../components/Footer'

import searchIcon from '../Menu/images/search--icon.svg'
import X from '../Menu/images/x-icon.png'

import { nanoid } from 'nanoid'

import '../styles/MenuandMerch.css'

import itemsData from '../Menu/menuData'

export default function Menu() {

    const [menuData] = React.useState([itemsData]);

    const scrollRef = React.useRef(null)

    const [navToggled, setNavToggled] = React.useState(false)
    const [inputToggle, setInputToggle] = React.useState(false)

    const [searchInput, setSearchInput] = React.useState('')
    const [isSearching, setIsSearching] = React.useState(false)

    const [isChosen, setIsChosen] = React.useState(false);
    const [selectedCategory, setSelectedCategory] = React.useState('');

    const [childItemSelected, setChildItemSelected] = React.useState('')
    const [childItemSelectedData, setchildItemSelectedData] = React.useState('')

    const [isRandomItemsLoaded, setIsRandomItemsLoaded] = React.useState(false);
    const [clickedItemData, setClickedItemData] = React.useState('')

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

    // Generate 3 random items on overlay
    const drinks = getRandomItems(itemsData, "Drinks", 3);
    const foods = getRandomItems(itemsData, "Drinks", 1);

    function getRandomItems(items, itemType, count) {
        const filteredItems = items.filter(item => item.type === itemType);
        const randomItems = [];

        while (randomItems.length < count) {
            const randomIndex = Math.floor(Math.random() * filteredItems.length);
            const randomItem = filteredItems[randomIndex];
            randomItems.push(randomItem);
            filteredItems.splice(randomIndex, 1); // Remove the selected item from the filtered array
        }

        return randomItems;
    }

    // Clicking other items inside the overlay
    function clickedOthersItem(item) {
        setIsRandomItemsLoaded(true)
        setClickedItemData(item)
        setItemOverlaySwapTemplate(item.type === "Drinks" || item.type === "Food" ? true : null);
    }

    // Exit Overlay
    function resetOverlayTemplate() {
        setChildItemSelected(false);
        // Activates when clicking an item with a different type inside of a different type (e.g Choices in the Food Overlay are drinks)
        setItemOverlaySwapTemplate(false)

        setIsRandomItemsLoaded(false); // Clear the isRandomItemsLoaded state
        setClickedItemData({}); // Set the clickedItemData state to an empty object
    }



    const menuCoverElements = menuData.map(data => {
        return <MenuItems
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

    const asideElements = menuData.map(data => {
        return <Aside
            key={nanoid()}
            data={data}
            displayItems={displayItems}
            asideBoxRef={asideBoxRef}
            asideRef={asideRef}
        />
    })

    const overlayElements = () => {
        if (childItemSelectedData.type === "Drinks" || itemOverlaySwapTemplate) {
            return (
                <div className='overlay-background'>
                    <div className='overlay'>
                        <div className='overlay-imagebox'>
                            <img src={isRandomItemsLoaded ? clickedItemData.imageSource : childItemSelectedData.imageSource} alt={childItemSelectedData.name} />
                        </div>
                        <div className='overlay-textbox'>
                            <div>
                                <div className='overlay-xbox'> <h3> {isRandomItemsLoaded ? clickedItemData.name : childItemSelectedData.name} </h3> <img src={X} onClick={resetOverlayTemplate} alt='' /> </div>

                                <p>{isRandomItemsLoaded ? clickedItemData.calories : childItemSelectedData.calories} calories</p>

                                <p> {isRandomItemsLoaded ? clickedItemData.description : childItemSelectedData.description} </p>
                            </div>

                            <div className='other-item-box'>
                                <h3>You may also like</h3>

                                <div className='other-item-row'>

                                    {
                                        drinks.map(data => (
                                            <div className='other-item' onClick={() => clickedOthersItem(data)}>
                                                <div className='other-item-image-box'> <img src={data.imageSource} alt='' /> </div>
                                                <p> {data.name} </p>
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else if (childItemSelectedData.type === "Food" || itemOverlaySwapTemplate) {
            return (
                <div className='overlay-background'>
                    <div className='overlay' style={{ height: '23rem' }}>
                        <div className='overlay-imagebox'>
                            <img src={isRandomItemsLoaded ? clickedItemData.imageSource : childItemSelectedData.imageSource} alt={childItemSelectedData.name} />
                        </div>
                        <div className='overlay-textbox'>
                            <div>
                                <div className='overlay-xbox'> <h3> {isRandomItemsLoaded ? clickedItemData.name : childItemSelectedData.name} </h3> <img src={X} onClick={resetOverlayTemplate} alt='' /> </div>
                                <p> {isRandomItemsLoaded ? clickedItemData.description : childItemSelectedData.description} </p>
                            </div>
                            {childItemSelectedData.description && (
                                <div className='other-item-box'>
                                    <h3>Best Paired with</h3>
                                    <div className='other-item-row'>
                                        {
                                            foods.map(data => (
                                                <div className='other-item' onClick={() => clickedOthersItem(data)}>
                                                    <div className='other-item-image-box'>
                                                        <img src={data.imageSource} alt='' />
                                                    </div>
                                                    <p>{data.name}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )
        }
        else if (childItemSelectedData.type === "At Home Coffee") {
            return (
                <div className='overlay-background'>
                    <div className='overlay' style={{ height: '23rem' }}>
                        <div className='overlay-imagebox'>
                            <img src={childItemSelectedData.imageSource} alt={childItemSelectedData.name} />
                        </div>
                        <div className='overlay-textbox'>
                            <div>
                                <div className='overlay-xbox'> <h3> {childItemSelectedData.name} </h3> <img src={X} onClick={resetOverlayTemplate} alt='' /> </div>
                                <p> {childItemSelectedData.description}</p>
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

                displayItems={displayItems}
                inputDisplayItems={inputDisplayItems}
            />
            <main>

                <BannerMenu
                    scrollRef={scrollRef}
                    scrollToElement={scrollToElement}
                />
                <div>

                    <div className="menu--subheader" ref={scrollRef}>
                        <div className="menu--title">
                            <h2> Menu </h2>
                        </div>

                        <div className="menu--input-box">
                            <div className="menu--input">
                                <input
                                    type='text'
                                    placeholder='Search our drinks, food, coffee'
                                    value={searchInput || ''}
                                    onChange={(e) => inputDisplayItems(e)} />
                                <span> <img src={searchIcon} onClick={inputToggledFunction} alt='' /> </span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='row--menu-list' >

                    {asideElements}

                    {menuCoverElements}


                </div>

            </main >
            <Footer />
        </div >
    )
}

