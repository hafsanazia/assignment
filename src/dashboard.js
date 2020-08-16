import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

const mapStateToProps = state => (
    {
        employeeList: state.employee.data,
    });

class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isTable: false
        }
    }

    tableData() {
        let employeeData = this.props.employeeList.user;
        let tableHead = Object.keys(employeeData[0]);
        let tableData = [];
        console.log('tbl head', tableHead);


        employeeData.forEach(element => {
            tableData.push(Object.values(element))
        });

        console.log('tbl data', tableData);
        this.setState({
            tableHead: tableHead,
            tableData: tableData,
            isTable: true
        });

    }
    componentDidMount() {
        this.tableData();
    }

    render() {

        return (

            <View style={styles.container}>
                <View style={styles.heading}>
                    <Text style={{
                        color: "white",
                        fontSize: 14
                    }}> Employee List</Text>
                </View>
                {
                    this.state.isTable ?
                        <View>
                            <Table borderStyle={{ borderWidth: 1, borderColor: '#c8e1ff', backgroundColor: 'blue' }}>
                                <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text} />
                                <Rows data={this.state.tableData} textStyle={styles.text} />
                            </Table>
                        </View>
                        :
                        <Text> No Data</Text>
                }
            </View>
        );
    }
}

export default connect(mapStateToProps)(Dashboard);

const styles = StyleSheet.create({

    heading: {
        backgroundColor: '#455a64',
        padding: 10,
        marginBottom: 10

    },
    container: {
        flex: 1,
        padding: 16
    },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6, textAlign: 'center' }
});