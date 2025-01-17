// components/SearchModal.tsx
'use client';

import React, { useState } from 'react';

const SearchModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button className="btn btn-ghost btn-circle" onClick={openModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="fixed inset-0 w-screen h-screen flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="bg-white w-11/12 h-[80%] p-8 rounded shadow-lg relative overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 rou text-gray-600 hover:text-gray-900 text-lg"
              aria-label="Close"
            >
              &times;
            </button>

            <input type="text" placeholder="Type here" className="input w-full mb-0" />
            <div className='w-full rounded-lg border-b-2 border-black mb-5'></div>

            <div className='flex flex-col h-full gap-6 mb-8'>
                <div className='border-b-2 border-black flex flex-col gap-2'>
                    <h2 className="text-3xl">Modal Title</h2>
                    <p className='text-lg'>This is a client-side modal.</p>
                    <h3 className='text-sm'>01-01-1999</h3>
                </div>
                <div className='border-b-2 border-black flex flex-col gap-2'>
                    <h2 className="text-3xl">Modal Title</h2>
                    <p className='text-lg'>This is a client-side modal.</p>
                    <h3 className='text-sm'>01-01-1999</h3>
                </div>
                <div className='border-b-2 border-black flex flex-col gap-2'>
                    <h2 className="text-3xl">Modal Title</h2>
                    <p className='text-lg'>This is a client-side modal.</p>
                    <h3 className='text-sm'>01-01-1999</h3>
                </div>
                <div className='border-b-2 border-black flex flex-col gap-2'>
                    <h2 className="text-3xl">Modal Title</h2>
                    <p className='text-lg'>This is a client-side modal.</p>
                    <h3 className='text-sm'>01-01-1999</h3>
                </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchModal;
