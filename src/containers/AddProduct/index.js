import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {createProduct} from '../../actions/peoductActions';
import {Layout, Row, Col, Form, Input, Button, Card} from 'antd';
import {Header} from '../../components'

class AddProduct extends Component {
    formRef = React.createRef();

    state = {
        name: null,
        description: null,
    }

    createProduct = () => {
        this.props.createProduct({name: this.state.name, description: this.state.description}).then(()=>{
            this.setState({
                name: null,
                description: null
            })
            this.formRef.current.resetFields();
        })
    }

    render() {
        return (
            <Layout.Content>
                <Header/>
                <Layout.Content>
                    <Row style={{ height: '100%' }}>
                        <Col span={24} align={'center'}>
                            <div style={{position: 'relative', top: 100}}>
                                <Card title={<div style={{fontWeight: 600}}>Add Product</div>} style={{width: 450, textAlign: 'left'}}>
                                    <Form
                                        ref={this.formRef}
                                        style={{minWidth: 400}}
                                        onFinish={()=>{this.createProduct()}}
                                    >
                                        <label style={{fontWeight: 300}}>Name</label>
                                        <Form.Item
                                            name={'name'}
                                            rules={[{ required: true, message: 'Name is required!'}]}
                                        >
                                            <Input
                                                placeholder={'Enter product name'}
                                                onChange={(e)=>{
                                                    this.setState({
                                                        name: e.target.value
                                                    })
                                                }}
                                            />
                                        </Form.Item>
                                        <label style={{fontWeight: 300}}>Description</label>
                                        <Form.Item
                                            name={'description'}
                                            rules={[{ required: true, message: 'Description is required!'}]}
                                        >
                                            <Input.TextArea
                                                maxLength={1000}
                                                showCount
                                                autoSize
                                                placeholder={'Enter product description'}
                                                onChange={(e)=>{
                                                    this.setState({
                                                        description: e.target.value
                                                    })
                                                }}
                                            />
                                        </Form.Item>
                                        <Form.Item>
                                            <div align={'right'} style={{marginTop: 20}}>
                                            <Button
                                                loading={this.props.isCreatingProduct}
                                                type={'primary'}
                                                htmlType={'submit'}
                                            >
                                                Add Product
                                            </Button>
                                            </div>
                                        </Form.Item>
                                    </Form>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Layout.Content>
            </Layout.Content>
        )
    }
}

const mapStateToProps = state => ({
    isCreatingProduct: state.products.isCreatingProduct
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({createProduct}, dispatch);

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(AddProduct)
);
