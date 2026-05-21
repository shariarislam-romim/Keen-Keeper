import { Link } from "react-router";
import '../../../App.css'

const FriendCard = ({friend}) => {
    return (
        <Link to={`/bookDetails/${friend.id}`} className="card bg-base-100 shadow-sm place-items-center text-center">
            <figure className="py-3 ">
                <img className="rounded-full "
                src={friend.picture}
                alt={friend.name} />
            </figure>
            <div className="card-body items-center">
                
                <h2 className="card-title text-2xl blue">{friend.name}</h2>
                <p className=" text-m gray">{friend.days_since_contact}d ago</p>
        
                <div className="">
                <div className="flex items-center gap-2">
                {friend.tags.map((tag,index)=> (
                    <div key={index} className="badge badge-soft rounded-full  text-[#244D3F] bg-[#CBFADB] p-3 mb-3 uppercase">
                     {tag}</div>
                    ))}
                </div>
                    <div className={`badge mx-auto rounded-full text-white 
                    ${
                        friend.status === "overdue"
                        ? " bg-[#EF4444] "
                        : friend.status === "on-track"
                        ? "bg-[#244D3F] "
                        : " bg-[#EFAD44] "
                    }`}>{friend.status}</div>
                </div>
            </div>
        </Link>
    );
};

export default FriendCard;