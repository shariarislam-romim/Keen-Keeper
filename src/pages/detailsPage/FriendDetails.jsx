import { FiPhoneCall } from "react-icons/fi";
import { IoIosArchive } from "react-icons/io";
import { IoVideocamOutline } from "react-icons/io5";
import { LuMessageSquareMore } from "react-icons/lu";
import { RiDeleteBin6Line, RiNotificationSnoozeLine } from "react-icons/ri";
import { useLoaderData, useParams } from "react-router";
import '../../App.css'
import { toast } from "react-toastify";
import { useContext } from "react";
import { DetailsContext } from "../../component/context/DetailsProvider";


const FriendDetails = () => {
    const {selectId} = useParams()
    // console.log(selectId," it param")

    const friends = useLoaderData();
    // console.log(friends)

    const selectFriend = friends.find((friend)=> friend.id == selectId)
    // console.log(selectFriend)

    const context = useContext(DetailsContext)
    const {addCheck}=context;

    const dateFormat = (date) =>
    new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    });

    const handleCheck = (type) => {
    const date = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const newEntry = {
      friendId: selectFriend.id,
      friendName: selectFriend.name,
      type,
      time: date,
    };

    addCheck(newEntry);
    toast.success(`${type} ${selectFriend.name}`);
  };


    return (

        <div className="w-11/12 pt-20 pb-12 container mx-auto">
      <div className="flex flex-col md:flex-row gap-5">
        <div>
          <div className="grid place-items-center text-center p-3 shadow-sm bg-base-100 rounded-lg">
            <div>
              <img
                className="w-20 h-20 rounded-full"
                src={selectFriend.picture}
                alt={selectFriend.name}
              />
            </div>

            <div>
              <h2 className="blue font-semibold text-2xl pt-2 pb-2 ">
                {selectFriend.name}
              </h2>
            </div>

            <div className="space-y-3">
              <div>
                <span
                className={`rounded-full px-2 py-1 text-white  ${
                  selectFriend.status === "overdue"
                    ? " bg-[#EF4444] "
                    : selectFriend.status === "on-track"
                      ? "bg-[#244D3F] "
                      : " bg-[#EFAD44] "
                }
                  `}
              >
                {selectFriend.status}
              </span>
              </div>

              <div className="flex gap-2 justify-center uppercase">
                {selectFriend.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#CBFADB]  rounded-full px-3 py-1 green"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <p className="gray font-medium pt-2">"{selectFriend.bio}"</p>

            <p className="gray pt-2">
              Preferred: email
            </p>
          </div>

          <div className="grid gap-4 pt-3">
            <div className="p-3 cursor-pointer shadow-lg text-center border border-gray-200 rounded-md ">
              <h3 className="blue font-medium flex items-center justify-center gap-2">
                <RiNotificationSnoozeLine /> Snooze 2 weeks
              </h3>
            </div>

            <div className="p-3 cursor-pointer border border-gray-200 shadow-lg text-center rounded-md">
              <p className="blue font-medium flex items-center justify-center gap-2">
                <IoIosArchive />
                Archive
              </p>
            </div>

            <div className="p-3 cursor-pointer border border-gray-200 shadow-lg text-center rounded-md">
              <p className="text-[#EF4444] font-medium flex items-center justify-center gap-2">
                <RiDeleteBin6Line />
                Delete
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-3 gap-5 pb-4">
            <div className="bg-base-100 p-5 rounded-md shadow-sm text-center">
              <h2 className="green pt-4 font-semibold text-[16px] md:text-2xl">
                {selectFriend.days_since_contact}
              </h2>
              <p className="gray pt-3 text-[16px] md:text-lg">
                Days Since Contact
              </p>
            </div>

            <div className="bg-base-100 p-5 rounded-md shadow-sm text-center">
              <h2 className="green pt-4 font-semibold text-2xl md:text-2xl">
                {selectFriend.goal}
              </h2>
              <p className="gray pt-4 text-[16px] md:text-lg">
                Goal (Days)
              </p>
            </div>

            <div className="bg-base-100 p-5 rounded-md shadow-sm text-center">
              <h2 className="green pt-4 font-semibold text-[16px] md:text-2xl">
                {dateFormat(selectFriend.next_due_date)}
              </h2>
              <p className="gray pt-4 text-lg">Next Due</p>
            </div>
          </div>

          <div className="pt-4 rounded-lg shadow-sm p-6">
            <div className="flex justify-between bg-base-100">
              <h3 className="green font-medium text-[20px]">
                Relationship Goal
              </h3>
              <button className="btn">Edit</button>
            </div>

            <p className="gray text-[18px] ">
              Connect every
              <span className="font-bold text-black">
                {" "}{selectFriend.goal} days</span>
            </p>
          </div>

          <div className="pt-4">
            <div className="shadow-sm p-6 rounded-md">
              <h3 className="green font-medium pb-6 text-[20px]">
                Quick Check-In
              </h3>

              <div className="grid grid-cols-3 gap-4">
                <div
                  onClick={() => handleCheck("Call")}
                  className="bg-[#F8FAFC]  shadow-sm grid place-items-center border border-gray-200 p-6 rounded-sm">
                  <h3 className="blue font-bold text-2xl ">
                    <FiPhoneCall />
                  </h3>
                  <h2 className="blue text-[18px] pt-1">Call</h2>
                </div>

                <div
                  onClick={() => handleCheck("Text")}
                  className="bg-[#F8FAFC] shadow-sm grid place-items-center border border-gray-200 p-6 rounded-sm">
                  <h3 className="font-bold text-2xl text-[#1F2937]">
                    <LuMessageSquareMore />
                  </h3>
                  <h2 className="blue text-[18px] pt-1">Text</h2>
                </div>

                <div
                  onClick={() => handleCheck("Video")}
                  className="bg-[#F8FAFC] shadow-sm grid place-items-center border border-gray-200 p-6 rounded-sm">
                  <h3 className="blue font-bold text-2xl">
                    <IoVideocamOutline />
                  </h3>
                  <h2 className="blue text-[18px] pt-1">Video</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default FriendDetails;