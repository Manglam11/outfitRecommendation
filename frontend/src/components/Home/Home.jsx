import React from 'react';
import Spline from '@splinetool/react-spline';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex flex-col min-h-screen relative'>
                {/* Hero Section */}
                <div className="absolute right-0 top-1/3 transform -translate-y-1/4 z-10 flex flex-col justify-center items-end text-right text-white p-8">
                    <h1 className="text-5xl font-bold mb-4">
                        Welcome to <br />
                        <span className="text-6xl">WeatherFit!</span>
                    </h1>
                    <p className="text-xl mb-2">
                        Get real-time outfit recommendations <br />
                        based on your local weather.
                    </p>
                </div>

                {/* Spline Component */}
                <main className="flex-grow">
                    <Spline scene="https://prod.spline.design/U8-s2MBeN9SQg18H/scene.splinecode" className="w-full h-full" />
                    <div className="absolute bottom-0 right-0 w-20 h-8 bg-transparent z-50"></div>

                </main>
            </div>
        </div>
    );
}

export default Home;
