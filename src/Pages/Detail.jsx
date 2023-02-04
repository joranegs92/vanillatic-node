import React from 'react';
import styled from "styled-components";
import Card from "../Component/Card";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Detail() {

    const testMap = [            {
                "id" : 1,
                "title":"happy",
                "name":"to"
            },
            {
                "id" : 2,
                "title":"happy",
                "name":"to"
            },
            {
                "id" : 3,
                "title":"happy",
                "name":"to"
            },
        {
            "id" : 3,
            "title":"happy",
            "name":"to"
        },
        {
            "id" : 3,
            "title":"happy",
            "name":"to"
        }

    ]

    return(
       <main className="dashboard">
           <div className="row">
               {testMap.map((value, idx) =>{
                   return (
                       <Card
                            key={idx + value}
                            data={value}
                       />
                   )
               })

               }

           </div>

       </main>
    )
}export default Detail;
