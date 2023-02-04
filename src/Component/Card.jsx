import React from 'react';
import styled from "styled-components";


const Cardh = styled.div`
  &:hover {
    width: 100%;
    margin-top: 2px;
    border: ${props => '3px solid ' + props.color + '!important' || '#666'};
  }
`
const ColorHeader = styled.div`
  background: ${props => props.color || '#666'};
`
const HealthSignal = styled.span`
  display: inline-block;
  margin: 0 2px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  overflow: hidden;
  background: ${props => props.value === 'Y' ? props.color : '#999'};
`

function Card({data}) {
	return(
		<div className="col-xl-1 col-md-2" style={{boxSizing: 'content-box'}}>
			<Cardh className="card icard">
				<ColorHeader className="card-header d-flex" >

					<span className="age ms-auto">제목</span>
				</ColorHeader>
				<div className="pinfo d-flex">
					<div className='grid'>
						이미지같은거
					</div>
					<div className="name ms-auto">{data.patientNm}</div>
				</div>
				<ul className="m-0">
					<li>{data.title}</li>
				</ul>
			</Cardh>
		</div>
	)
}export default React.memo(Card);
