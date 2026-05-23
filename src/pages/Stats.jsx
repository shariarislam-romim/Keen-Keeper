import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import { useContext } from "react";
import { DetailsContext } from "../component/context/DetailsProvider";
import '../App.css'

const Stats = ({ isAnimationActive = true }) => {

    const context = useContext(DetailsContext)
    const {check} = context;

    const Text = check?.filter((friend) => friend.type === "Text").length || 0;
    const Call = check?.filter((friend) => friend.type === "Call").length || 0;
    const Video = check?.filter((friend) => friend.type === "Video").length || 0;

    const data = [
        {
            name : "Text",
            value :  Text,
            fill : "#7E35E1",
        },
        {
            name : "Call",
            value : Call ,
            fill : "#244D3F",
        },
        {
            name : "Video",
            value : Video,
            fill : "#37A163",
        },
    ];

    return (
        <div className="pt-10 pb-15 md:pt-20 md:pb-20 bg-[#F8FAFC]">
            {
                check.length === 0 ? (
                    <div className=" text-center shadow-sm bg-red-500 p-4 w-11/12 mx-auto rounded-md ">
                        <h2 className="text-black font-bold text-2xl">No Data yet...</h2>
                    </div>
                ) : (
                    <div className="w-11/12 mx-auto">
                        <h1 className="font-bold text-3xl md:text-5xl blue pb-6">Friendship Analytics</h1>
                        <div className="shadow-sm p-8 bg-[#FFFFFF] ">
                            <h2 className="font-medium text-[20px] green pb-5"> By Interaction Type</h2>
                            <div className="grid place-items-center">
                                <div style={{width: "100%",maxWidth: 500,height: 400,minWidth: 300}}>
                                    <PieChart 
                                     style={{ width: '100%', maxWidth: '500px', maxHeight: '60vh', aspectRatio: 1 }} 
                                     responsive>
                                    <Pie
                                        data={data}
                                        innerRadius="80%"
                                        outerRadius="100%"
                                        cornerRadius="50%"
                                        fill="#8884d8"
                                        paddingAngle={5}
                                        dataKey="value"
                                        isAnimationActive={isAnimationActive}>
                                    {
                                        data.map((come, index) =>(
                                            <Cell key={index} fill={come.fill}/>
                                        ))
                                    }
                                    </Pie>


                                    <Tooltip />
                                    <Legend  wrapperStyle={{ paddingTop: "25px" }} />
                                    </PieChart>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
        
    );
};

export default Stats;