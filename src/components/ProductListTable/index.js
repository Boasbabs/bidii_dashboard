import React from 'react';
import { Button, Checkbox, Table } from 'semantic-ui-react';


const CheckboxElement = () => <Checkbox label='' />


const ProductListTable = ({productList}) => (
    <Table singleLine striped className='m-0'>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell collapsing>
                    <CheckboxElement/>
                </Table.HeaderCell>
                <Table.HeaderCell width={'4'}>Name</Table.HeaderCell>
                <Table.HeaderCell>Code</Table.HeaderCell>
                <Table.HeaderCell>Unit Price</Table.HeaderCell>
                <Table.HeaderCell>Manufacturer</Table.HeaderCell>
                <Table.HeaderCell>UOM</Table.HeaderCell>
                <Table.HeaderCell>Category</Table.HeaderCell>
                <Table.HeaderCell>Reorder Level</Table.HeaderCell>
                <Table.HeaderCell>Active</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            {productList.map(product => {
                return(
                    <Table.Row className='pt-1 pb-1' key={product.id}>
                        <Table.Cell>
                            <CheckboxElement/>
                        </Table.Cell>
                        <Table.Cell>{product.attributes.name}</Table.Cell>
                        <Table.Cell>{product.attributes.code}</Table.Cell>
                        <Table.Cell>{product.attributes.unit_price} GHS</Table.Cell>
                        <Table.Cell>{product.attributes.manufacturer}</Table.Cell>
                        <Table.Cell>{product.attributes.uom}</Table.Cell>
                        <Table.Cell>{product.attributes.category}</Table.Cell>
                        <Table.Cell textAlign={'center'}>{product.attributes.reorder_level}</Table.Cell>
                        <Table.Cell>
                            <Button className='secondary-color-bg white-color'>Active</Button>
                        </Table.Cell>
                    </Table.Row>
                )
            })}
        </Table.Body>
    </Table>
)

export default ProductListTable;