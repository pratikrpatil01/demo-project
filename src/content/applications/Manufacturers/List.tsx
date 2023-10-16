import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import {
  Button,
  Grid,
  Container,
  MenuItem,
  Typography,
  TextField
} from '@mui/material';
import Footer from 'src/components/Footer';

import RecentOrders from './RecentOrders';
import MaterialTable from 'src/components/Table/materialTable';
import { city, countryOptions, state } from 'src/components/Utils/constant';
import { Columns } from 'src/components/Utils/commonFunction';
import { useNavigate } from 'react-router';
import React from 'react';
import { Link } from 'react-router-dom';
import { GetManufacturerList } from 'src/store/reducers/manufacturer';
import { dispatch, useSelector } from 'src/store';
import { GetProductList } from 'src/store/reducers/product';

function List() {
  const { count, ManufacturerData, isLoading } = useSelector(
    (store: any) => store.manufacturerSlice
  );

  console.log('count, ManufacturerData', count, ManufacturerData);
  const { productData } = useSelector((store: any) => store.productData);

  useEffect(() => {
    getProductData();
  }, []);

  const [filterData, setFilterData] = useState({});

  const pagination = { pageIndex: 1, pageSize: 10 };
  const navigate = useNavigate();

  const key = [
    'id',
    'name',
    'city',
    'country',
    'product',
    'companyDoc',
    'plantName',
    'status'
  ];
  const columns = Columns(key);

  const handelChange = (props: any) => {
    console.log('fdijgiofdjgo', props);
  };

  const getProductData = () => {
    dispatch(GetProductList());
  };

  const handleFilter = (e: any) => {};

  async function getList(pagination: any) {
    const payload = {
      page: pagination?.pageIndex,
      limit: pagination?.pageSize
    };
    dispatch(GetManufacturerList(payload));
    const response = null;
  }

  const TableAction = (row: any) => {
    const action = [
      <MenuItem
        key="Details"
        onClick={() => navigate(`/admin/manufacturers/details/${row.id}`)}
      >
        Details
      </MenuItem>,
      <MenuItem
        key="edit"
        onClick={() => navigate(`/manufacturer/add-plant/${row.id}`)}
      >
        Add Plant
      </MenuItem>,
      <MenuItem key="edit" onClick={() => console.info('Edit', row)}>
        Active
      </MenuItem>,
      <MenuItem key="edit" onClick={() => console.info('Edit', row)}>
        Inactive
      </MenuItem>,
      <MenuItem
        key="edit"
        onClick={() => alert({ fun: handelChange, data: row })}
      >
        Delete
      </MenuItem>
    ];
    return action;
  };

  return (
    <>
      <MaterialTable
        data={ManufacturerData || []}
        isLoading={isLoading}
        columns={columns}
        getData={getList}
        rowCount={count}
        tableAction={TableAction}
        title="Manufacturer List"
        Filter={
          <>
            <TextField
              select
              label="Select Product"
              name="Filter"
              defaultValue="All"
              onChange={handleFilter}
              sx={{ minWidth: '150px' }}
              size={'small'}
              fullWidth
            >
              {productData &&
                productData?.map((item: any, index: number) => (
                  <MenuItem key={index} value={item?.products_name}>
                    {item?.products_name}
                  </MenuItem>
                ))}
            </TextField>
          </>
        }
      />
    </>
  );
}

export default List;

const filterOption = [
  { lable: 'Country', name: 'country', type: 'select', option: countryOptions },
  { lable: 'State', name: 'State', type: 'select', option: state },
  { lable: 'City', name: 'City', type: 'select', option: city },
  { lable: 'Start Date', name: '$gte', type: 'date' },
  { lable: 'End Date', name: '$lt', type: 'date' }
];

const productList = ['test', 'demo'];
