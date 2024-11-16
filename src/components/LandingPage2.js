const LandingPage2 = () => {
    const cards = [
        {
            title: "Delhi, India",
            price: "₹4000",
            days: " 7 Days Tour",
            image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTUO10mou6sHujp9PT_wZzb3TkULHfezwUJHJu-7-J3NM_Iutvi6J-NujAzfzB-oQCZVqhMLuTyI3ewui9bTFrvXXqVG3DTb6LpmIXjTw"
        },
        {
            title: "Delhi, India",
            price: "₹4000 ",

            days: " 7 Days Tour",
            image: "https://lh5.googleusercontent.com/p/AF1QipNT3MFYBjz2Mf13lhr3Ib3742ksR0rVlVphOy5z=w675-h390-n-k-no"
        },
        {
            title: "Delhi, India",
            price: "₹4000 ",
            days: " 7 Days Tour",
            image: "https://lh5.googleusercontent.com/p/AF1QipO6KtNHDGsHWavlnRwC-74q4BXvxh9RNXB_1cHU=w675-h390-n-k-no"
        },
        {
            title: "Delhi, India",
            price: "₹4000",
            days: " 7 Days Tour",
            image: "https://lh5.googleusercontent.com/p/AF1QipObKAQg1YMXpBQtEt3qeGi-2MY8M848TzuIVIKN=w675-h390-n-k-no"
        },
    ];

    return (
        <div className=" min-h-screen px-8 flex mb-10 flex-col items-center">
            <section className="text-center p-6">
                {/* Heading */}
                <h1 className="text-4xl font-bold flex flex-col text-gray-900  sm:text-3xl lg:text-4xl mb-4">
                    We can do anything we want to
                    <span>if we stike to it long enough</span>
                </h1>

                {/* Paragraph */}
                <p className="text-lg text-gray-600 mb-8">
                    Do what you can, with what you have, where you are.
                </p>

                {/* Button */}
                <button className="px-6 py-3 text-white font-semibold bg-green-600 rounded-full hover:bg-green-700 transition duration-200 mb-8">
                    See All Itineraries
                </button>
            </section>

            {/* Cards Section */}
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-4 lg:gap-x-6">
                {cards.map((card, index) => (
                    <div key={index} className={`bg-slate-50 rounded-lg  shadow-lg p-1 overflow-hidden ${index === 1 || index === 2 ? 'transform translate-y-12 scale-75' : ''} w-80 h-80`}>
                        <img src={card.image} alt={card.title} className="w-full rounded-xl h-3/4 " />
                        <div className="p-4">
                            <h2 className="text-lg font-bold">{card.title}</h2>
                            <div className="flex justify-between mr-20 items-center mt-1">
                                <span className="text-lg font-bold  text-green-600">{card.price}</span>
                                <span className="text-sm font-medium text-gray-500">{card.days}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LandingPage2;
