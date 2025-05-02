/*
	Generated on 02/05/2025 by UI Generator PRICES-IDE
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
import AllTable from "../components/AllTable";

import getTableAllTImelog from '../services/getTableAllTImelog'
const AllTimelog = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	tableAllTimelog: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [tableAllTImelog, setTableAllTImelog] = useState()
	
	
	
	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableAllTimelog: true}))
				const { data: tableAllTImelog } = await getTableAllTImelog()
				setTableAllTImelog(tableAllTImelog.data)
			} finally {
				setIsLoading(prev => ({...prev, tableAllTimelog: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("All Timelog")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table All Timelog"}
	singularName={"All"}
	items={[tableAllTImelog]}
	isLoading={isLoading.tableAllTimelog}
>
	<AllTable
		tableAllTImelog={tableAllTImelog}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default AllTimelog

