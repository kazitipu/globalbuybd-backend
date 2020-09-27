import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './index.scss';
import App from './components/app';
import { ScrollContext } from 'react-router-scroll-4';

// Components
import Dashboard from './components/dashboard';

// Products physical
import Category from './components/products/physical/category';
import Sub_category from './components/products/physical/sub-category';
import Product_list from './components/products/physical/product-list';
import Add_product from './components/products/physical/add-product';
import Update_product from './components/products/physical/update-prodcut'
import Product_detail from './components/products/physical/product-detail';

//Product Digital
import Digital_category from './components/products/digital/digital-category';
import Digital_sub_category from './components/products/digital/digital-sub-category';
import Digital_pro_list from './components/products/digital/digital-pro-list';
import Digital_add_pro from './components/products/digital/digital-add-pro';

//Sales
import Orders from './components/sales/orders';
import Transactions_sales from './components/sales/transactions-sales';
//Coupons
import ListCoupons from './components/coupons/list-coupons';
import Create_coupons from './components/coupons/create-coupons';

//Pages
import ListPages from './components/pages/list-page';
import Create_page from './components/pages/create-page';
import Media from './components/media/media';
import List_menu from './components/menus/list-menu';
import Create_menu from './components/menus/create-menu';
import List_user from './components/users/list-user';
import Create_user from './components/users/create-user';
import List_vendors from './components/vendors/list-vendors';
import Create_vendors from './components/vendors/create.vendors';
import Translations from './components/localization/translations';
import Rates from './components/localization/rates';
import Taxes from './components/localization/taxes';
import Profile from './components/settings/profile';
import Reports from './components/reports/report';
import Invoice from './components/invoice';
import Datatable from './components/common/datatable'
import Login from './components/auth/login';



class Root extends Component {
    constructor(props){
        super(props)
        this.state ={
            currentAdmin: null
        }

    }

    setCurrentAdmin= (adminObj) =>{
        this.setState({currentAdmin:adminObj})
        console.log(this.state.currentAdmin)
    }
    render() {
        const {currentAdmin} = this.state;
        return (
            <BrowserRouter basename={'/'}>
                <ScrollContext>
                    <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={()=> <Login setCurrentAdmin={this.setCurrentAdmin} currentAdmin={currentAdmin}/>} />
                        {/* <Route exact path={`${process.env.PUBLIC_URL}/auth/login`} component={Login} /> */}

                        <App>
                            <Route exact path={`${process.env.PUBLIC_URL}/dashboard`} component={()=>currentAdmin?<Dashboard/>:<Redirect to='/'/>} />
                                
                            <Route exact path={`${process.env.PUBLIC_URL}/products/physical/category`} component={()=>currentAdmin? <Category/>:<Redirect to='/'/>} />
                            <Route exact path={`${process.env.PUBLIC_URL}/products/physical/sub-category`} component={()=>currentAdmin? <Sub_category/>:<Redirect to='/'/>} />
                            <Route exact path={`${process.env.PUBLIC_URL}/products/physical/product-list`} component={()=>currentAdmin? <Product_list/>:<Redirect to='/'/>} />
                            <Route exact path={`${process.env.PUBLIC_URL}/products/physical/product-detail`} component={()=>currentAdmin? <Product_detail/>:<Redirect to='/'/>} />
                            <Route exact path={`${process.env.PUBLIC_URL}/products/physical/add-product`} component={()=>currentAdmin? <Add_product/>:<Redirect to='/'/>} />
                            <Route exact path={`${process.env.PUBLIC_URL}/products/physical/add-product/:id`} component={()=>currentAdmin? <Update_product/>:<Redirect to='/'/>} />

                            <Route exact path={`${process.env.PUBLIC_URL}/products/digital/digital-category`} component={()=>currentAdmin?<Digital_category/>:<Redirect to='/'/>} />
                            <Route exact path={`${process.env.PUBLIC_URL}/products/digital/digital-sub-category`} component={()=>currentAdmin?<Digital_sub_category/>:<Redirect to='/'/>} />
                            <Route exact path={`${process.env.PUBLIC_URL}/products/digital/digital-product-list`} component={()=>currentAdmin?<Digital_pro_list/>:<Redirect to='/'/>} />
                            <Route exact path={`${process.env.PUBLIC_URL}/products/digital/digital-add-product`} component={()=>currentAdmin?<Digital_add_pro/>:<Redirect to='/'/>} />

                            <Route exact path={`${process.env.PUBLIC_URL}/sales/orders`} component={()=>currentAdmin?<Orders/>:<Redirect to='/'/>} />
                            <Route exact path={`${process.env.PUBLIC_URL}/sales/transactions`} component={()=>currentAdmin?<Transactions_sales/>:<Redirect to='/'/>} />
                            <Route exact path={`${process.env.PUBLIC_URL}/coupons/list-coupons`} component={()=>currentAdmin?<ListCoupons/>:<Redirect to='/'/>} />
                            <Route exact path={`${process.env.PUBLIC_URL}/coupons/create-coupons`} component={()=>currentAdmin?<Create_coupons/>:<Redirect to='/'/>} />

                            <Route exact path={`${process.env.PUBLIC_URL}/pages/list-page`} component={()=>currentAdmin?<ListPages/>:<Redirect to='/'/>} />
                            <Route exact path={`${process.env.PUBLIC_URL}/pages/create-page`} component={()=>currentAdmin?<Create_page/>:<Redirect to='/'/>} />

                            {/* <Route exact epath={`${process.env.PUBLIC_URL}/media`} component={Media} /> */}

                            <Route exact path={`${process.env.PUBLIC_URL}/menus/list-menu`} component={()=>currentAdmin?<List_menu/>:<Redirect to='/'/>} />
                            <Route exact path={`${process.env.PUBLIC_URL}/menus/create-menu`} component={()=>currentAdmin?<Create_menu/>:<Redirect to='/'/>} />

                            <Route exact path={`${process.env.PUBLIC_URL}/users/list-user`} component={()=>currentAdmin?<List_user/>:<Redirect to='/'/>} />
                            <Route exact path={`${process.env.PUBLIC_URL}/users/create-user`} component={()=>currentAdmin?<Create_user/>:<Redirect to='/'/>} />

                            <Route exact path={`${process.env.PUBLIC_URL}/vendors/list_vendors`} component={()=>currentAdmin?<List_vendors/>:<Redirect to='/'/>} />
                            <Route exact path={`${process.env.PUBLIC_URL}/vendors/create-vendors`} component={()=>currentAdmin?<Create_vendors/>:<Redirect to='/'/>} />

                            <Route exact path={`${process.env.PUBLIC_URL}/localization/transactions`} component={()=>currentAdmin?<Translations/>:<Redirect to='/'/>} />
                            <Route exact path={`${process.env.PUBLIC_URL}/localization/currency-rates`} component={()=>currentAdmin?<Rates/>:<Redirect to='/'/>} />
                            <Route exact path={`${process.env.PUBLIC_URL}/localization/taxes`} component={()=>currentAdmin?<Taxes/>:<Redirect to='/'/>} />

                            <Route exact path={`${process.env.PUBLIC_URL}/reports/report`} component={()=>currentAdmin?<Reports/>:<Redirect to='/'/>} />

                            <Route exact path={`${process.env.PUBLIC_URL}/settings/profile`} component={()=>currentAdmin?<Profile/>:<Redirect to='/'/>} />

                            <Route exact path={`${process.env.PUBLIC_URL}/invoice`} component={()=>currentAdmin?<Invoice/>:<Redirect to='/'/>} />

                            <Route exact path={`${process.env.PUBLIC_URL}/data-table`} component={()=>currentAdmin?<Datatable/>:<Redirect to='/'/>} />

                        </App>
                    </Switch>
                </ScrollContext>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));


