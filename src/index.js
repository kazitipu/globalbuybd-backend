import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
    render() {
        return (
            <BrowserRouter basename={'/'}>
                <ScrollContext>
                    <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={Login} />
                        <Route exact path={`${process.env.PUBLIC_URL}/auth/login`} component={Login} />

                        <App>
                            <Route exact path={`${process.env.PUBLIC_URL}/dashboard`} component={Dashboard} />
                                
                            <Route exact path={`${process.env.PUBLIC_URL}/products/physical/category`} component={Category} />
                            <Route exact path={`${process.env.PUBLIC_URL}/products/physical/sub-category`} component={Sub_category} />
                            <Route exact path={`${process.env.PUBLIC_URL}/products/physical/product-list`} component={Product_list} />
                            <Route exact path={`${process.env.PUBLIC_URL}/products/physical/product-detail`} component={Product_detail} />
                            <Route exact path={`${process.env.PUBLIC_URL}/products/physical/add-product`} component={Add_product} />
                            <Route exact path={`${process.env.PUBLIC_URL}/products/physical/add-product/:id`} component={Update_product} />

                            <Route exact path={`${process.env.PUBLIC_URL}/products/digital/digital-category`} component={Digital_category} />
                            <Route exact path={`${process.env.PUBLIC_URL}/products/digital/digital-sub-category`} component={Digital_sub_category} />
                            <Route exact path={`${process.env.PUBLIC_URL}/products/digital/digital-product-list`} component={Digital_pro_list} />
                            <Route exact path={`${process.env.PUBLIC_URL}/products/digital/digital-add-product`} component={Digital_add_pro} />

                            <Route exact path={`${process.env.PUBLIC_URL}/sales/orders`} component={Orders} />
                            <Route exact path={`${process.env.PUBLIC_URL}/sales/transactions`} component={Transactions_sales} />

                            <Route exact path={`${process.env.PUBLIC_URL}/coupons/list-coupons`} component={ListCoupons} />
                            <Route exact path={`${process.env.PUBLIC_URL}/coupons/create-coupons`} component={Create_coupons} />

                            <Route exact path={`${process.env.PUBLIC_URL}/pages/list-page`} component={ListPages} />
                            <Route exact path={`${process.env.PUBLIC_URL}/pages/create-page`} component={Create_page} />

                            {/* <Route exact epath={`${process.env.PUBLIC_URL}/media`} component={Media} /> */}

                            <Route exact path={`${process.env.PUBLIC_URL}/menus/list-menu`} component={List_menu} />
                            <Route exact path={`${process.env.PUBLIC_URL}/menus/create-menu`} component={Create_menu} />

                            <Route exact path={`${process.env.PUBLIC_URL}/users/list-user`} component={List_user} />
                            <Route exact path={`${process.env.PUBLIC_URL}/users/create-user`} component={Create_user} />

                            <Route exact path={`${process.env.PUBLIC_URL}/vendors/list_vendors`} component={List_vendors} />
                            <Route exact path={`${process.env.PUBLIC_URL}/vendors/create-vendors`} component={Create_vendors} />

                            <Route exact path={`${process.env.PUBLIC_URL}/localization/transactions`} component={Translations} />
                            <Route exact path={`${process.env.PUBLIC_URL}/localization/currency-rates`} component={Rates} />
                            <Route exact path={`${process.env.PUBLIC_URL}/localization/taxes`} component={Taxes} />

                            <Route exact path={`${process.env.PUBLIC_URL}/reports/report`} component={Reports} />

                            <Route exact path={`${process.env.PUBLIC_URL}/settings/profile`} component={Profile} />

                            <Route exact path={`${process.env.PUBLIC_URL}/invoice`} component={Invoice} />

                            <Route exact path={`${process.env.PUBLIC_URL}/data-table`} component={Datatable} />

                        </App>
                    </Switch>
                </ScrollContext>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));


