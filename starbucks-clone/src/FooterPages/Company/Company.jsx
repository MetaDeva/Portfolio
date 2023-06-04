import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import CompanyBanner from './components/CompanyBanner'

import story from '../Company/images/starbucks-story.jpg'
import starph from '../Company/images/starbucks-philippines.jpeg'
import morecoffee from '../Company/images/more-coffee.jpg'
import ourcoffee from '../Company/images/our-coffee.jpg'
import ourpartners from '../Company/images/our-partners.jpg'
import ourcustomers from '../Company/images/our-customers.jpg'
import ourstores from '../Company/images/our-stores.jpg'
import ourneighborhood from '../Company/images/our-neighborhood.jpg'
import ourshareholders from '../Company/images/our-shareholders.jpg'

import './Company.css'

export default function Company() {

    const articleRef = React.useRef(null)

    const [navToggled, setNavToggled] = React.useState(false)

    // Scroll to Element (Button Banner)
    function scrollToElement() {
        articleRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Toggling Nav Burger
    function navToggledFunction() {
        setNavToggled(toggle => !toggle)
    }

    return (
        <div>
            <Header
                toggleFunction={navToggledFunction}
                toggled={navToggled}
            />
            <main>
                <CompanyBanner
                    articleRef={articleRef}
                    scrollToElement={scrollToElement}
                />

                <div className='article--row'>
                    <div className='article-content' ref={articleRef}>
                        <p>
                            To say Starbucks purchases and roasts high-quality whole bean coffee is very true.
                            That's the essence of what we do - but it hardly tells the whole story.
                        </p>

                        <h2 > The Starbucks Story </h2>

                        <img src={story} alt='' className='story--image' />

                        <p>
                            Back then, the company was a single store in Seattle's historic Pike Place Market.
                            From just a narrow storefront, Starbucks offered some of the world's finest fresh-roasted whole bean coffees.
                            The name, inspired by Moby Dick, evoked the romance of the high seas and the seafaring tradition of the early coffee traders.
                        </p>

                        <p>
                            In 1981, Howard Schultz (Starbucks chairman and chief executive officer) had first walked into a Starbucks store. From his first
                            cup of Sumatra, Howard was drawn into Starbucks and joined a year later.
                        </p>

                        <p>
                            In 1983, Howard traveled to Italy and became captivated with Italian coffee bars and the romance of the coffee experience.
                            He had a vision to bring the Italian coffeehouse tradition back to the United States. A place for conversation and a sense of
                            community. A third place between work and home. He left Starbucks for a short period of time to start his own II Giornale
                            coffeehouses and returned in August 1987 to purchase Starbucks with the help of local investors.
                        </p>

                        <p>
                            From the beginning, Starbucks set out to be a different kind of company. One that not only celebrated coffee and the rich tradition,
                            but that also brought a feeling of connection.
                        </p>

                        <h3> Starbucks in the Philippines </h3>

                        <img src={starph} alt='' />
                        <p>
                            In December 4, 1997, the Philippines had its first taste of the Starbucks Experience with its very first branch at the 6750 Ayala Building
                            in Makati City. Starbucks has since won the hearts of the Filipinos.
                        </p>
                        <p>
                            The opening of the 6750 Ayala store marked an important milestone in our history – the Philippines became the third market to open outside
                            North America
                        </p>
                        <p>
                            The tradition of warm hospitality, constant need for connection, and love for coffee – these are the qualities that make Starbucks Coffee and
                            the Filipino people a great culture fit.
                        </p>

                        <h3> More than just coffee </h3>

                        <img src={morecoffee} alt='' />

                        <p>
                            Our mission: to inspire and nurture the human spirit – one person, one cup, and one neighborhood at a time. Today, with more than 30,000 stores
                            in more than 75 markets, Starbucks is the premier roaster and retailer of specialty coffee in the world. And with every cup, we strive to bring
                            both our heritage and an exceptional experience to life.
                        </p>

                        <p>
                            Every day, we go to work hoping to do two things: share great coffee with our friends and help make the world a little better. It was true when the first
                            Starbucks opened in 1971 and it’s just as true today.
                        </p>

                        <h3> Our Mission </h3>

                        <p>
                            The global Starbucks Mission Statement is more than words on a piece of paper - it's the philosophy that guides how we do business every day
                        </p>

                        <p>
                            Here are the principles of how we live that every day:
                        </p>

                        <div className='row-content-container'>
                            <div className='row-content'>
                                <h4> Our Coffee </h4>
                                <img src={ourcoffee} alt='' />
                                <p>
                                    It has always been, and will always be, about quality. We're passionate about ethically sourcing the
                                    finest coffee beans, roasting them with great care, and improving the lives of people who grow them.
                                    We care deeply about all of this; our work is never done.
                                </p>
                            </div>

                            <div className='row-content'>
                                <h4> Our Partners </h4>
                                <img src={ourpartners} alt='' />
                                <p>
                                    We're called partners, because it's not just a job, it's our passion. Together, we embrace diversity to create a
                                    place where each of us can be ourselves. We always treat each other with respect and dignity. And we hold each other to
                                    that standard.
                                </p>
                            </div>

                            <div className='row-content'>
                                <h4> Our customers </h4>
                                <img src={ourcustomers} alt='' />
                                <p>
                                    It has always been, and will always be, about quality. We're passionate about ethically sourcing the finest coffee beans,
                                    roasting them with great care, and improving the lives of people who grow them. We care deeply about all of this; our work
                                    is never done.
                                </p>
                            </div>

                            <div className='row-content'>
                                <h4> Our Stores </h4>
                                <img src={ourstores} alt='' />
                                <p>
                                    When our customers feel this sense of belonging, our stores become a haven, a break from the worries outside, a place where
                                    you can meet with friends. It’s about enjoyment at the speed of life – sometimes slow and savored, sometimes faster. Always
                                    full of humanity.
                                </p>
                            </div>

                            <div className='row-content'>
                                <h4> Our Neighborhood </h4>
                                <img src={ourneighborhood} alt='neighborhood' />
                                <p>
                                    Every store is part of a community, and we take our responsibility to be good neighbors seriously. We want to be invited wherever
                                    we do business. We can be a force for positive action – bringing together our partners, customers and the community to contribute every day.
                                    Now we see that our responsibility – and our potential for good – is even larger. The world is looking to Starbucks to set the new standard,
                                    yet again. We will lead.
                                </p>
                            </div>

                            <div className='row-content'>
                                <h4> Our Shareholders </h4>
                                <img src={ourshareholders} alt='shareholders' />
                                <p>
                                    We know that as we deliver in each of these areas, we enjoy the kind of success that rewards our shareholders. We are fully accountable to
                                    get each of these elements right so that Starbucks – and everyone it touches – can endure and thrive.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </main>
            <Footer />
        </div >
    )
}
