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
        </main>
    )
}

export default HomePage;