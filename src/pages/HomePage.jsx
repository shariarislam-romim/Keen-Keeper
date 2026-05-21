import AllFriends from "../component/home/AllFriendsCard/AllFriends";
import Banner from "../component/home/Banner";
import Count from "../component/home/Count";

const HomePage = () => {
    return (
        <div className="bg-[#F8FAFC]">
            <Banner></Banner>
            <Count></Count>
            <AllFriends></AllFriends>
        </div>
    );
};

export default HomePage;