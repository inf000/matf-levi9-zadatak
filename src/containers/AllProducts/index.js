import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getProducts ,deleteProduct} from '../../actions/peoductActions';
import {Header} from "../../components";
import {Card, Layout, Table, Button} from "antd";

export const AllProducts = () => {

    const allProducts = useSelector(state => state.products.allProducts)
    const isFetchingAllProducts = useSelector(state => state.products.isFetchingAllProducts)
    const isDeletingProduct = useSelector(state => state.products.isDeletingProduct)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())

    }, [dispatch])


    const removeProduct = (id) => {
        dispatch(deleteProduct({productId: id})).then(()=>{
            dispatch(getProducts())
        })
    }

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
                                        render: row => <Button loading={isDeletingProduct} type={'danger'} onClick={()=>removeProduct(row.id)}>X</Button>
                                    }]
                            }
                            dataSource={allProducts}
                            rowKey={'id'}
                            pagination={{ pageSize: 8 }}
                            loading={isFetchingAllProducts}
                            showSorterTooltip={false}
                        />
                    </Card>
                </Layout.Content>
            </Layout.Content>
        </React.Fragment>
    )
}