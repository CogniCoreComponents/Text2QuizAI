// AnimatedLetters.tsx
import React from 'react';
import '../styles/AnimatedLetters.css'; // Импортируем стили для анимации

interface AnimatedLettersProps {
    text: string;
}

const AnimatedLetters: React.FC<AnimatedLettersProps> = ({ text }) => {
    return (
        <div className="animated-letters">
            {text.split('').map((letter, index) => (
                <span key={index} className="letter">{letter}</span>
            ))}
        </div>
    );
};

export default AnimatedLetters;
