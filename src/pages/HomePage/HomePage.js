import './HomePage.scss';

function HomePage() {
    return (
        <main className="home">
            <div className='stars'></div>
            <div className='stars2'></div>
            <div className='stars3'></div>

            <section className='home__picture'>
                <div className='home__picture-img'></div>
                <div className='ship'>
                    <div className='ship-rotate'>
                        <div className='pod'></div>
                        <div className='fuselage'></div>
                    </div>
                </div>
            </section>

            <h1 className='home__title'>
                ANDREA MATOS
            </h1>

            <section className='home__buttons'>
                <div className='home__buttons-button'>
                    PROJECTS
                </div>
                <div className='home__buttons-button'>
                    WORK HISTORY
                </div>
                <div className='home__buttons-button'>
                    EDUCATION
                </div>
            </section>
        </main>
    )
}

export default HomePage;