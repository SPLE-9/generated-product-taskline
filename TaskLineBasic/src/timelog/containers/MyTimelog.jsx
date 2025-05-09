/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import MyTable from "../components/MyTable";

import getTableMyTimelog from '../services/getTableMyTimelog'
const MyTimelog = props => {
const { timelogId } = useParams()
	const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	tableMyTimelog: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [tableMyTimelog, setTableMyTimelog] = useState()
	
	
	

	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableMyTimelog: true}))
				const { data: tableMyTimelog } = await getTableMyTimelog()
				setTableMyTimelog(tableMyTimelog.data)
			} finally {
				setIsLoading(prev => ({...prev, tableMyTimelog: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("My Timelog")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/timelog/add
			  	`}>
			  		<Button className="p-2" variant="primary">
			  		  Add Timelog
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table My Timelog"}
	singularName={"My"}
	items={[tableMyTimelog]}
	isLoading={isLoading.tableMyTimelog}
>
	<MyTable
		tableMyTimelog={tableMyTimelog}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default MyTimelog

