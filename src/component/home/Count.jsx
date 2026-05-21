import '../../App.css'

const Count = () => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 text-center container mx-auto">
            <div className="stats shadow">
                <div className="stat">
                    <h1 className="stat-value green">10</h1>
                <p className="stat-desc">Total Friends</p>
                </div>
            </div>
            <div className="stats shadow">
                <div className="stat">
                    <h1 className="stat-value green">3</h1>
                <p className="stat-desc">On Track</p>
                </div>
            </div>
            <div className="stats shadow">
                <div className="stat">
                    <h1 className="stat-value green">6</h1>
                <p className="stat-desc">Need Attention</p>
                </div>
            </div>
            <div className="stats shadow">
                <div className="stat  place-items-center">
                    <h1 className="stat-value green">10</h1>
                <p className="stat-desc">Interactions This month</p>
                </div>
            </div>
             <hr className="text-[#E9E9E9] w-screen container mx-auto pb-8 mt-6" />
        </div>
    );
};

export default Count;