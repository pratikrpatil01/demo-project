import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container, TextField, MenuItem } from '@mui/material';
import Footer from 'src/components/Footer';
import ProductHeader from './Header';
import MaterialTable from 'src/components/Table/materialTable';
import { Columns } from 'src/utils/commonFunction';
import DeleteAlert from 'src/components/DeleteAlert';
import { useNavigate, useParams } from 'react-router';
import Swal from 'sweetalert2';
import { DeleteProduct } from 'src/store/reducers/product';
import { dispatch } from 'src/store';

interface ProductListProps {
  data?: string[];
}
function ProductList<ProductListProps>({ data }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const key = [
    'products_name',
    'strength',
    'pack_size',
    'status',
    'packing',
    'api_dmf',
    'ba_be_studies',
    'batches_frequently',
    'brand_name',
    'category',
    'createdAt',
    'dosage_forms',
    'lead_time',
    'list_of_countries',
    'manufacturer_id',
    'moq',
    'shipper_pack_size',
    'tentative_rates'
  ];

  const handleDetele = (id: string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result: any) => {
      if (result.isConfirmed) {
        dispatch(DeleteProduct(id));
      }
    });
  };

  const handleEdit = (row: any) => {
    navigate(`/admin/product/edit/${id}`, { state: row });
  };

  const columns = Columns(key);

  const TableAction = (row: any, closeMenu: any) => {
    const action = [
      // <MenuItem
      //   key="edit" //onClick={() => console.info('Edit', row)}
      // >
      //   Active
      // </MenuItem>,
      // <MenuItem
      //   key="edit" // onClick={() => console.info('Edit', row)}
      // >
      //   Inactive
      // </MenuItem>,
      <MenuItem
        key="edit"
        onClick={() => {
          handleDetele(row?._id);
          closeMenu();
        }}
      >
        Delete
      </MenuItem>,
      <MenuItem
        key="edit"
        onClick={() => {
          handleEdit(row);
        }}
      >
        Edit
      </MenuItem>
    ];
    return action;
  };

  return (
    <>
      {/* <Helmet>
        <title>Products</title>
      </Helmet> */}
      {/* <PageTitleWrapper>
        <ProductHeader title="Products" />
      </PageTitleWrapper> */}
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <MaterialTable
              data={data || []}
              isLoading={false}
              columns={columns}
              getData={''}
              rowCount={data?.length}
              tableAction={TableAction}
              title=""
              Filter={
                <>
                  <TextField
                    select
                    label="Select Product"
                    name="Filter"
                    defaultValue="All"
                    // onChange={handleFilter}
                    sx={{ minWidth: '150px' }}
                    size={'small'}
                    fullWidth
                  >
                    {/* {productData &&
                      productData?.map((item: any, index: number) => (
                        <MenuItem key={index} value={item?.products_name}>
                          {item?.products_name}
                        </MenuItem>
                      ))} */}
                  </TextField>
                </>
              }
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default ProductList;
