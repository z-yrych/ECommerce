import React from "react";

export const Footer = React.memo(function Footer() {
    return (
        <footer className="footer">
            &copy; {new Date().getFullYear()} ZyRICH Store. All rights reserved.
        </footer>
    );
});
