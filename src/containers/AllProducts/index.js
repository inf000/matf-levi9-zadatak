import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getProducts ,deleteProduct} from '../../actions/peoductActions';
import {Header} from "../../components";
import {Card, Layout, Table, Button} from "antd";

class AllProducts extends Component {

    state = {

    }

    componentDidMount() {
        this.initialize()
    }

    initialize = () => {
        this.props.getProducts({})
    }

    removeProduct = (id) => {
        this.props.deleteProduct({productId: id}).then(()=>{
            this.initialize()
        })
    }
    render() {
        return (
            <React.Fragment>
                <Layout.Content>
                    <Header/>
                    <Layout.Content>
                            <Card style={{margin: 20}}>
                                <Table
                                    columns={
                                        [{
                                            title: <span style={{marginLeft: 10}}>Product Name</span>,
                                            key: 'name',
                                            width: '20%',
                                            ellipsis: true,
                                            sorter: (a, b) => a.name.localeCompare(b.name),
                                            render: row => <span>{row.name}</span>
                                        },
                                        {
                                            title: <span style={{marginLeft: 10}}>Product Description</span>,
                                            key: 'name',
                                            width: '75%',
                                            ellipsis: true,
                                            sorter: (a, b) => a.description.localeCompare(b.description),
                                            render: row => <span>{row.description}</span>
                                        },
                                        {
                                            title: '',
                                            key: 'action',
                                            width: '65px',
                                            render: row => <Button loading={this.props.isDeletingProduct} type={'danger'} onClick={()=>this.removeProduct(row.id)}>X</Button>
                                        }]
                                    }
                                    dataSource={this.props.allProducts}
                                    rowKey={'id'}
                                    pagination={{ pageSize: 8 }}
                                    loading={this.props.isFetchingAllProducts}
                                    showSorterTooltip={false}
                                />
                            </Card>
                    </Layout.Content>
                </Layout.Content>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    allProducts: state.products.allProducts,
    isFetchingAllProducts: state.products.isFetchingAllProducts,
    isDeletingProduct: state.products.isDeletingProduct,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({getProducts, deleteProduct}, dispatch);

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(AllProducts)
);