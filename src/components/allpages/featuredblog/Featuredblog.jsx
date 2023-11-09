import { useLoaderData } from "react-router";

// import { DataGrid } from '@mui/x-data-grid';


// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'firstName', headerName: 'Blog title', width: 130 },
//   { field: 'lastName', headerName: 'blog owner ', width: 130 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90,
//   },

//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];






const Featuredblog = () => {

  const blogData = useLoaderData();
  console.log(blogData);



  return (
    <>
      <div className="p-5 m-5">
        {Array.isArray(blogData) &&
          blogData
            ?.sort(
              (a, b) => b.longdescription.length - a.longdescription.length
            )
            .slice(0, 10)
            .map((x,i) => (

              <ol key={i} className="list-decimal">
                <li className="flex border p-3 space-x-5 mx-auto justify-between items-center  mb-5" >
                <p className="w-[600px]">{x.title}</p>
                <p className="w-[200px]">{x?.displayName}</p>
                <figure className="w-[200px]"> <img  className="w-10 h-10 rounded-full" src={x?.photoURL}  alt="" /></figure>
              </li>
              </ol>
            
            ))}
      </div>



{/* 
<div>


<div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>

</div> */}



    </>
  );
};

export default Featuredblog;
