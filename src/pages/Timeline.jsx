import '../App.css'
import { useContext, useState } from "react";
import { DetailsContext } from "../component/context/DetailsProvider";
import call from "../assets/call.png"
import text from "../assets/text.png"
import video from "../assets/video.png"


const Timeline = () => {
    

    const context = useContext(DetailsContext)
    const {check} = context;

    const [filter,setFilter] = useState("All")

    const filterCheck = filter === "All" ? check : check.filter((friend) => friend.type === filter);

    return (
        <div className="pt-15 pb-15">
      <div className="w-11/12 mx-auto bg-[#FFFFFF]">
        <h2 className="font-bold text-5xl pb-4">Timeline</h2>

        <div>
          <select
            className="select select-bordered w-full outline-none max-w-xs "
            onChange={(e) => setFilter(e.target.value)} value={filter}>
            <option value="All"
              className="hover:shadow-sm  bg-[#FFFFFF] p-2 ease-in-out transition-all hover:-translate-y-2 ">
                All
            </option>
            <option value="Call"
              className="hover:shadow-sm  bg-[#FFFFFF] p-2 ease-in-out transition-all hover:-translate-y-2 ">
              Call
            </option>
            <option value="Text"
              className="hover:shadow-sm bg-[#FFFFFF] p-2  ease-in-out transition-all hover:-translate-y-2 ">
              Text
            </option>
            <option value="Video"
              className="hover:shadow-sm bg-[#FFFFFF] p-2  ease-in-out transition-all hover:-translate-y-2 ">
              Video
            </option>
          </select>
        </div>

        <div className="pt-4">
          <div className="grid gap-4 pb-5">
            {filterCheck.length === 0 ? (
              <div className="p-4">
                <p className="font-bold text-center text-2xl p-6 bg-red-500 rounded-lg shadow-sm">
                  No check-in found for {filter}
                </p>
              </div>
            ) : (
              filterCheck.map((friend, index) => (
                <div key={index}>
                  {friend.type === "Call" ? (
                    <div className="bg-[#F8FAFC] shadow-sm p-2 flex gap-3 items-center rounded-md hover:shadow-sm ease-in-out transition-all hover:-translate-y-2 ">
                      <img src={call} alt="call" className="h-6 w-6"/>
                      <div>
                        <h1 className="font-medium text-[20px] green">
                          {friend.type}{" "} 
                          <span className="gray text-[18px]">
                           with {friend.friendName}
                          </span>
                        </h1>
                        <p className="gray">{friend.time}</p>
                      </div>
                    </div>
                  ) : friend.type === "Text" ? (
                    <div className="bg-[#F8FAFC] shadow-sm p-2 flex gap-3 items-center rounded-md hover:shadow-sm  ease-in-out transition-all hover:-translate-y-2 ">
                      <img src={text} alt="text"  className="h-6 w-6"/>
                      <div>
                        <h1 className="font-medium text-[20px] green">
                          {friend.type}{" "} 
                          <span className="gray text-[18px]">
                           with {friend.friendName}
                          </span>
                        </h1>
                        <p className="gray">{friend.time}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-[#F8FAFC] shadow-sm p-2 flex gap-3 items-center rounded-md hover:shadow-sm   ease-in-out transition-all hover:-translate-y-2 ">
                      <img src={video} alt="video" className="h-6 w-6"/>
                      <div>
                        <h1 className="font-medium text-[20px] green">
                          {friend.type}{" "} 
                          <span className="gray text-[18px]">
                           with {friend.friendName}
                          </span>
                        </h1>
                        <p className="gray">{friend.time}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
    );
};

export default Timeline;