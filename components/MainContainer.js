import React from 'react';
import Link from 'next/link';

const MainContainer = ({ children }) => {
    return (
        <>
            <div className="navbar">
                <Link href="/best-hello-ever">
                    <a>best-hello-ever</a>
                </Link>
                <Link href="/best-hello-world-ever">
                    <a>best-hello-world-ever</a>
                </Link>
                <Link href="/best-world-ever">
                    <a>best-world-ever</a>
                </Link>
            </div>
            <div>
                { children }
            </div>

            <style jsx>{`
                .navbar {
                padding: 10px 15px;
                text-align: center;
                background-color: #e1e1e1;
                }

                a {
                text-decoration: none;
                margin: 15px;
                color: #111111;
                font-size: 18px;
                font-weight: 500;
                }
            `}</style>
        </>
    )
}

export default MainContainer;
