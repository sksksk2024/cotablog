'use client';

const Header = () => {
  return (
    <header
      className={`z-10 relative
      `}
    >
      <div
        className={`relative z-50 flex flex-col justify-center items-center gap-10 text-center p-16P py-32P bg-background-dark md:justify-around md:flex-row md:p-48P`}
      >
        <h1
          className={`text-lg font-bold tracking-wide uppercase md:text-xl lg:text-2xl
            text-white
            `}
        >
          Coța Blog!
        </h1>
      </div>
    </header>
  );
};

export default Header;
