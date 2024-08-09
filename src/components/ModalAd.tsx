"use client";
import React, { useState } from "react";

const ModalAd = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-6 pt-6">
      <button
        onClick={() => setIsOpen(true)}
        className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Get More Profit
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-5">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-gray-800">
            <img
              className="mx-auto h-10 w-auto pb-2"
              src="/coinex-logo.svg"
              alt="Polkadot Staking Calculator Coinex Logo"
              loading="lazy"
            />
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              Maximize Your Earnings with CoinEx!
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">
                  <strong>Copy Trading:</strong> Follow top traders effortlessly
                  and maximize your profits with copy trading!
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">
                  <strong>Compound Interest:</strong> Grow your assets
                  effortlessly with compound interest on CoinEx!
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">
                  <strong>Staking Rewards:</strong> Boost your earnings! Stake
                  crypto on CoinEx and watch your profits grow!
                </span>
              </li>
            </ul>
            <div className="mt-6 text-center">
              <button
                onClick={() => setIsOpen(false)}
                className=" mr-4 px-4 py-2 text-red-500 bg-transparent hover:bg-red-100 rounded-md focus:outline-none"
              >
                Cancel
              </button>
              <a
                href="https://www.coinex.com/register?refer_code=bcu5r"
                target="_blank"
                className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition duration-200"
              >
                Sign Up Now!
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalAd;
