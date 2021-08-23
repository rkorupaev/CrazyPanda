import './App.css';
import React from "react";
import Table from "./components/Table";

function App() {
    return (
        <div className="App">
            <section className="main-body">
                <h1>Таблица клиентов</h1>
                <div>Pagination</div>
                <div>
                    <div>Filter</div>
                    <Table/>
                </div>
            </section>
        </div>
    );
}

export default App;
