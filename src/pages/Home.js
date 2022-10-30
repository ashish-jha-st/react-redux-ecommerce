import React from 'react';
// import FilterBar from "../../containers/FilterBar/FilterBar";
import ProductList from '../containers/ProductList';
// import Pagination from "../../components/Pagination/Pagination";

const Home = () => {
    return (
        <React.Fragment>
            <div className="container" style={{paddingTop: '6rem'}} >
                <div className="row">
                    Product List
                    {/* <FilterBar/> */}
                    <ProductList/>
                </div>
            </div>
        </React.Fragment>
    );
};


export default Home;