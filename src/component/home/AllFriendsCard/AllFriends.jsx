
import { useEffect, useState } from "react";
import FriendCard from "./FriendCard";

// const friendsPromise = fetch("/Friends.json").then((res)=> res.json());

const AllFriends = () => {

    // const friends = use(friendsPromise)
    // console.log(friends,"All friends")

    const [friends,setFriends] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        fetch("/Friends.json").then((res)=> res.json())
        .then((data)=>{
            setFriends(data);
            setLoading(false);
        })
    }, []);

    if(loading){
        return(
            <div className="flex justify-center items-center h-80">
        <span className="loading loading-spinner loading-md"></span>
      </div>
        )
    }

    return (
        <div className="my-10 container mx-auto">
            <h1 className="font-bold text-3xl mb-5">Your Friends</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    friends.map((friend)=>{
                        return (
                            <FriendCard key={friend.id} friend={friend}></FriendCard>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default AllFriends;