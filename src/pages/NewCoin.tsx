import { useState } from 'react';
import { abi } from '../assets/utility/abi'; 
import { ethers } from 'ethers';

import Layout from '../components/Layout';

const NewCoin = () => {
    const [showMoreOptions, setShowMoreOptions] = useState(false);
    const [name, setName] = useState('');
    const [ticker, setTicker] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [sendNotification, setSendNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');

    const notification = (message: string) => {
        setNotificationMessage(message);
        setSendNotification(true);
        setTimeout(() => setSendNotification(false), 3000);
    };

    const handleCreate = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent the form from submitting and refreshing the page
        console.log("Running Handle create function ...");
        console.log(name, ticker, description, imageUrl);

        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contractAddress = import.meta.env.VITE_APP_CONTRACT_ADDRESS || "0x6d31ea3324284478a4a00b2e329fa49e12345678";
        if (!contractAddress) {
            throw new Error("VITE_APP_CONTRACT_ADDRESS is not defined");
        }
        const contract = new ethers.Contract(contractAddress, abi, signer);

        const transaction = await contract.createMemeToken(name, ticker, imageUrl, description, {
            value: ethers.parseUnits("0.0001", 'ether'),
        });
        
        notification("Waiting for transaction to complete...");
        
        const receipt = await transaction.wait();
        notification(`Transaction successful! Hash: ${receipt.hash}`);
        console.log('Creating token:', { name, ticker, description, imageUrl });
    };

    const toggleOptions = () => {
        setShowMoreOptions(!showMoreOptions);
    };

    return (
        <Layout pageTitle="New Coin" pageSubTitle="List your new coin for pump">
            <div className="max-w-md mx-auto bg-[#132d46]/40 text-white p-6 rounded-md font-Montserrat mb-6">
                <form onSubmit={handleCreate}>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm" htmlFor="name">Name</label>
                        <input type="text" id="name" className="w-full p-2 border border-gray-700 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-sm" htmlFor="ticker">Ticker</label>
                        <input type="text" id="ticker" className="w-full p-2 border border-gray-700 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500" value={ticker} onChange={(e) => setTicker(e.target.value)} />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-sm" htmlFor="description">Description</label>
                        <textarea id="description" className="w-full p-2 border border-gray-700 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 text-sm" htmlFor="image">Image</label>
                        <input type="file" id="image" className="w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700" onChange={(e) => setImageUrl(e.target.value)} />
                    </div>

                    {/* Show More Options */}
                    <div className="mb-4">
                        <button type="button" className="text-blue-400 hover:underline" onClick={toggleOptions}>
                            {showMoreOptions ? 'Hide more options ▲' : 'Show more options (optional) ▼'}
                        </button>
                    </div>

                    {/* Extra Optional Fields */}
                    {showMoreOptions && (
                        <div className="mb-4 space-y-4">
                            <div>
                                <label className="block mb-2 text-sm" htmlFor="option1">Twitter Link</label>
                                <input type="text" id="option1" className="w-full p-2 border border-gray-700 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm" htmlFor="option2">Telegram Link</label>
                                <input type="text" id="option2" className="w-full p-2 border border-gray-700 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm" htmlFor="option3">Website</label>
                                <input type="text" id="option3" className="w-full p-2 border border-gray-700 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                        </div>
                    )}

                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Create coin
                    </button>
                </form>

                <p className="text-sm text-gray-400 mt-4">
                    When your coin completes its bonding curve you receive 0.5 SOL
                </p>
                {sendNotification && <div className='absolute top-8 left-[35%] w-[35%] h-contain p-4 bg-[#49e9dd]/50 text-center rounded-lg break-all'>
                    <p>{notificationMessage}</p>
                </div>}
            </div>
        </Layout>
    );
};

export default NewCoin;
