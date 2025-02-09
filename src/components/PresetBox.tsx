import Image from "next/image";
import { useRouter } from "next/router";
import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import {notify} from "../utils/notifications";

type PresetBoxProps = {
    title: string,
    desc: string[],
    price: number
}

const PresetBox = ({
    title,
    desc,
    price
}: PresetBoxProps) => {
  const { publicKey } = useWallet();
  const router = useRouter();

  const handleClick = () => {
    if (!publicKey) {
      return notify({ type: 'error', message: 'error', description: 'Wallet not connected!' });
    }

    router.replace("/create")
    
  }

    return (
        <div className="xl:w-96 hover:cursor-pointer" onClick={handleClick}>
          <div className="max-w-md mx-auto bg-[#040216] border-2 border-[#2C2C5A] rounded-xl p-4 px-6 my-2">
            <h4 className='text-lg font-semibold mb-3'>{title}</h4>
            <hr className='border-[#2C2C5A] border-b-2'/>
            <p className='specs my-3'>
              <ul className='list-disc list-outside text-[#9393A9] ml-3'>
                {desc.map((item,index) => (
                    <li key={index}>{item}</li>
                ))}
              </ul>
            </p>
            <hr className='border-[#2C2C5A] border-b-2'/>
            <p className='flex flex-row h-6 gap-2 mt-3 items-center'>
              <div className='border-2 border-[#2C2C5A] rounded-full w-7 h-7'>
                <Image src="/solanaSmall.png" alt="solana icon"  width={16} height={16} className="m-1 my-1.5"/>
               </div>
              <p>{price} SOL</p>
            </p>
          </div>
        </div>
    )
}

export default PresetBox;