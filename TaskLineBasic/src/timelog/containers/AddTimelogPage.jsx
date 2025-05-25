/*
	Generated on 23/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import FormFormAddTimelog from '../components/FormFormAddTimelog'

import getTaskListData from '../services/getTaskListData'
const AddTimelogPage = props => {
const [isLoading, setIsLoading] = useState({
	formAddTimelog: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [taskListData, setTaskListData] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, formAddTimelog: true}))
		const { data: taskListDataResponse } = await getTaskListData({  })

	    setTaskListData(taskListDataResponse.data)


	    setIsLoading(prev => ({...prev, formAddTimelog: false}))
    }
	fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Add Timelog Page")
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
		singularName={"Add"}
		isLoading={isLoading.formAddTimelog}
	>
		{taskListData ? 
		(<>
		 <FormFormAddTimelog
			{...{ 
				taskListData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default AddTimelogPage

