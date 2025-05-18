/*
	Generated on 18/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.10.0
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import FormEditTask from '../components/FormEditTask'

import getEditTaskData from '../services/getEditTaskData'
const EditTask = props => {
const { taskId } = useParams()

	const [isLoading, setIsLoading] = useState({
	editTask: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [editTaskData, setEditTaskData] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, editTask: true}))
		const { data: editTaskDataResponse } = await getEditTaskData({ taskId  })

	    setEditTaskData(editTaskDataResponse.data)


	    setIsLoading(prev => ({...prev, editTask: false}))
    }
	fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Edit Task")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"Task"}
		isLoading={isLoading.editTask}
	>
		{editTaskData ? 
		(<>
		 <FormEditTask
			{...{ 
				editTaskData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default EditTask

