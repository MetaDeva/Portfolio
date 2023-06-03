import React from 'react'

export default function MerchandiseItems(props) {
    const { data, receiveAsideData, displayItems, triggersMenu, transferValueItemToParent } = props

    // Receiving the Aside Data
    const [asideData] = React.useState(receiveAsideData)

    const [itemSelected, setItemSelected] = React.useState(false)


    // First image source categories
    const merchandiseCategory = []

    // Gets the First image of each categories
    for (const item of data) {
        if (item.type === "Merchandise") {
            if (!(item.category in merchandiseCategory)) {
                merchandiseCategory[item.category] = item.imageSource
            }
        }
    }

    function itemIsSelected(item) {

        // Sets item selected to true
        const itemSelectedBoolean = !itemSelected
        setItemSelected(itemSelectedBoolean)

        // Transfer boolean and data to parent
        transferValueItemToParent(itemSelectedBoolean, item)
    }

    // Displays Item Depending on the Category
    const itemsDisplay = (
        <div className='category-clicked-content-container'>
            {props.isSearching

                ?

                <div className='category-clicked-content'>
                    {
                        data.filter(item =>
                        (
                            item.name.toLowerCase().includes(props.searchInput.toLowerCase()) ||
                            item.category.toLowerCase().includes(props.searchInput.toLowerCase())

                        ))
                            // Maps each filtered data and returns only the subCategory
                            .map(item => item.category)
                            // Filters again but selecting only the FIRST subcategory (avoid duplicates)
                            .filter((category, index, arr) => arr.indexOf(category) === index)
                            // Maps each of the filtered subCategory
                            .map(category => (
                                <div key={category} className='first menu--content'>
                                    <div className='main--subcategory-title'>
                                        <h2>{category}</h2>
                                    </div>

                                    {
                                        data
                                            // Filters the data if the menu item category matches the selected category, and if the subCategory matches with the mapped subCategory
                                            .filter(item =>
                                                (
                                                    item.name.toLowerCase().includes(props.searchInput.toLowerCase()) ||
                                                    item.category.toLowerCase().includes(props.searchInput.toLowerCase())

                                                ) &&
                                                item.category === category)
                                            // Maps the filtered data above
                                            .map(item => (
                                                <div className='menu--items' key={item.id} onClick={() => itemIsSelected(item)}>
                                                    <div className='menu-image--wrapper'>
                                                        <img src={item.imageSource} alt={item.name} />
                                                    </div>
                                                    <h4 className='item--name'>{item.name}</h4>
                                                </div>
                                            ))
                                    }
                                </div>
                            ))
                    }

                </div>

                :

                <div>
                    <div className='menu--back-box'>
                        <p onClick={() => triggersMenu()}> Menu </p> / <span>{props.selectedCategory}</span>
                    </div>
                    <div className='category--title-box'>
                        <h3>{props.selectedCategory}</h3>
                    </div>

                    {
                        data
                            // Filters the data if the menu item matches with the selected category and if the item contains a subCategory
                            .filter(item =>
                                (item.category === props.selectedCategory || item.category === asideData) &&
                                item.subCategory !== "")
                            // Maps each filtered data and returns only the subCategory
                            .map(item => item.subCategory)
                            // Filters again but selecting only the FIRST subcategory (avoid duplicates)
                            .filter((subCategory, index, arr) => arr.indexOf(subCategory) === index)
                            // Maps each of the filtered subCategory
                            .map(subCategory => (

                                <div key={subCategory} className='first menu--content'>
                                    <div className='main--subcategory-title'>
                                        <h2>{subCategory}</h2>
                                    </div>

                                    {
                                        data
                                            // Filters the data if the menu item category matches the selected category, and if the subCategory matches with the mapped subCategory
                                            .filter(item =>
                                                (item.category === props.selectedCategory || item.category === asideData) &&
                                                item.subCategory === subCategory)
                                            // Maps the filtered data above
                                            .map(item => (
                                                <div className='menu--items' key={item.id} onClick={() => itemIsSelected(item)}>
                                                    <div className='menu-image--wrapper'>
                                                        <img src={item.imageSource} alt={item.name} />
                                                    </div>
                                                    <h4 className='item--name'>{item.name}</h4>
                                                </div>
                                            ))
                                    }
                                </div>
                            ))
                    }


                    <div className='category-clicked-content'>

                        {
                            data
                                // FIlters the menu items which doesnt have any subCategory
                                .filter(item =>
                                    (item.category === props.selectedCategory || item.category === asideData) &&
                                    item.subCategory === '')
                                .map(item => (
                                    <div className='menu--items' key={item.id} onClick={() => itemIsSelected(item)}>
                                        <div className='menu-image--wrapper'>
                                            <img src={item.imageSource} alt={item.name} />
                                        </div>
                                        <h4 className='item--name'>{item.name}</h4>
                                    </div>
                                ))
                        }
                    </div>

                </div >

            }
        </div>

    );

    return (
        <div className='menu--content-container'>
            {props.isChosen

                ?

                itemsDisplay

                :

                <div className='menu--content'>

                    <div className='main--category-title'>
                        <h2>Merchandise</h2>
                    </div>

                    {
                        Object.entries(merchandiseCategory).map(([category, link]) => {
                            return (
                                <div className='items--link-box' key={category} onClick={() => displayItems(category)}>
                                    <div className='image--box'>
                                        <img src={link} alt={category} />
                                    </div>
                                    <p>{category}</p>
                                </div>
                            )
                        })
                    }

                </div>
            }
        </div>
    );
}
