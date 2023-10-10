// Next, React
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Components
import { RequestAirdrop } from '../../components/RequestAirdrop';
import pkg from '../../../package.json';

// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';
import PresetBox from 'components/PresetBox';

export const HomeView: FC = ({ }) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore((s) => s.balance)
  const { getUserSOLBalance } = useUserSOLBalanceStore()

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58())
      getUserSOLBalance(wallet.publicKey, connection)
    }
  }, [wallet.publicKey, connection, getUserSOLBalance])

  return (

    <div className="md:hero mx-auto py-4">
      <div className="md:hero-content flex flex-col">
        <div className='mt-4'>
        <p className="flex flex-col items-center">
          <Image
            src="/logo.png"
            alt="icon"
            width={60}
            height={60}
          />
        </p>
        <h1 className="text-center text-4xl font-bold mt-3">
          tatami
        </h1>
        <p className="text-center text-slate-400 my-2">
          The Complete Token Launch Suite
        </p>
        </div>
        <div className='grid grid-rows-6 md:grid-rows-2 grid-flow-col md:gap-8'>
        <PresetBox 
          title='High Degen'
          desc={["10% to DAO Treasury","2% to Team Wallets as tokens",
          "88% as tokens to CSV with community wallet"]}
          price={3}
        />
        <PresetBox 
          title='Semi-Degen'
          desc={["20% to DAO Treasury","3% to Team Wallets as tokens",
          "77% as tokens to CSV with community wallet"]}
          price={3}
        />
        <PresetBox 
          title='Non-Degen'
          desc={["30% to DAO Treasury","55% to community wallets", "5% to Team Wallets as tokens",
          "10% as options to community"]}
          price={2}
        />
        <PresetBox 
          title='DAO Template'
          desc={["90% to DAO Treasury","5% to Team Wallets as tokens",
          "5% as options to team wallets"]}
          price={3}
        />
        <PresetBox 
          title='Degen Token'
          desc={["35% to DAO Treasury","2.5% to Team Wallets as tokens",
          "2.5% as options to Team Wallets",
          "10% to community as options",
          "50% into the liquidity pool"]}
          price={3}
        />
        <PresetBox 
          title='DAO'
          desc={["90% to DAO Treasury","5% to Team Wallets as tokens",
          "5% as options to team wallets"]}
          price={3}
        />
        </div>
      </div>
    </div>
  );
};
