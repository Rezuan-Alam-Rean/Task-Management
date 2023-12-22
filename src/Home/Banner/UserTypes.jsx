

const UserTypes = () => {
    const users = [
        { type: 'Developers', description: 'Developers can use our platform to manage their coding tasks and projects.', imageUrl: 'https://i.ibb.co/vDTccT9/samsung-memory-xr-Wl-Giv8m-4-unsplash.jpg' },
        { type: 'Corporate Professionals', description: 'Corporate professionals can use our platform to keep track of their work assignments and deadlines.', imageUrl: 'https://i.ibb.co/SRq6K3W/altumcode-d-MUt0-X3f59-Q-unsplash.jpg' },
        { type: 'Bankers', description: 'Bankers can use our platform to manage their financial tasks and client meetings.', imageUrl: 'https://i.ibb.co/vdrKRCz/ibrahim-boran-Jhbr-PBIZj0o-unsplash.jpg' },
        // Add more user types here...
    ];

    return (
        <div className="container mx-auto px-4 py-5">
            <h2 className="text-2xl font-bold mb-5 text-center">Who's using our website?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {users.map((user, index) => (
                    <div key={index} className="rounded overflow-hidden shadow-lg p-4 bg-white dark:bg-gray-800">
                        <img className="w-full h-64 object-cover" src={user.imageUrl} alt={user.type} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{user.type}</div>
                            <p className="text-gray-700 dark:text-gray-400 text-base">{user.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserTypes;
