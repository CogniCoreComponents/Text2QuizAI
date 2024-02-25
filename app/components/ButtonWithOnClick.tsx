'use client'
import { signOut } from 'next-auth/react';
import React from "react";

const ButtonWithLogout: React.FC = () => {
    const logout = () => {
        signOut({ callbackUrl: '/' }); // Redirects to the home page after logout
    };

    return (
        <button onClick={logout}>Logout</button>
    );
};

export default ButtonWithLogout;
