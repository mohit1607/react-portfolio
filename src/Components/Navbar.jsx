import React from 'react';
import { AiOutlineArrowDown } from "react-icons/ai";

const Navbar = ({ active, setActive }) => {
    return (
        <div className="fixed top-8 right-0 w-full flex justify-center sm:justify-end md:justify-center items-center px-4">
            <div className="shadow-2xl p-2 rounded-full flex gap-2 bg-white scale-90 sm:scale-100 overflow-x-auto">
                {
                    ['About', 'Work', 'Skills', 'Contact', 'Resume'].map((curr) => {
                        if (active === curr) {
                            return (
                                <div
                                    key={curr}
                                    className="flex-1 rounded-full bg-accent text-white font-semibold flex justify-center items-center px-4 py-2 whitespace-nowrap"
                                >
                                    {curr === 'Resume' && <AiOutlineArrowDown size={18} color="white" />}
                                    {curr}
                                </div>
                            );
                        } else {
                            return (
                                <div
                                    onClick={() => setActive(curr)}
                                    key={curr}
                                    className="flex-1 rounded-xl text-black font-semibold flex justify-center items-center px-4 py-2 cursor-pointer whitespace-nowrap hover:bg-gray-100 transition"
                                >
                                    {curr === 'Resume' && <AiOutlineArrowDown size={18} color="black" />}
                                    {curr}
                                </div>
                            );
                        }
                    })
                }
            </div>
        </div>
    );
};

export default Navbar;
