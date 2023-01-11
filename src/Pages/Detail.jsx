import React from 'react';
import styled from "styled-components";

const Card = styled.div`
  &:hover {
    width: 100%;
    margin-top: 2px;
    border: ${props => '3px solid ' + props.color + '!important' || '#666'};
  }
`
const ColorHeader = styled.div`
  background: ${props => props.color || '#666'};
`


function Detail() {

    return(
        <main className="dashboard">
            <div className="row">
                <div className="col-xl-1 col-md-2" style={{boxSizing: 'content-box'}} >
                    <Card className="card icard" >
                        <ColorHeader className="card-header d-flex">
                            <span></span>
                            <span className="age ms-auto"></span>
                        </ColorHeader>
                        <div className="pinfo d-flex">
                            <div className= 'grid'>
                            </div>
                            <div className="name ms-auto"></div>
                        </div>
                        <ul className="m-0">
                            <li className="d-flex">
                                <span>이미지</span>
                                <strong className="ms-auto">

                                </strong>
                            </li>
                        </ul>
                    </Card>
                </div>

                <div className="col-xl-1 col-md-2" style={{boxSizing: 'content-box'}} >
                    <Card className="card icard" >
                        <ColorHeader className="card-header d-flex">
                            <span></span>
                            <span className="age ms-auto"></span>
                        </ColorHeader>
                        <div className="pinfo d-flex">
                            <div className= 'grid'>
                            </div>
                            <div className="name ms-auto"></div>
                        </div>
                        <ul className="m-0">
                            <li className="d-flex">
                                <span>이미지</span>
                                <strong className="ms-auto">

                                </strong>
                            </li>
                        </ul>
                    </Card>
                </div>
                <div className="col-xl-1 col-md-2" style={{boxSizing: 'content-box'}} >
                    <Card className="card icard" >
                        <ColorHeader className="card-header d-flex">
                            <span></span>
                            <span className="age ms-auto"></span>
                        </ColorHeader>
                        <div className="pinfo d-flex">
                            <div className= 'grid'>
                            </div>
                            <div className="name ms-auto"></div>
                        </div>
                        <ul className="m-0">
                            <li className="d-flex">
                                <span>이미지</span>
                                <strong className="ms-auto">

                                </strong>
                            </li>
                        </ul>
                    </Card>
                </div>

            </div>
        </main>
    )
}export default Detail;
