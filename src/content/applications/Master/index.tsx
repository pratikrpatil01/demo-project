import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container, Card, MenuItem } from '@mui/material';
import Footer from 'src/components/Footer';

import PageHeader from 'src/components/PageHeader';
import { useNavigate } from 'react-router';
import MaterialTable from 'src/components/Table/materialTable';
import { Columns } from 'src/utils/commonFunction';
import React, { useCallback, useEffect, useMemo } from 'react';
import { AddtypeModal } from 'src/content/pages/Components/Modals';
import { dispatch, useSelector } from 'src/store';
import { GetContentTypeList } from 'src/store/reducers/master';
import { ChangeStatus, DeleteItem } from 'src/store/reducers/commanReducer';
import DeleteAlert from 'src/components/DeleteAlert';
import Loader from 'src/components/Loader';

function MasterList() {
  const navigate = useNavigate();
  const { data, isLoading } = useSelector((store: any) => store.masterType);
  const [open, setOpen] = React.useState(false);
  // const [isLoading, setIsLoading] = React.useState(false);
  const [rowCount, setRowCount] = React.useState({
    mainData: 0,
    user: 0,
    manufacturer: 0
  });

  const getData = () => {
    return dispatch(GetContentTypeList());
  };

  useEffect(() => {
    getData();
  }, []);

  const handleModal = () => {
    setOpen(!open);
  };

  const handleEdit = (data: any) => {
    navigate('/master/edit-user', { state: { data } });
  };

  const handleDelete = (id: string) => {
    DeleteAlert({
      id: id,
      data: {
        type: 'ContentType'
      }
    });
  };

  const handleStatus = ({ id, status }) => {
    dispatch(
      ChangeStatus({
        id: id,
        data: {
          status: status == 1 ? 2 : 1,
          type: 'ContentType'
        }
      })
    );
  };

  const key = ['title', 'type', 'status'];
  const columns = Columns(key);

  const TableAction = (row: any, closeMenu: any) => {
    console.log(row, 'closeMenu', closeMenu);
    const action = [
      <MenuItem
        key="edit"
        // onClick={() => navigate(`/admin/content_type/edit/${row._id}`)}
      >
        Edit
      </MenuItem>,
      <MenuItem
        key="delete"
        onClick={() => {
          handleDelete(row?._id);
          closeMenu();
        }}
      >
        Delete
      </MenuItem>,
      <MenuItem
        key="status"
        onClick={() => {
          handleStatus({ id: row?._id, status: row?.status });
          closeMenu();
        }}
      >
        {row?.status == 1 ? 'Active' : 'Inactive'}
      </MenuItem>
    ];
    return action;
  };

  return (
    <>
      <Loader open={isLoading} />
      <Helmet>
        <title>Content Type</title>
      </Helmet>
      <AddtypeModal open={open} handleClose={handleModal} />
      <PageTitleWrapper>
        <PageHeader
          title={'Content Type'}
          actionText="Add Content Type"
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
                data={data || []}
                isLoading={isLoading}
                columns={columns}
                getData={''}
                rowCount={rowCount.mainData}
                tableAction={TableAction}
                title="Content Type List"
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
