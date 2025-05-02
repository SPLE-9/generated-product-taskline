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
import TaskTable from "../components/TaskTable";

import getDataBinding from '../services/getDataBinding'
import TaskTable from "../components/TaskTable";

import getDataBinding from '../services/getDataBinding'
const BurndownChartbyMemberPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	plannedTaskBurndownChartbyMember: false,
	actualTaskBurndownChartbyMember: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [dataBinding, setDataBinding] = useState()
	
	
	
	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, plannedTaskBurndownChartbyMember: true}))
				const { data: dataBinding } = await getDataBinding()
				setDataBinding(dataBinding.data)
			} finally {
				setIsLoading(prev => ({...prev, plannedTaskBurndownChartbyMember: false}))
			}
		}
		fetchData()
  	}, [])
const [dataBinding, setDataBinding] = useState()
	
	
	
	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, actualTaskBurndownChartbyMember: true}))
				const { data: dataBinding } = await getDataBinding()
				setDataBinding(dataBinding.data)
			} finally {
				setIsLoading(prev => ({...prev, actualTaskBurndownChartbyMember: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("Burndown Chart by Member Page")
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
	title={"Planned Task Burndown Chart by Member"}
	singularName={"Task"}
	items={[dataBinding]}
	isLoading={isLoading.plannedTaskBurndownChartbyMember}
>
	<TaskTable
		dataBinding={dataBinding}
		
	/>
</Layouts.ListContainerTableLayout>
<Layouts.ListContainerTableLayout
	title={"Actual Task Burndown Chart by Member"}
	singularName={"Task"}
	items={[dataBinding]}
	isLoading={isLoading.actualTaskBurndownChartbyMember}
>
	<TaskTable
		dataBinding={dataBinding}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default BurndownChartbyMemberPage

