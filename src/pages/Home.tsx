import Counter from '../features/counter/Counter';

import { useEffect, useState } from 'react';

function Home() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme((preValue) => (preValue === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="flex flex-col justify-center items-center border h-screen gap-4">
      <h1 className="text-6xl font-bold">Hello World !</h1>
      <h2>EX:主體顏色設定</h2>
      <h2 className="text-2xl font-bold">Ex: useState</h2>
      <button
        className="btn-primary"
        onClick={() => setCount((count) => count + 1)}
      >
        🪂 Click me : {count}
      </button>
      <h2 className="text-2xl font-bold">Ex: Redux</h2>
      <Counter />
      <h2 className="text-2xl font-bold">Dark Mode:{theme}</h2>
      <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <div>
          <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </span>
        </div>
        <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
          Writes Upside-Down
        </h3>
        <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
          The Zero Gravity Pen can be used to write in any orientation,
          including upside-down. It even works in outer space.
        </p>
        <button
          onClick={handleThemeSwitch}
          className="btn-primary dark:text-black dark:bg-slate-100 transition-all"
        >
          {theme === 'dark' ? 'Change Light' : 'Change Dark'}
        </button>
      </div>
    </div>
  );
}

export default Home;
