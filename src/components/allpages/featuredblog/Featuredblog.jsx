import { useLoaderData } from "react-router";
import React from "react"
import MUIDataTable from "mui-datatables";


const Featuredblog = () => {
    const blogData = useLoaderData();
    console.log(blogData)



    const columns = [
        {
         name: "name",
         label: "Name",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
         name: "company",
         label: "Company",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
         name: "city",
         label: "City",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
         name: "state",
         label: "State",
         options: {
          filter: true,
          sort: false,
         }
        },
       ];
       
       const data = [
        { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "NY" },
        { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
        { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
        { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
       ];
       
       const options = {
         filterType: 'checkbox',
       };


    return (
        <> 
        <div className="p-5 m-5">
        {
          blogData?.sort((a,b)=> b.longdescription.length - a.longdescription.length ).slice(0,10).map(x=> 
            <div className="flex border p-3 space-x-4  mb-5" key={x._id}>
                <p>{x.title}</p>
                <p>{x?.displayName}</p>
                {/* <p>{x?.email}</p> */}
                {/* <p>{x?.longdescription}</p> */}
                <img className="w-10 h-10 rounded-full" src={x?.photoURL} alt="" />

             </div>   
                
                )
            }
        </div>





<MUIDataTable title={"Employee List"} data={blogData} columns={columns}  options={options} />


        </>



    );
};

export default Featuredblog;