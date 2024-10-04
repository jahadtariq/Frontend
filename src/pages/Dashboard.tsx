import React, {useState} from 'react';
import Layout from '../components/Layout';
import DropdownSort from "../components/sortButton";

import { RxCross2 } from "react-icons/rx";
import {FaCheck } from "react-icons/fa";

import PumpCard from '../components/PumpCard';

const Dashboard: React.FC = () => {

  const [toggleAnimations, setToggleAnimations] = useState(false);
  const [toggleNSFW, setToggleNSFW] = useState(false);

  return (
    <Layout pageTitle="Home" pageSubTitle="View All Current Pumps">
      <div className="text-white font-Montserrat">

        <div className='flex items-center justify-center'>
          <div className='flex flex-col gap-4 items-center justify-center mb-10 md:w-[40%]'>
            <h1 className='text-[40px] text-yellow-500 shadow-red-500 text-shadow-[0_4px_8px_var(--tw-shadow-color)] font-Anton tracking-wider uppercase'>King of the Hill</h1>
            <PumpCard
              ticker='$MOODOGG'
              name="Moo Dogg"
              description='Tiny Dog, Big Drama: Meet Moo Dogg, our tiny, white Chihuahua known for her dramatic and adorable crying face'
              image='https://via.placeholder.com/40'
              marketcap={1080456}
              replies={47}
              time='1h ago'
              link='/coin'
            />
          </div>
        </div>

        {/* Add your dashboard content here */}
        <div className='flex flex-wrap gap-4 justify-start items-center mb-10'>
          <DropdownSort/>
          <div className={`${toggleAnimations ? 'bg-green-300 hover:bg-green-400' : 'bg-red-300 hover:bg-red-400'} inline-flex justify-between items-center rounded-md px-4 py-2 text-sm font-medium text-black shadow-sm focus:outline-none gap-2 hover:cursor-pointer`} onClick={() => setToggleAnimations(!toggleAnimations)}>
            {
              toggleAnimations ? <FaCheck /> : <RxCross2  />
            }
            <p>Animations</p>
          </div>
          
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <PumpCard
            ticker='$MOODOGG'
            name="Moo Dogg"
            description='Tiny Dog, Big Drama: Meet Moo Dogg, our tiny, white Chihuahua known for her dramatic and adorable crying face'
            image='https://via.placeholder.com/40'
            marketcap={1080456}
            replies={47}
            time='1h ago'
            link='/coin'
          />
          <PumpCard
            ticker='$MOODOGG'
            name="Moo Dogg"
            description='Tiny Dog, Big Drama: Meet Moo Dogg, our tiny, white Chihuahua known for her dramatic and adorable crying face'
            image='https://via.placeholder.com/40'
            marketcap={1080456}
            replies={47}
            time='1h ago'
            link='/coin'
          />
          <PumpCard
            ticker='$MOODOGG'
            name="Moo Dogg"
            description='Tiny Dog, Big Drama: Meet Moo Dogg, our tiny, white Chihuahua known for her dramatic and adorable crying face'
            image='https://via.placeholder.com/40'
            marketcap={1080456}
            replies={47}
            time='1h ago'
            link='/coin'
          />
        </div>
      
      </div>
    </Layout>
  );
};

export default Dashboard;
