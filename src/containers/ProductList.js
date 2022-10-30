import React from 'react'
import { phones } from '../data/phones';
import Product from '../components/Product';
function ProductList() {
    return (
        <div className="col-lg-12">
            <div className="row mb-3">
                <div className="col-12 d-none d-lg-block d-xl-block">
                    <div className="card ">
                        <div className="card-header d-flex justify-content-end">
                            <span className="mr-3">Change Layout: </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                {phones.map(product => {
                    let classes = `col-md-3 mb-4`;
                    return (<div className={classes}>
                        <Product key={product.id} product={product} />
                    </div>)
                })}
            </div>
            {/* <div className="d-flex justify-content-end">
                <Pagination
                    totalItemsCount={this.props.products.length}
                    currentPage={this.state.currentPage}
                    perPage={this.state.perPage}
                    pagesToShow={this.state.pagesToShow}
                    onGoPage={this.goPage}
                    onPrevPage={this.onPrev}
                    onNextPage={this.onNext}
                />
            </div> */}
        </div>
    )
}

export default ProductList