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
import TableTable from "../components/TableTable";

import getAppointmentsList from '../services/getAppointmentsList'
const AppointmentsPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	appointmentsTable: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [appointmentsList, setAppointmentsList] = useState()
	
	
	
	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, appointmentsTable: true}))
				const { data: appointmentsList } = await getAppointmentsList()
				setAppointmentsList(appointmentsList.data)
			} finally {
				setIsLoading(prev => ({...prev, appointmentsTable: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("Appointments Page")
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
	title={"Appointments Table"}
	singularName={"Table"}
	items={[appointmentsList]}
	isLoading={isLoading.appointmentsTable}
>
	<TableTable
		appointmentsList={appointmentsList}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default AppointmentsPage

