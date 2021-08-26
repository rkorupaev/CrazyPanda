import Pagination from "./Pagination";
import Table from "./Table";
import React, {Fragment, useState} from "react";
import Filter from "./Filter";

const Main = () => {

    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [inputText, setInputText] = useState('');

    return (
        <section className="main-body">
            <h1>Таблица клиентов</h1>
            <Pagination pageCount={pageCount} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            <Fragment>
                <Filter setInputText={setInputText}/>
                <Table setPageCount={setPageCount} pageCount={pageCount} currentPage={currentPage} inputText={inputText}/>
            </Fragment>
        </section>)
}

export default Main;
