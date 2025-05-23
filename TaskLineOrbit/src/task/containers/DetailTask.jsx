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

import TaskDetail from '../components/TaskDetail'
import getTaskDetailData from '../services/getTaskDetailData'
const DetailTask = props => {
const { taskId } = useParams()

	const [isLoading, setIsLoading] = useState({
	taskDetail: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [taskDetailData, setTaskDetailData] = useState()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, taskDetail: true}))
			const { data: taskDetailData } = await getTaskDetailData({ taskId })
			setTaskDetailData(taskDetailData.data)
		} finally {
			setIsLoading(prev => ({...prev, taskDetail: false}))
		}
	}
	fetchData()
}, [])

	
	useEffect(() => {
		setTitle("Detail Task")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<></>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Task Detail"}
	singularName={"Detail"}
	items={{...taskDetailData}}
	isLoading={isLoading.taskDetail}
	isCorrelatedWithAnotherComponent={false}
>
	<TaskDetail {...{ data : { ...taskDetailData }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailTask

