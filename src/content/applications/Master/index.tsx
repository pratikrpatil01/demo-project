import { Helmet } from 'react-helmet-async';
// import PageHeader from 'src/content/dashboards/Crypto/PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container, Card, MenuItem } from '@mui/material';
import Footer from 'src/components/Footer';

import RecentOrders from 'src/content/applications/Transactions/RecentOrders';
import RecentOrdersTable from 'src/content/applications/Transactions/RecentOrdersTable';
import { UserList } from 'src/models/user_list';
import MainTable from '../../pages/Components/Table';
import PageHeader from 'src/components/PageHeader';
import { useNavigate } from 'react-router';
import MaterialTable from 'src/components/Table/materialTable';
import { Columns } from 'src/utils/commonFunction';
import React from 'react';
import { AddtypeModal } from 'src/content/pages/Components/Modals';
import { dispatch, useSelector } from 'src/store';
import { GetTypeList } from 'src/store/reducers/master';
// import { useSelector } from 'react-redux';
// import RecentOrders from './RecentOrders';

function MasterList() {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const { data } = useSelector((store: any) => store.masterType);
  const [open, setOpen] = React.useState(false);
  // const [data, setData] = React.useState(dummyData);
  const [isLoading, setIsLoading] = React.useState(false);
  const [filterData, setFilterData] = React.useState({});
  const [rowCount, setRowCount] = React.useState({
    mainData: 0,
    user: 0,
    manufacturer: 0
  });

  console.log('masterType', data);
  React.useEffect(() => {
    dispatch(GetTypeList());
  }, []);

  const handleModal = () => {
    setOpen(!open);
  };
  const handleClick = () => {
    navigate('/master/add-user');
  };
  const handleEdit = (data: any) => {
    navigate('/master/edit-user', { state: { data } });
  };
  const handleDelete = () => {
    // navigate('/master/add-user');
  };

  const key = ['title', 'type', 'status'];
  const columns = Columns(key);

  const TableAction = (row) => {
    const action = [
      <MenuItem
        key="Details"
        onClick={() => navigate(`/manufacturer/details/${row.id}`)}
      >
        Edit
      </MenuItem>,
      <MenuItem
        key="edit"
        onClick={() => navigate(`/manufacturer/add-plant/${row.id}`)}
      >
        Delete
      </MenuItem>
    ];
    return action;
  };

  return (
    <>
      <Helmet>
        <title>Master</title>
      </Helmet>
      <AddtypeModal open={open} handleClose={handleModal} />
      <PageTitleWrapper>
        <PageHeader
          title={'Master'}
          actionText="Add User"
          subTitle=""
          handleClick={handleModal}
        />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <Card>
              {/* <MainTable
                cryptoOrders={data}
                tableHeader={tableheader}
                title="User List"
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              /> */}

              <MaterialTable
                data={data}
                isLoading={isLoading}
                columns={columns}
                getData={''}
                rowCount={rowCount.mainData}
                tableAction={TableAction}
                title="Manufacturer List"
                Filter={<></>}
              />
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default MasterList;

const dummyData = [
  {
    id: '1',
    email: 'test@gmail.com',
    title: 'test',
    place: 'pune',
    type: 'admin',
    status: 'inactive'
  },
  {
    id: '2',
    email: 'demo@gmail.com',
    title: 'demo',
    place: 'dhar',
    type: 'master',
    status: 'pending'
  },
  {
    id: '3',
    email: 'west@gmail.com',
    title: 'west',
    place: 'indore',
    type: 'user',
    status: 'active'
  },
  {
    id: '4',
    email: 'test@gmail.com',
    title: 'test',
    place: 'pune',
    type: 'admin',
    status: 'inactive'
  },
  {
    id: '5',
    email: 'demo@gmail.com',
    title: 'demo',
    place: 'dhar',
    type: 'master',
    status: 'pending'
  },
  {
    id: '6',
    email: 'west@gmail.com',
    title: 'west',
    place: 'indore',
    type: 'user',
    status: 'active'
  },
  {
    id: '7',
    email: 'test@gmail.com',
    title: 'test',
    place: 'pune',
    type: 'admin',
    status: 'inactive'
  },
  {
    id: '8',
    email: 'demo@gmail.com',
    title: 'demo',
    place: 'dhar',
    type: 'master',
    status: 'pending'
  },
  {
    id: '9',

    email: 'west@gmail.com',
    title: 'west',
    place: 'indore',
    type: 'user',
    status: 'active'
  },
  {
    id: '10',
    email: 'test@gmail.com',
    title: 'test',
    place: 'pune',
    type: 'admin',
    status: 'inactive'
  },
  {
    id: '11',
    email: 'demo@gmail.com',
    title: 'demo',
    place: 'dhar',
    type: 'master',
    status: 'pending'
  },
  {
    id: '12',

    email: 'west@gmail.com',
    title: 'west',
    place: 'indore',
    type: 'user',
    status: 'active'
  },
  {
    id: '13',
    email: 'test@gmail.com',
    title: 'test',
    place: 'pune',
    type: 'admin',
    status: 'inactive'
  },
  {
    id: '14',
    email: 'demo@gmail.com',
    title: 'demo',
    place: 'dhar',
    type: 'master',
    status: 'pending'
  },
  {
    id: '15',
    email: 'west@gmail.com',
    title: 'west',
    place: 'indore',
    type: 'user',
    status: 'active'
  }
];
const tableheader: any = [
  { accesskey: 'name', label: 'Name' },
  { accesskey: 'email', label: 'Email' },
  { accesskey: 'place', label: 'Place' },
  { accesskey: 'type', label: 'Type' },
  { accesskey: 'status', label: 'status' }
];
