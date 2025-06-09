import { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(
        () => localStorage.getItem('theme') === 'dark'
    );

    useEffect(() => {
        const root = window.document.body;
        if (darkMode) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);


    return (
        <div
            onClick={() => setDarkMode(!darkMode)}
            className={`w-14 h-8 flex items-center px-1 rounded-full cursor-pointer border border-white transition-colors duration-300 ${darkMode ? 'bg-white' : 'bg-accent'
                }`}
        >
            <div
                className={`w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${darkMode ? 'translate-x-6 bg-accent' : 'translate-x-0 bg-white'
                    }`}
            ></div>
        </div>
    );
};



export default ThemeToggle;
