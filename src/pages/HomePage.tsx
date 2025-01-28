<<<<<<< Updated upstream
import React from "react";

const HomePage = () => {
    return (
        <div className='text-center font-medium mt-6 text-xl'>
            Here you can find a lot of useful things!
=======
import React from 'react';
import { Technologies } from '../models/models'
import {  useAppSelector } from "../hooks/redux";
import { RootState } from "../store";
import { useActions } from "../hooks/actions";


const technologies:Technologies = [
    {
        title: 'HTML',
        description: 'HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content.',
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
        title: 'CSS',
        description: 'Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML.',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    {
        title: 'JavaScript',
        description: 'JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions.',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
        title: 'React',
        description: 'The library for web and native user interfaces.',
        link: 'https://react.dev/',
    },
    {
        title: 'Redux',
        description: 'A JS library for predictable and maintainable global state management.',
        link: 'https://redux.js.org/',
    },
    {
        title: 'Jest',
        description: 'Jest is a delightful JavaScript Testing Framework with a focus on simplicity.',
        link: 'https://jestjs.io/',
    },
    {
        title: 'Webpack',
        description: 'Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.',
        link: 'https://webpack.js.org/',
    },
    {
        title: 'Gulp',
        description: 'Leverage gulp and the flexibility of JavaScript to automate slow, repetitive workflows and compose them into efficient build pipelines.',
        link: 'https://gulpjs.com/',
    },
]


const HomePage: React.FC = () => {
    
    const { selectTechnology } = useActions();
    const selectedTechnology = useAppSelector((state: RootState) => state.technologies.selectedTechnology);

    const handleSelectTechnology = (t: typeof technologies[0]) => {
        selectTechnology(t)
    };

    return (
        <div className='text-center font-medium mt-6 text-[16px]'>
            <span className="text-gray-500">Learn more about</span> Technologies
            <ul className="flex flex-col items-center mt-4">
                {technologies.map((t) => 
                <li 
                    className={`
                        mt-3 mb-1 border w-[200px] rounded 
                        ${selectedTechnology?.title === t.title ? 'text-white cursor-default bg-gray-400' : 'text-black hover:opacity-70  cursor-pointer'}
                    `}
                    onClick={() => handleSelectTechnology(t)}
                    key={t.link}
                >
                    {t.title}
                </li>)
                }
            </ul>
            {selectedTechnology && (
                <div className="mx-auto mt-6 p-4 border rounded shadow bg-gray-100 text-gray-800 w-[400px]">
                    {selectedTechnology.description}
                    <a
                        href={selectedTechnology.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mt-4 text-blue-500 hover:text-blue-700"
                    >
                        Learn More
                    </a>
                </div>
            )}
>>>>>>> Stashed changes
        </div> 
    );
};

export default HomePage;









