
import { use } from 'react';
import '../../App.css'
import { DetailsContext } from '../context/DetailsProvider';


const Count = () => {
    
    const {friends} = use(DetailsContext)

    const onTrack = friends.filter((friend)=> friend.status === "on-track");
    const attention = friends.filter((friend) => friend.status === "almost due" || friend.status === "overdue");
    const thisMonth = friends.filter((friend) => friend.days_since_contact <= 30)
    
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 text-center container mx-auto">
            <div className="stats shadow">
                <div className="stat">
                    <h1 className="stat-value green">{friends.length}</h1>
                <p className="stat-desc">Total Friends</p>
                </div>
            </div>
            <div className="stats shadow">
                <div className="stat">
                    <h1 className="stat-value green">{onTrack.length}</h1>
                <p className="stat-desc">On Track</p>
                </div>
            </div>
            <div className="stats shadow">
                <div className="stat">
                    <h1 className="stat-value green">{attention.length}</h1>
                <p className="stat-desc">Need Attention</p>
                </div>
            </div>
            <div className="stats shadow">
                <div className="stat  place-items-center">
                    <h1 className="stat-value green">{thisMonth.length}</h1>
                <p className="stat-desc">Interactions This month</p>
                </div>
            </div>
             <hr className="text-[#E9E9E9] w-screen container mx-auto pb-8 mt-6" />
        </div>
    );
};

export default Count;