// import React from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();
  return (
    <>
      <div className="relative flex flex-col w-[350px] h-[480px] items-center justify-start text-center shadow-xs overflow-y-auto">
        <div className="w-full h-full p-4 flex flex-col items-center justify-center">
          <h4 className="text-3xl font-medium content-center ">Welcome to CryptoCypher</h4>
          <Button className="flex flex-col w-full h-11 mt-10 text-sm font-medium" onClick={() => navigate("/signup")}>
            Create a Wallet
          </Button>
          <Button className="flex flex-col w-full h-11 m-2 text-sm font-medium hover:bg-gray-200" variant={"secondary"} onClick={() => navigate("/signin")}>
            Login using Seed Phrase
          </Button>
        </div>
      </div>
    </>
  );
}

export default Home;