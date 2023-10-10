
import { FC, ReactNode } from "react";
import { SignMessage } from '../../components/SignMessage';
import { SendTransaction } from '../../components/SendTransaction';
import { SendVersionedTransaction } from '../../components/SendVersionedTransaction';
import Image from "next/image";

export const CreateView: FC = ({ }) => {
  return (
    <div className="flex flex-col md:flex-row w-full mt-8">
      <div className="create-main w-full md:w-3/4 flex flex-col items-center gap-6">
        <div className="bg-primary-focus border-2 border-primary-content rounded-lg w-11/12 md:w-7/12 overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-[#F3BC51] to-[#936100]"></div>
          <div className="p-4">
            <h2 className="text-xl font-semibold">Token Details</h2>
            <p className="text-sm text-[#9393A9]">Style your organization and determine token&apos;s details</p>
          </div>
        </div>

        {/* Branding */}
        <div className="bg-primary-focus border-2 border-primary-content rounded-lg w-11/12  md:w-7/12 overflow-hidden">
          <div className="p-4">
            <h2 className="text-lg font-semibold">Branding</h2>
            <p className="text-sm text-[#9393A9]">Name the token and add your logo</p>
            <hr className='border-[#2C2C5A] border-b-2 my-4'/>
            <h5 className="mt-4 mb-1 text-sm">Token Name</h5>
            <input placeholder="e.g. Tatami Coin" className="bg-primary-content w-11/12 rounded-md h-10
             placeholder:text-sm p-4"/>
            <h5 className="mt-4 mb-1 text-sm">Token Symbol</h5>
            <input placeholder="e.g. TCC" className="bg-primary-content w-1/2 rounded-md h-10
             placeholder:text-sm p-4"/>
            <h5 className="mt-4 text-sm">Token Logo</h5>
            <p className="text-xs text-[#9393A9] mb-2">.png or .jpg upto 320 KB in size</p>

            <input id="file-upload" type="file"/>
          </div>
        </div>

        {/* Token Pairing */}
        <div className="bg-primary-focus border-2 border-primary-content rounded-lg w-11/12 md:w-7/12 overflow-hidden">
          <div className="p-4">
            <h2 className="text-lg font-semibold">Token Pairing</h2>
            <p className="text-sm text-[#9393A9]">Select the pairing of the token</p>
            <hr className='border-[#2C2C5A] border-b-2 my-4'/>
            <h5 className="mt-3 mb-2 text-sm">Token Pair</h5>
            <label htmlFor="USDC" className="flex flex-row items-center gap-3 font-thin ml-3">
              <input type="radio" name="coin" id="USDC" className="bg-red"/>
              USDC
              <div><Image src="/usdc.png" alt="usdc" width={20} height={20}/></div>
            </label>
            <label htmlFor="SOL" className="flex flex-row items-center gap-3 mt-4 font-thin ml-3">
              <input type="radio" name="coin" id="SOL" />
              SOL
              <div><Image src="/solanaSmall.png" alt="solana" width={18} height={18}/></div>
            </label>

            <h5 className="mt-5 mb-2 text-sm">Liquidity Pool Information</h5>
            <input type="number" placeholder="USDC or SOL amount" className="bg-primary-content w-1/2 rounded-md h-10
             placeholder:text-sm p-4"/>

            <h5 className="mt-5 mb-2 text-sm">Total Token Supply</h5>
            <input type="number" placeholder="e.g. 1,000,000" className="bg-primary-content w-1/2 rounded-md h-10
             placeholder:text-sm p-4"/>
          </div>
        </div>

        {/* Team Options */}
        <div className="bg-primary-focus border-2 border-primary-content rounded-lg w-11/12  md:w-7/12 overflow-hidden">
          <div className="p-4">
            <h2 className="text-lg font-semibold">Team Options</h2>
            <p className="text-sm text-[#9393A9]">Select the date when the team options expire</p>
            <hr className='border-[#2C2C5A] border-b-2 my-4'/>
            <h5 className="mt-3 mb-1 text-sm">Date</h5>
            <input type="date" placeholder="e.g. Tatami Coin" className="bg-primary-content w-11/12 md:w-4/12 rounded-md h-10
              text-sm px-4 text-[#9393A9]" />
            <h5 className="mt-3 mb-1 text-sm">Time</h5>
            <input type="time" placeholder="e.g. Tatami Coin" className="bg-primary-content w-11/12 md:w-4/12 rounded-md h-10
              text-sm px-4 text-[#9393A9]" />
          </div>
        </div>

        {/* Community Options */}
        <div className="bg-primary-focus border-2 border-primary-content rounded-lg w-11/12 md:w-7/12 overflow-hidden">
          <div className="p-4">
            <h2 className="text-lg font-semibold">Community Options</h2>
            <p className="text-sm text-[#9393A9]">Select the date when the community options expire</p>
            <hr className='border-[#2C2C5A] border-b-2 my-4'/>
            <h5 className="mt-3 mb-1 text-sm">Date</h5>
            <input type="date" placeholder="e.g. Tatami Coin" className="bg-primary-content w-11/12 md:w-4/12 rounded-md h-10
              text-sm px-4 text-[#9393A9]" />
            <h5 className="mt-3 mb-1 text-sm">Time</h5>
            <input type="time" placeholder="e.g. Tatami Coin" className="bg-primary-content w-11/12 md:w-4/12 rounded-md h-10
              text-sm px-4 text-[#9393A9]" />
          </div>
        </div>
        <div className="border-2 border-[#2C2C5A] text-sm px-8 py-3 bg-[#1E2043] rounded-lg mb-16
        hover:cursor-pointer hover:bg-[#3b3b62]">
          Save & Continue
        </div>
      </div>
      <div className="create-side md:w-1/4 flex flex-col items-end">
        <div className="w-4/5 bg-[#080524] h-full">
          <div className="ml-4">
            <h5 className="text-[#9393A9] text-sm">PRESET SELECTED</h5>
            <select name="presets" id="presets" className="bg-[#040216] text-sm py-2 px-4 w-11/12 lg:w-48
            border-2 border-[#2C2C5A] rounded-lg mt-2">
              <option value="high-degen">High Degen</option>
              <option value="non-degen">Semi-Degen</option>
              <option value="degen-token">Degen Token</option>
              <option value="semi-degen">Semi Degen</option>
              <option value="dao-template">DAO Template</option>
              <option value="dao">DAO</option>
            </select>
          </div>
         
        </div>
      </div>
    </div>
  );
};
