// Page.tsx
import React from 'react';
import Image from 'next/image';
import ButtonWithLogout from '@/app/components/ButtonWithOnClick';
import { getUserSession } from '@/app/lib/session';
import AnimatedLetters from './components/AnimatedLetters';

const Page: React.FC = () => {
    const user = getUserSession();

    return (
        <div className="flex flex-col h-screen bg-black text-white">
            <header className="flex justify-between items-center p-6">
                <div className="w-24 h-auto"> {/* Регулируйте размер логотипа */}
                    <Image
                        src="/img.png"
                        alt="LOGO"
                        width={125}
                        height={125}
                    />
                </div>
                <nav className="flex space-x-4">
                    <a href="/who-we-are" className="hover:text-gray-300">[who we are?]</a>
                    <a href="/help" className="hover:text-gray-300">[help]</a>
                </nav>
                <div className="flex space-x-4 ">
                    <button className="bg-transparent hover:bg-white hover:text-black">[log in]</button>
                    <button className="bg-transparent hover:bg-white hover:text-black">[sign up]</button>
                </div>
            </header>
            <main className="flex-1 flex flex-col justify-center items-center">
                <div className="user-session mb-4">{user && JSON.stringify(user)}</div>
                <AnimatedLetters text="FOQUZ" />
                <p className="slogan mb-8">[Take advantage of CogniCores AI solution]</p>
                <ButtonWithLogout />
            </main>
            <footer className="p-4 text-center">
                <button className="bg-blue-600 py-2 px-8 text-white hover:bg-blue-700">CREATE A QUIZ</button>
            </footer>
        </div>
    );
};

export default Page;
