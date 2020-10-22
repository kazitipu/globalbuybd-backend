import {
    Home,
    Box,
    DollarSign,
    Tag,
    Clipboard,
    Camera,
    AlignLeft,
    UserPlus,
    Users,
    Chrome,
    BarChart,Settings,Archive, LogIn
} from 'react-feather';

export const MENUITEMS = [
    {
        path: '/dashboard', title: 'Dashboard', icon: Home, type: 'link', badgeType: 'primary', active: false
    },
    {
        title: 'Products', icon: Box, type: 'sub', active: false, children: [
            {
                title: 'in stock/pre order', type: 'sub', active: false, children: [
                    { path: '/products/physical/category', title: 'Product List', type: 'link' },
                    // { path: '/products/physical/sub-category', title: 'Sub Category', type: 'link' },
                    // { path: '/products/physical/product-list', title: 'Product grid', type: 'link' },
                    // { path: '/products/physical/product-detail', title: 'Product Detail', type: 'link' },
                    { path: '/products/physical/add-product', title: 'Add Product', type: 'link' },
                    { path: '/products/physical/add-aliexpress-product', title: 'Add AliProduct', type: 'link' },
                ]
            },
            // {
            //     title: 'digital', type: 'sub', active: false, children: [
            //         { path: '/products/digital/digital-category', title: 'Category', type: 'link' },
            //         { path: '/products/digital/digital-sub-category', title: 'Sub Category', type: 'link' },
            //         { path: '/products/digital/digital-product-list', title: 'Product List', type: 'link' },
            //         { path: '/products/digital/digital-add-product', title: 'Add Product', type: 'link' },
            //     ]
            // },
        ]
    },
    {
        title: 'Orders', icon: DollarSign, type: 'sub', active: false, children: [
            { path: '/sales/orders', title: 'All Orders', type: 'link' },
            { path: '/sales/order_pending', title: 'Pending Orders', type: 'link' },
            { path: '/sales/payment_approved', title: 'Payment Approved', type: 'link' },
            { path: '/sales/ordered', title: 'Ordered', type: 'link' },
            { path: '/sales/china_warehouse', title: 'China Warehouse', type: 'link' },
            { path: '/sales/in-shipping', title: 'In Shipment', type: 'link' },
            { path: '/sales/in_stock', title: 'In stock', type: 'link' },
            { path: '/sales/delivered', title: 'Delivered', type: 'link' },
        ]
    },
    {
        title: 'Payments', icon: Tag, type: 'sub', active: false, children: [
            { path: '/payments/unVerified', title: 'Unverified Payments', type: 'link' },
            { path: '/payments/verified', title: 'Verified Payments', type: 'link' },
        ]
    },
    {
        title: 'Product to order', icon: Clipboard , type: 'sub', active: false, children: [
            { path: '/pages/product-to-order', title: 'Product to order', type: 'link' },
         
        ]
    },
    // {
    //     title: 'Media', path: '/media', icon: Camera, type: 'link', active: false
    // },
    // {
    //     title: 'Menus', icon: AlignLeft, type: 'sub', active: false, children: [
    //         { path: '/menus/list-menu', title: 'List Menu', type: 'link' },
    //         { path: '/menus/create-menu', title: 'Create Menu', type: 'link' },
    //     ]
    // },
    {
        title: 'Users', icon: UserPlus, type: 'sub', active: false, children: [
            { path: '/users/list-user', title: 'User List', type: 'link' },
            // { path: '/users/create-user', title: 'Create User', type: 'link' },
        ]
    },
    {
        title: 'Suppliers', icon: Users, type: 'sub', active: false, children: [
            { path: '/suppliers/list_suppliers', title: 'Distributed Orders', type: 'link' },    
        ]
    },
    {
        title: 'Localization', icon: Chrome, type: 'sub', children: [
            { path: '/localization/transactions', title: 'Translations', type: 'link' },
            { path: '/localization/currency-rates', title: 'Currency Rates', type: 'link' },
            { path: '/localization/taxes', title: 'Taxes', type: 'link' }
        ]
    },
    {
        title: 'Reports',path:'/reports/report', icon: BarChart, type: 'link', active: false
    },
    {
        title: 'Settings', icon: Settings, type: 'sub', children: [
            { path: '/settings/profile', title: 'Profile', type: 'link' },
        ]
    },
    {
        title: 'Invoice',path:'/invoice', icon: Archive, type: 'link', active: false
    },
    {
        title: 'Register a manager',path:'/', icon: LogIn, type: 'link', active: false
    },
   
]
