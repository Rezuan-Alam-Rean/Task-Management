import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src="https://i.ibb.co/6ZcsCk0/download.jpg" className="w-3/4 rounded-lg shadow-2xl" />
                    <img src="https://i.ibb.co/dWYf6Qj/stock-photo-tasks-word-on-wooden-cubes-on-a-beautiful-gray-background-business-concept-1904598853.jpg" className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl" />
                </div>
                <div className='lg:w-1/2 space-y-5 p-4'>
                    <h3 className='text-5xl text-orange-500 font-bold'>Tasks !</h3>
                    <h1 className="text-3xl font-bold">Efficient Task Management Tailored for You</h1>
                    <p className="py-6">Discover an unparalleled task management experience at Task Manager. Our meticulously designed system offers modern features, intuitive task tracking, and efficiency beyond compare.</p>
                    <p className="py-6">Explore a user-friendly interface complemented by top-notch functionalities.</p>
                    <Link to="/login">
                        <button className="btn btn-warning">Let’s Explore</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
