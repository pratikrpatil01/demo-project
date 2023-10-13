import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import {
  Grid,
  Container,
  Card,
  MenuItem,
  TextField,
  Chip,
  Box
} from '@mui/material';
import Footer from 'src/components/Footer';

import PageHeader from 'src/components/PageHeader';
import { useNavigate } from 'react-router';
import MaterialTable from 'src/components/Table/materialTable';
import { Columns, formatCapitalize } from 'src/utils/commonFunction';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  AddtypeModal,
  EdittypeModal
} from 'src/content/pages/Components/Modals';
import { dispatch, useSelector } from 'src/store';
import { GetContentType, GetContentTypeList } from 'src/store/reducers/master';
import { ChangeStatus, DeleteItem } from 'src/store/reducers/commanReducer';
import DeleteAlert from 'src/components/DeleteAlert';
import Loader from 'src/components/Loader';

const ContentTypeConst = {
  Activity: 'Activity',
  ManufacturerLicense: 'Manufacturing License',
  Personel: 'Personel',
  Equipment: 'Equipment',
  TypesofProduct: 'Types of Product',
  Section: 'Sections - Dosage forms approved',
  IndianGmpStatus: 'Indian Gmp Status',
  NonPharmaActivities: 'Non Pharma Activities',
  InternationalGmpStatus: 'InternationalGmpStatus',
  DosageForm: 'Dosage Form',
  BatchesFrequently: 'Batches Frequently'
};
function MasterList() {
  const navigate = useNavigate();
  const { data, rowCount, isLoading } = useSelector(
    (store: any) => store.masterType
  );

  const [open, setOpen] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const [editData, setEditData] = React.useState();
  // const [isLoading, setIsLoading] = React.useState(false);
  // const [rowCount, setRowCount] = React.useState({
  //   mainData: 0,
  //   user: 0,
  //   manufacturer: 0
  // });

  const getData = (pagination: any) => {
    return dispatch(GetContentTypeList(pagination));
  };

  useEffect(() => {
    getData({ page: 1, limit: 10 });
  }, []);

  const handleModal = () => {
    setOpen(!open);
  };
  const handleEditModal = (data: any) => {
    setEditData(data);
    setEditOpen(!editOpen);
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

  const filterValues = [
    'Activities',
    'Availability of manufacturing license',
    'Personel',
    'Equipments',
    'Types of products',
    'Dosage forms',
    'Indian GMP status - State GMP',
    'International GMP status',
    'Non Pharma activities',
    'Batches Frequently'
  ];

  console.log('filterValues', filterValues);

  const handleFilter = (e: any) => {
    const { value, name } = e.target;
    dispatch(GetContentType({ type: value }));
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: 'title',
        header: 'Title'
      },
      {
        accessorKey: 'type',
        header: 'Type'
      },
      {
        accessorKey: 'status',
        header: 'Status',
        // size: 300
        Cell: ({ cell, row }) => (
          <Chip
            label={
              cell.getValue()?.toLocaleString?.('en-US') == 1
                ? 'Active'
                : 'Inactive'
            }
            color={
              cell.getValue()?.toLocaleString?.('en-US') == 1
                ? 'success'
                : 'error'
            }
          />
        )
      }
    ],
    []
  );

  const TableAction = (row: any, closeMenu: any) => {
    console.log(row, 'closeMenu', closeMenu);
    const action = [
      <MenuItem key="edit" onClick={() => handleEditModal(row)}>
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
        {row?.status == 1 ? 'Inactive' : 'Active'}
      </MenuItem>
    ];
    return action;
  };

  return (
    <>
      <Loader open={isLoading} />
      <Helmet>
        <title>Content Types</title>
      </Helmet>
      <AddtypeModal open={open} handleClose={handleModal} />

      {editOpen && (
        <EdittypeModal
          open={editOpen}
          handleClose={handleEditModal}
          data={editData}
        />
      )}

      <PageTitleWrapper>
        <PageHeader
          title={'Content Type'}
          actionText="Add Content Type"
          subTitle="Here you can you master data for equipements, activities etc"
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
              <MaterialTable
                data={data || []}
                isLoading={isLoading}
                columns={columns}
                getData={getData}
                rowCount={rowCount}
                tableAction={TableAction}
                title="Content Type List"
                Filter={
                  <>
                    <TextField
                      select
                      label="Select Type"
                      name="Filter"
                      defaultValue="All"
                      onChange={handleFilter}
                      sx={{ minWidth: '150px' }}
                      size={'small'}
                      fullWidth
                    >
                      {contentTypes &&
                        contentTypes.map((item: any, index: number) => (
                          <MenuItem key={index} value={item}>
                            {formatCapitalize(ContentTypeConst[item])}
                          </MenuItem>
                        ))}
                    </TextField>
                    {/* <TextField
                      select
                      margin="normal"
                      id="type_of_products"
                      // required
                      // fullWidth
                      label="Select Type"
                      name="type_of_products"
                      defaultValue="Select"
                      onChange={handleFilter}
                      value={ContentTypeConst}
                      sx={{ minWidth: '150px' }}
                    >
                      {contentTypes &&
                        contentTypes.map((item: any, index: number) => (
                          <MenuItem key={index} value={item}>
                            {formatCapitalize(ContentTypeConst[item])}
                          </MenuItem>
                        ))}
                    </TextField> */}
                  </>
                }
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
