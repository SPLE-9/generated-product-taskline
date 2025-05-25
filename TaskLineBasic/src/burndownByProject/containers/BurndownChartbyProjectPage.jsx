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
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import TaskTable from "../components/TaskTable";
import { getActualDataBinding, getPlannedDataBinding } from '../services/getDataBinding'

const BurndownChartbyProjectPage = props => {
const { checkPermission } = useAuth();
const { projectId } = useParams();

	const [isLoading, setIsLoading] = useState({
	plannedTaskBurndownChartbyProject: false,
	actualTaskBurndownChartbyProject: false,
	});
	const { setTitle } = useContext(HeaderContext);

	const [plannedData, setPlannedData] = useState()
	const [actualData, setActualData] = useState()
	
	useEffect(() => {
		const fetchPlannedData = async () => {
			try {
				setIsLoading(prev => ({...prev, plannedTaskBurndownChartbyProject: true}))
				const { data: dataBinding } = await getPlannedDataBinding({ projectId })
				setPlannedData(dataBinding.data)
			} finally {
				setIsLoading(prev => ({...prev, plannedTaskBurndownChartbyProject: false}))
			}
		}
		
		const fetchActualData = async () => {
			try {
				setIsLoading(prev => ({...prev, actualTaskBurndownChartbyProject: true}))
				const { data: dataBinding } = await getActualDataBinding({ projectId })
				setActualData(dataBinding.data)
			} finally {
				setIsLoading(prev => ({...prev, actualTaskBurndownChartbyProject: false}))
			}
		}
		
		fetchPlannedData()
		fetchActualData()
  	}, [projectId])

	useEffect(() => {
		setTitle("Burndown Chart by Project Page")
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
	title={"Planned Task Burndown Chart by Project"}
	singularName={"Task"}
	items={[plannedData]}
	isLoading={isLoading.plannedTaskBurndownChartbyProject}
>
	<TaskTable
		dataBinding={plannedData}
		
	/>
</Layouts.ListContainerTableLayout>
<Layouts.ListContainerTableLayout
	title={"Actual Task Burndown Chart by Project"}
	singularName={"Task"}
	items={[actualData]}
	isLoading={isLoading.actualTaskBurndownChartbyProject}
>
	<TaskTable
		dataBinding={actualData}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default BurndownChartbyProjectPage

