import React, {FC} from 'react';
import CardsList from "../cardsList/CardsList";
import "./main.scss"
const Main:FC = () => (
        <main className="main">
            <div className="container">
                <CardsList/>
            </div>
        </main>
    );


export default Main;
