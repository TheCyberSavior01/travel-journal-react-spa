import React from "react";
import data from "../data";
import Card  from "./Card";

export default function Hero() {
    
    return (
        <section>
            {
                data.map((item) => <Card card={item}/>)
            }
        </section>
    )
}