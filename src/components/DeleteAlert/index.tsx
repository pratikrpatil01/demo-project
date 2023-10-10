import React from 'react';
import { dispatch } from 'src/store';
import { DeleteItem } from 'src/store/reducers/commanReducer';
import Swal from 'sweetalert2';

const DeleteAlert = (data: any) => {
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
      dispatch(DeleteItem(data));
    }
  });
};

export default DeleteAlert;
