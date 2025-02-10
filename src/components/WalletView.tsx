// import React from "react";
import { Button } from "./ui/button";

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// const tokens = [
//   {
//     symbol: "ETH",
//     name: "Ethereum",
//     balance: 100000000000,
//     decimals: 18,
//   },
//   {
//     symbol: "LINK",
//     name: "Chainlink",
//     balance: 100000000000,
//     decimals: 18,
//   },
//   {
//     symbol: "UNI",
//     name: "Uniswap",
//     balance: 100000000000,
//     decimals: 18,
//   },
//   {
//     symbol: "MATIC",
//     name: "Polygon",
//     balance: 100000000000,
//     decimals: 18,
//   },
// ];

// const nfts = [
//   "https://nft-preview-media.s3.us-east-1.amazonaws.com/evm/0x1/0xd774557b647330c91bf44cfeab205095f7e6c367/0xfb76f9ef3adabc27d77c615959f9e22dea24ac7d6a10af3458b3481e5f5e0f10/high.png",
//   ,
//   "https://nft-preview-media.s3.us-east-1.amazonaws.com/evm/0x1/0x749f5ddf5ab4c1f26f74560a78300563c34b417d/0x90cae88ffc909feab8e4df76abd0652dee98b7bffab29597d898260d91c20aa1/high.jpeg",
// ];

function WalletView() {

  return (
    <>
      <div className="content">
      <div className="flex flex-row m-4 items-center justify-center">
            <Button className="flex flex-col h-auto m-1 text-sm font-medium bg-white text-black dark:bg-black dark:text-white">
            <img width="40" height="40" src="https://img.icons8.com/cotton/64/paper-plane--v3.png" alt="paper-plane--v3"/>
            <p>Send</p></Button>
            <Button className="flex flex-col h-auto m-1 text-sm font-medium bg-white text-black dark:bg-black dark:text-white">
            <img width="40" height="64" src="https://img.icons8.com/windows/64/sorting-arrows-horizontal.png" alt="sorting-arrows-horizontal"/>
            <p>Swap</p></Button>
            <Button className="flex flex-col h-auto m-1 text-sm font-medium bg-white text-black dark:bg-black dark:text-white">
            <img width="40" height="64" src="https://img.icons8.com/windows/64/sorting-arrows-horizontal.png" alt="sorting-arrows-horizontal"/>
            <p>Swap</p></Button>
          </div>
      </div>
    </>
  );
}

export default WalletView;
