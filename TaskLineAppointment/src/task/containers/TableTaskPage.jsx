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
import TaskTable from "../components/TaskTable";

import getListTask from '../services/getListTask'
const TableTaskPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	tableTask: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [listTask, setListTask] = useState()
const { projectId } = useParams();
	
	
	

	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableTask: true}))
				const { data: listTask } = await getListTask({ projectId })
				setListTask(listTask.data)
			} finally {
				setIsLoading(prev => ({...prev, tableTask: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("Table Task Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/task/create?projectId=${projectId}`}>
			  		<Button className="p-2" variant="primary">
			  		  Buat Task
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table Task"}
	singularName={"Task"}
	items={[listTask]}
	isLoading={isLoading.tableTask}
>
	<TaskTable
		listTask={listTask}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default TableTaskPage
