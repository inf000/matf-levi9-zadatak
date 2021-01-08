import React from 'react';
import {bindActionCreators} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {Layout, Menu, Dropdown, Button, Row, Col} from 'antd';
import {MenuUnfoldOutlined} from "@ant-design/icons";

let selectedField = '1';

function activeComponent(history) {
    const path = history.location.pathname
    switch (path)
    {
        case('/admin/unos-novog-proizvoda'):
            selectedField = '1';
            break;
        case('/admin/proizvodi'):
            selectedField = '2';
            break;
        default:
            selectedField = '0';
            break;
    }
    return selectedField;
}

class Header extends React.Component {

    render(){
        const { history } = this.props
        return(
            <Layout.Header style={{height: 57}}>
                <Row style={{marginTop: -7}}>
                    <Col span={20} style={{marginLeft: -25}}>
                        <Row>
                            <Col>
                                <div style={{color: '#dee0e0', fontSize: 28}}>
                                    Levi9
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={4}>
                        <div align={'right'} style={{marginRight: -50}}>
                            <Dropdown trigger={"click"} overlay={
                                <Menu
                                    selectedKeys = {[activeComponent(history)]}
                                    style={{width: 150}}
                                >
                                    <Menu.Item
                                        key="1"
                                        onClick={()=> {
                                            history.push('/admin/unos-novog-proizvoda')
                                        }}
                                    >
                                        Create Product
                                    </Menu.Item>
                                    <Menu.Item
                                        key="2"
                                        onClick={()=> {
                                            history.push('/admin/proizvodi')
                                        }}
                                    >
                                        View Products
                                    </Menu.Item>
                                </Menu>
                            }>
                                <Button>
                                    <MenuUnfoldOutlined />
                                </Button>
                            </Dropdown>
                        </div>
                    </Col>
                </Row>
            </Layout.Header>
        )}
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
    bindActionCreators({}, dispatch);

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Header)
)
