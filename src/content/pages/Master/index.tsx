import { Helmet } from 'react-helmet-async';
// import PageHeader from 'src/content/dashboards/Crypto/PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container, Card } from '@mui/material';
import Footer from 'src/components/Footer';

import RecentOrders from 'src/content/applications/Transactions/RecentOrders';
import RecentOrdersTable from 'src/content/applications/Transactions/RecentOrdersTable';
import { UserList } from 'src/models/user_list';
import MainTable from '../Components/Table';
import PageHeader from 'src/components/PageHeader';
import { useNavigate } from 'react-router';
// import RecentOrders from './RecentOrders';

function MasterList() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/master/add-user');
  };
  const handleEdit = (data: any) => {
    navigate('/master/edit-user', { state: { data } });
  };
  const handleDelete = () => {
    // navigate('/master/add-user');
  };
  return (
    <>
      <Helmet>
        <title>Master</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader
          title={'Master'}
          actionText="Add User"
          subTitle=""
          link="/master/add-user"
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
              <MainTable
                cryptoOrders={data}
                tableHeader={tableheader}
                title="User List"
                handleDelete={handleDelete}
                handleEdit={handleEdit}
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

const data: UserList[] = [
  {
    id: '1',
    email: 'test@gmail.com',
    name: 'test',
    place: 'pune',
    type: 'admin',
    status: 'inactive'
  },
  {
    id: '2',
    email: 'demo@gmail.com',
    name: 'demo',
    place: 'dhar',
    type: 'master',
    status: 'pending'
  },
  {
    id: '3',
    email: 'west@gmail.com',
    name: 'west',
    place: 'indore',
    type: 'user',
    status: 'active'
  },
  {
    id: '4',
    email: 'test@gmail.com',
    name: 'test',
    place: 'pune',
    type: 'admin',
    status: 'inactive'
  },
  {
    id: '5',
    email: 'demo@gmail.com',
    name: 'demo',
    place: 'dhar',
    type: 'master',
    status: 'pending'
  },
  {
    id: '6',
    email: 'west@gmail.com',
    name: 'west',
    place: 'indore',
    type: 'user',
    status: 'active'
  },
  {
    id: '7',
    email: 'test@gmail.com',
    name: 'test',
    place: 'pune',
    type: 'admin',
    status: 'inactive'
  },
  {
    id: '8',
    email: 'demo@gmail.com',
    name: 'demo',
    place: 'dhar',
    type: 'master',
    status: 'pending'
  },
  {
    id: '9',

    email: 'west@gmail.com',
    name: 'west',
    place: 'indore',
    type: 'user',
    status: 'active'
  },
  {
    id: '10',
    email: 'test@gmail.com',
    name: 'test',
    place: 'pune',
    type: 'admin',
    status: 'inactive'
  },
  {
    id: '11',
    email: 'demo@gmail.com',
    name: 'demo',
    place: 'dhar',
    type: 'master',
    status: 'pending'
  },
  {
    id: '12',

    email: 'west@gmail.com',
    name: 'west',
    place: 'indore',
    type: 'user',
    status: 'active'
  },
  {
    id: '13',
    email: 'test@gmail.com',
    name: 'test',
    place: 'pune',
    type: 'admin',
    status: 'inactive'
  },
  {
    id: '14',
    email: 'demo@gmail.com',
    name: 'demo',
    place: 'dhar',
    type: 'master',
    status: 'pending'
  },
  {
    id: '15',
    email: 'west@gmail.com',
    name: 'west',
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
