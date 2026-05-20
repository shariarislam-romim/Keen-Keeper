import { FiPlus } from "react-icons/fi";

const Banner = () => {
    return (
        <div className="container mx-auto">
            <div className=" items-center justify-center">
                <h3>Friends to keep close in your life</h3>
            <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
            relationships that matter most.</p>
            <button className="btn text-white bg-[#244D3F]"><FiPlus />Add a Friend</button>
            </div>
        </div>
    );
};

export default Banner;