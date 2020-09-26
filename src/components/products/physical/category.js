import React, { Component, Fragment} from 'react'
import Breadcrumb from '../../common/breadcrumb';
import Modal from 'react-responsive-modal';
import 'react-toastify/dist/ReactToastify.css';
import data from '../../../assets/data/category';
import Datatable from '../../common/datatable';
import {getAllProducts} from '../../../firebase/firebase.utils'
import {Link} from 'react-router-dom'

export class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            allProducts:[],
        };
    }
    // onOpenModal = () => {
    //     this.setState({ open: true });
    // };

    // onCloseModal = () => {
    //     this.setState({ open: false });
    // };
    componentDidMount=async()=>{
        const allProducts = await getAllProducts()
        this.setState({allProducts,})
    }

    render() {
        const { open,allProducts } = this.state;
        console.log(allProducts)
        return (
            <Fragment>
                <Breadcrumb title="Products List" parent="Physical" />
                {/* <!-- Container-fluid starts--> */}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Products List</h5>
                                </div>
                                <div className="card-body">
                                    {/* <div className="btn-popup pull-right"> 
                                    <Link to='/products/physical/add-product' ><button type="button" className="btn btn-primary" >Add Product</button></Link>
                                    </div>  */}
                                    <div className="clearfix"></div>
                                    <div id="basicScenario" className="product-physical">
                                        <Datatable
                                            history = {this.props.history}
                                            multiSelectOption={false}                                           
                                            myData={allProducts} 
                                            pageSize={10} 
                                            pagination={true}
                                            class="-striped -highlight" 
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Container-fluid Ends--> */}
            </Fragment>
        )
    }
}

export default Category

