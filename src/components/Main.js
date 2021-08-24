import Pagination from "./Pagination";
import Table from "./Table";
import React, {useState} from "react";

const Main = () => {

    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <section className="main-body">
            <h1>Таблица клиентов</h1>
            <Pagination pageCount={pageCount} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            <div>
                <div>Filter</div>
                <Table setPageCount={setPageCount} pageCount={pageCount} currentPage={currentPage}/>
            </div>
        </section>)
}

export default Main;
