import React from "react";

export default function Footer(props) {
    return (
        <section className=".container">
        <footer className="py my">
            <p className="text-center" style={{color: props.mode==="dark"?"white":"black"}}>Made with ❤️ Kamran Mustafa😃 &copy; copyright 2021-22</p>
          </footer>     
    </section>
    );
}


