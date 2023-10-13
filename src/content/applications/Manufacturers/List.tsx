import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Button, Grid, Container, MenuItem, Typography } from '@mui/material';
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

function List() {
  const { count, ManufacturerData, isLoading } = useSelector(  
  (store: any) => store.manufacturerSlice
  );



  console.log("count, ManufacturerData, isLoading----------------------->>>>>>>>>>>>>>>>",count, ManufacturerData, isLoading)
  const [filterData, setFilterData] = useState({});

  const pagination = { pageIndex: 1, pageSize: 10 };
  const navigate = useNavigate();
  // const { ManufacturerData, count } = useSelector(
  //   (store) => store.manufacturerSlice
  // );

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

  const TableAction = (row) => {
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
  const handelChange = (props) => {
    console.log('fdijgiofdjgo', props);
  };

  const handleFilter = (e) => {
    const { value, name } = e.target;
    setFilterData((prev) => ({ ...prev, [name]: value }));
  };

  async function getList(pagination: any) {
    // setIsLoading(true);
    const payload = {
      page: pagination?.pageIndex,
      limit: pagination?.pageSize,
      info: filterData
    };
    dispatch(GetManufacturerList(payload));
    // console.log('manufacturerList', ManufacturerData);
    // console.log('manufacturerDetails', manufacturerDetails);
    const response = null;
    // await ApiServices('post', payload, ApiEndPoints.DataList);

    // if (response?.success) {
    //   setData(response?.data?.document);
    //   setRowCount((prev) => ({
    //     ...prev,
    //     mainData: response?.data?.filterCount
    //   }));
    // } else {
    //   //   setData([]);
    // }
    // setIsLoading(false);
  }

  return (
    <>
      <MaterialTable
        data={[]}
        isLoading={isLoading}
        columns={columns}
        getData={getList}
        rowCount={count}
        tableAction={TableAction}
        title="Manufacturer List"
        Filter={<></>}
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

const dummyData = [
  {
    id: ' 1',
    name: 'Giacomo',
    city: 'indore',
    country: 'india',
    product: 'paracetamol',
    companyDoc: 'docs',
    plantName: 'lupin',
    status: 'Active'
  },
  {
    id: ' 2',
    name: 'Marco',
    city: 'mumbai',
    country: 'india',
    product: 'MR powergesic',
    companyDoc: 'docs',
    plantName: 'pharma',
    status: 'Active'
  },
  {
    id: ' 3',
    name: 'Mariah',
    city: 'pune',
    country: 'india',
    product: 'xerofam',
    companyDoc: 'docs',
    plantName: 'tata',
    status: 'Active'
  },
  {
    id: ' 4',
    name: 'Valerie',
    city: 'jablpur',
    country: 'india',
    product: 'cobate',
    companyDoc: 'docs',
    plantName: 'dabar',
    status: 'Active'
  },
  {
    id: ' 5',
    name: 'Giacomo',
    city: 'indore',
    country: 'india',
    product: 'paracetamol',
    companyDoc: 'docs',
    plantName: 'lupin',
    status: 'Active'
  },
  {
    id: ' 6',
    name: 'Marco',
    city: 'mumbai',
    country: 'india',
    product: 'MR powergesic',
    companyDoc: 'docs',
    plantName: 'pharma',
    status: 'Active'
  },
  {
    id: ' 7',
    name: 'Mariah',
    city: 'pune',
    country: 'india',
    product: 'xerofam',
    companyDoc: 'docs',
    plantName: 'tata',
    status: 'Active'
  },
  {
    id: ' 8',
    name: 'Valerie',
    city: 'jablpur',
    country: 'india',
    product: 'cobate',
    companyDoc: 'docs',
    plantName: 'dabar',
    status: 'Active'
  }
];
