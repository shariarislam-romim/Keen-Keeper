import { FiPlus } from "react-icons/fi";
import '../../App.css'

const Banner = () => {
    return (
        <div className="container mx-auto">
        <div className="hero min-h-55">
  <div className="hero-content text-center">
    <div className="max-w">
      <h1 className="text-3xl font-bold blue">Friends to keep close in your life</h1>
      <p className="py-4 gray">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
            relationships that matter most.
      </p>
      <button className="btn text-white bg-[#244D3F]"><FiPlus />Add a Friend</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;