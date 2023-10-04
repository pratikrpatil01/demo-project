import React, { useEffect, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { Grid, Typography } from '@mui/material';
import { lightGreen } from '@mui/material/colors';
// import ExportCSV from './exportCSV';
// import ExportCSV from 'components/exportCSV';

const MaterialTable = ({
  Filter,
  data,
  getData,
  rowCount,
  columns,
  isLoading,
  title,
  tableAction
}) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10
  });

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    getData && getData(pagination);
  }, [data.length, pagination.pageIndex, pagination.pageSize]);

  return (
    <React.Fragment>
      {/* <Typography variant="h4">{title}</Typography> */}
      <MaterialReactTable
        columns={columns}
        data={data}
        // manualFiltering
        enableColumnFilters
        enableGlobalFilter
        enableColumnDragging
        enableColumnOrdering
        enableColumnResizing
        enableFacetedValues
        manualPagination
        onPaginationChange={setPagination}
        rowCount={rowCount}
        enableStickyHeader
        // enableColumnVirtualization
        // enableFilterMatchHighlighting
        enableRowActions={tableAction && tableAction}
        positionActionsColumn="first"
        muiTableContainerProps={{
          sx: { maxHeight: '800px' }
        }}
        state={{
          // density: 'compact',
          isLoading,
          pagination
        }}
        renderTopToolbarCustomActions={() => (
          <Grid container justifyContent="space-between">
            <Typography variant="h4">{title}</Typography>
            <Grid>
              <Grid item container direction="row" textAlign={'center'}>
                {Filter}
                {/* {data && <ExportCSV data={data} title={title} />} */}
              </Grid>
            </Grid>{' '}
          </Grid>
        )}
        renderRowActionMenuItems={({ row }) =>
          tableAction && tableAction(row?.original)
        }
      />
    </React.Fragment>
  );
};

export default MaterialTable;
