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
  { id: '1', name: 'west', place: 'indore', type: 'user', status: 'active' },
  { id: '2', name: 'west', place: 'indore', type: 'user', status: 'active' },
  { id: '3', name: 'west', place: 'indore', type: 'user', status: 'active' },
  { id: '4', name: 'west', place: 'indore', type: 'user', status: 'active' },
  { id: '5', name: 'west', place: 'indore', type: 'user', status: 'active' },
  { id: '6', name: 'test', place: 'pune', type: 'admin', status: 'inactive' },
  { id: '7', name: 'test', place: 'pune', type: 'admin', status: 'inactive' },
  { id: '8', name: 'test', place: 'pune', type: 'admin', status: 'inactive' },
  { id: '9', name: 'test', place: 'pune', type: 'admin', status: 'inactive' },
  { id: '10', name: 'test', place: 'pune', type: 'admin', status: 'inactive' },
  { id: '11', name: 'demo', place: 'dhar', type: 'master', status: 'pending' },
  { id: '12', name: 'demo', place: 'dhar', type: 'master', status: 'pending' },
  { id: '13', name: 'demo', place: 'dhar', type: 'master', status: 'pending' },
  { id: '14', name: 'demo', place: 'dhar', type: 'master', status: 'pending' },
  { id: '15', name: 'demo', place: 'dhar', type: 'master', status: 'pending' }
];
const tableheader: any = [
  { accesskey: 'name', label: 'Name' },
  { accesskey: 'place', label: 'Place' },
  { accesskey: 'type', label: 'Type' },
  { accesskey: 'status', label: 'status' }
];
