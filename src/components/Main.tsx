'use client';

import FirstBlogCard from './FirstBlogCard';

const Main = () => {
  return (
    <>
      <main
        className={`relative flex flex-col justify-around items-center w-full
        bg-background-dark
        `}
      >
        <div className="relative flex flex-col justify-start items-start text-center w-full xl:text-start">
          <div className="flex justify-around items-center w-full max-w-container-1000 mx-auto xl:max-w-container-1440 h-600H">
            <FirstBlogCard />
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
