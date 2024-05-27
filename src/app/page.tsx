"use client"
import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image'

type HomePageProps = {};

const HomePage: NextPage<HomePageProps> = () => {
  const [name, setName] = useState<string>('');
  const [imageIndex, setImageIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleShowPicture = () => {
    // Generate a random number within the image file count (replace with actual count)
    const imageCount = 7; // Replace with the number of images in your folder
    const randomIndex = Math.floor(Math.random() * imageCount);
    setImageIndex(randomIndex);

  };
  useEffect(() => {
    if (isLoading) {
      const timeoutId = setTimeout(() => {
        setIsLoading(false);
      }, 10000); // Replace 3000 with your desired delay in milliseconds

      return () => clearTimeout(timeoutId); // Cleanup function for timeout
    }
  }, [isLoading]);
  return (
    <div className='flex w-full px-20 py-10 justify-center items-center bg-slate-500 h-screen'>
      <div className='flex flex-col gap-1'>
        <h1 className='text-center font-bold text-[40px]'>Cek Khodam Sekarang</h1>
        <h2>Masukkan Nama</h2>
        <div className='flex gap-2'>
          <input type="text" className='border-2 rounded-md px-2' value={name} onChange={handleInputChange} placeholder="Taryo Noviar" />
          <button className='bg-blue-400 px-2 rounded-md text-white ' onClick={handleShowPicture}>Cari</button>
        </div>
        <div>

        </div>
        {isLoading && <h1 className='text-center font-bold text-[40px]'>Cek Khodam Sekarang</h1>}
        {!isLoading && imageIndex !== null && (
          <>
            <h1 className='font-semibold uppercase'>{name}</h1>
            <h2>Khodam Kamu adalah..</h2>
            <Image
              width={400}
              height={400}
              src={`/images/${imageIndex + 1}.png`} // Assuming images are .jpg format (adjust extension)
              alt="Random Picture"
              className='rounded-md'
            />
          </>
        )}
      </div>
    </div>

  );
};

export default HomePage;