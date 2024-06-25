import Card from './card';
import { SiSquarespace } from "react-icons/si";
import { FaBorderTopLeft } from "react-icons/fa6";
import { BsFillGiftFill } from "react-icons/bs";
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import giftcard from "../assets/giftcard.png";
const Cards = () => {
    return (
        <div className="bg-gray-800 p-10 flex flex-wrap justify-center items-stretch">
            <Card title="Top-Notch SEO" description="Jump to the top of search results and see your sales soar." buttonLabel="Analysis" status="Generating "buttonColor="violet" icon={<FaBorderTopLeft/>}>
                <div className="flex flex-wrap gap-2 text-xs">
                    <span className="bg-custom-gray-700 py-1 px-2 rounded">Keywords</span>
                    <span className="bg-custom-gray-700 py-1 px-2 rounded">Content</span>
                    <span className="bg-custom-gray-700 py-1 px-2 rounded">WWW</span>
                    <span className="bg-custom-gray-700 py-1 px-2 rounded">Ranking</span>
                </div>
            </Card>
            <Card title="Responsive Website" description="Encourage sales with a user-friendly website optimized for restaurants." buttonLabel="Customize" status="Active" icon={<SiSquarespace/>} buttonColor="blue" >
                <ul className="text-xs text-custom-gray-400  pl-5 mt-2 list-none">
                    <li className='flex gap-1 justify-start  items-center'> <MdOutlineCheckCircleOutline color='green' size={16} /> Designed for Restaurant Business</li>
                    <li className='flex gap-1 justify-start  items-center'> <MdOutlineCheckCircleOutline color='green' size={16}  /> Mobile Responsive</li>
                    <li className='flex gap-1 justify-start  items-center'> <MdOutlineCheckCircleOutline color='green' size={16} /> Custom Domain</li>
                    <li className='flex gap-1 justify-start  items-center'> <MdOutlineCheckCircleOutline color='green' size={16} /> SEO Optimized</li>
                    <li className='flex gap-1 justify-start  items-center'> <MdOutlineCheckCircleOutline color='green' size={16}/> Light/Dark Mode</li>
                </ul>
            </Card>
            <Card title="Gift Cards" description="Ideal for any occasion, let recipients choose the perfect present."  buttonColor="orange" icon={<BsFillGiftFill/>}>
                <div className="flex justify-center items-center mt-2 -mb-6">
                    <div>
                        <img src={giftcard} alt="giftcard" className="w-full " />
                    </div>
                </div>
            </Card>
            
        </div>
    );
};

export default Cards;