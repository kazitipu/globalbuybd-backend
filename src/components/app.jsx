import React, { Component } from 'react'
import Sidebar from './common/sidebar_components/sidebar';
import Right_sidebar from './common/right-sidebar';
import Footer from './common/footer';
import Header from './common/header_components/header';
import {getAllOrders, getAllPayments,getAllAdmins} from '../firebase/firebase.utils'
import {connect} from 'react-redux'
import {setAllOrders, setAllPayments,setAllAdmins} from '../actions'

export class App extends Component {
    constructor(props){
        super(props);
        this.state ={
            ltr:true,
            divName:'RTL',
        }
    }

    componentDidMount=async()=>{
        const allOrdersArray = await getAllOrders()
        const allPaymentsArray = await getAllPayments()
        const allAdminsArray = await getAllAdmins()
        this.props.setAllOrders(allOrdersArray)
        this.props.setAllPayments(allPaymentsArray)
        this.props.setAllAdmins(allAdminsArray)

    }
    ChangeRtl(divName){
        if(divName === 'RTL') {
            document.body.classList.add('rtl');
            this.setState({divName: 'LTR'});
        }else{
            document.body.classList.remove('rtl');
            this.setState({divName: 'RTL'});
        }
    }
    render() {
        return (
            <div>
                <div className="page-wrapper" >
                    <Header />
                    <div className="page-body-wrapper">
                        <Sidebar />
                        <Right_sidebar />
                        <div className="page-body">
                            {this.props.children}
                        </div>
                        <Footer />
                    </div>
                </div>
                <div className="btn-light custom-theme" onClick={ () => this.ChangeRtl(this.state.divName)}>{this.state.divName}</div>
            </div>
        )
    }
}

export default connect(null,{setAllOrders,setAllPayments,setAllAdmins})(App);
