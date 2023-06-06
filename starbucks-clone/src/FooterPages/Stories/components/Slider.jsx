import React from 'react';

import next from '../images/next.png';
import previous from '../images/previous.png';

export default function Slider(props) {
    const { data } = props;

    // Set default display of slide to Planets
    const [selectedCategory, setSelectedCategory] = React.useState('Planet');

    // <h4> picked value
    const [pickedCategory, setPickedCategory] = React.useState(false);


    // Buttons
    const [nextToggled, setNextToggled] = React.useState(false);
    const [prevToggled, setPrevToggled] = React.useState(false);

    console.log(pickedCategory, prevToggled);
    // Group of 3 index
    const [currentGroupIndex, setCurrentGroupIndex] = React.useState(0);

    // Filter data based on selected category
    const filteredData = data.filter(item => item.category === selectedCategory);

    // Split the filtered data into groups of three
    let groupedData = [];
    for (let i = 0; i < filteredData.length; i += 3) {
        groupedData.push(filteredData.slice(i, i + 3));
    }

    // Get the current group of slider contents
    const currentGroup = groupedData[currentGroupIndex];


    // When clicking Planets and People below the Article
    function getCategory(category) {
        setSelectedCategory(category);
        setPickedCategory(true);
        setCurrentGroupIndex(0);
        setNextToggled(false)
    }

    // Next button
    function nextSlide() {
        if (currentGroupIndex === groupedData.length - 1) {
            setNextToggled(true);
            setPrevToggled(false);

            // Displays the current slides
            setCurrentGroupIndex(0);
        } else {
            setNextToggled(true);
            setPrevToggled(false);

            // Displays the next slide
            setCurrentGroupIndex(currentGroupIndex + 1);
        }
    }

    // Prev button
    function prevSlide() {
        if (currentGroupIndex === 0) {
            setPrevToggled(true);
            setNextToggled(false);

            // Displays previous slide
            setCurrentGroupIndex(groupedData.length - 1);
        } else {
            setPrevToggled(true);
            setNextToggled(false);

            // Displays previous slide
            setCurrentGroupIndex(currentGroupIndex - 1);
        }
    }

    // Resize
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    React.useEffect(() => {
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div className='slider-container'>
            <div className='slider-content-container'>
                <h2> Articles </h2>
                <div className='category-container'>
                    {data
                        .map(obj => obj.category)
                        .filter((category, index, arr) => arr.indexOf(category) === index)
                        .map(category => (
                            <h4 key={category} onClick={() => getCategory(category)} className={selectedCategory === category ? 'active' : ''}>
                                {category}
                            </h4>
                        ))}
                </div>
                <div className='slider-main'>
                    <div className='slider--outer'>
                        {!nextToggled ? (
                            <img
                                src={next}
                                className='next'
                                alt='next'
                                onClick={nextSlide} />
                        ) : (
                            <img
                                src={previous}
                                className='previous'
                                alt='previous'
                                onClick={prevSlide}
                            />
                        )}
                        <div className='slider--inner'>
                            {
                                !isMobile ?
                                    currentGroup.map(data => (
                                        <div key={data.title} className='slider-content'  >
                                            <div
                                                className='slider-image'
                                                style={{ backgroundImage: `url(${data.imageURL})` }}
                                            >

                                            </div>
                                            <div className='slider-text-content'>
                                                <h4>{data.category}</h4>
                                                <h2>{data.title}</h2>
                                                <p>{data.description}</p>
                                            </div>
                                        </div>
                                    ))
                                    :
                                    data
                                        .filter(item => item.category === selectedCategory)
                                        .map(data => {
                                            return (
                                                <div key={data.title} className='slider-content'  >
                                                    <div
                                                        className='slider-image'
                                                        style={{ backgroundImage: `url(${data.imageURL})` }}
                                                    >

                                                    </div>
                                                    <div className='slider-text-content'>
                                                        <h4>{data.category}</h4>
                                                        <h2>{data.title}</h2>
                                                        <p>{data.description}</p>
                                                    </div>
                                                </div>
                                            )
                                        })

                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
