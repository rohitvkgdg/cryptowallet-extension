import { useState } from 'react'
import './App.css'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ThemeProvider } from './components/theme-provider';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CreateAccount from './components/CreateAccount';
import RecoverAccount from './components/RecoverAccount';

function App() {
  const [selectedChain, setSelectedChain] = useState('0x2');
  
  // const [isLogin, setIsLogin] = useState(false);
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <div className='bg-gray-50 dark:bg-slate-700 w-[350px] h-[600px] flex flex-col items-center text-center justify-start text-black rounded-3xl shadow-md font-family'>
      <header className='w-full h-[120px] bg-gray-100 dark:bg-slate-800 flex flex-row items-center justify-between shadow-md'>
        <div className='w-full grid grid-cols-2 items-center justify-start'>
          <div className='text-md font-semibold'>Crypto Wallet</div>
          {/* {isLogin && */}
          <div className='w-5/6 border-1 rounded-xl'>
            <Select required value={selectedChain} onValueChange={setSelectedChain}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger> 
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Mainnet</SelectLabel>
                  <SelectItem value='0x2'>Solana</SelectItem>
                  <SelectItem value='0x1'>Ethereum</SelectItem>
                  <SelectItem value='0x3'>Bitcoin</SelectItem>
                  <SelectItem value='0x89'>Polygon</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Testnets</SelectLabel>
                  <SelectItem value='0x4'>Sepolia (Ethereum)</SelectItem>
                  <SelectItem value='0x5'>Holesky (Ethereum)</SelectItem>
                  <SelectItem value='0x38'>Solana Devnet</SelectItem>
                  <SelectItem value='0x13881'>Polygon</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
{/* } */}
        </div>
      </header>
      <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<CreateAccount />} />
        <Route path='/signin' element={<RecoverAccount />} />
      </Routes>
      </main>
      <footer className='w-full h-[60px] bg-gray-50 dark:bg-slate-800 flex flex-row items-center justify-center shadow-xs'>
        <div className='text-xs font-light'>CryptoCypher web version: <a href='https://cryptocypher.vercel.app'>cryptocypher.vercel.app</a></div>
      </footer>
    </div>
    </ThemeProvider>
  )
};

export default App;
