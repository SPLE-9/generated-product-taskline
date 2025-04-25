/*
	Generated on 02/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner, Modal } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { useNavigate, Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"

import AppointmentDetails from '../components/AppointmentDetails'
import getAppointmentDetailData from '../services/getAppointmentDetailData'
import deleteAppointment from '../services/deleteAppointment';
const AppointmentDetailPage = props => {
	const navigate = useNavigate();
	const { appointmentId } = useParams();
const [isLoading, setIsLoading] = useState({
	appointmentDetails: false,

	});
	const { setTitle } = useContext(HeaderContext);
	const [showModalConfirmDeleteAppointment, setShowModalConfirmDeleteAppointment] = React.useState(false); 
	const confirmDelete = async () => {
	await deleteAppointment({
		appointmentId: appointmentId,
	});
	navigate('/appointments');
	};

const [appointmentDetailData, setAppointmentDetailData] = useState()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, appointmentDetails: true}))
			const { data: appointmentDetailData } = await getAppointmentDetailData({ appointmentId })
			setAppointmentDetailData(appointmentDetailData.data)
		} finally {
			setIsLoading(prev => ({...prev, appointmentDetails: false}))
		}
	}
	fetchData()
}, [])

	
	useEffect(() => {
		setTitle("Appointment Detail Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/appointments
			  	`}>
			  		<Button className="p-2 w-full" variant="primary">
			  		  Back
			  		</Button>
			  	</Link>
			  	
			  	
			  	<Link to={`/appointments/edit?appointmentId=${appointmentId}
			  	`}>
			  		<Button className="p-2 w-full" variant="primary">
			  		  Edit Appointment
			  		</Button>
			  	</Link>
			  	
				  <Link to={""}>
			  		<Button className="p-2 w-full" variant="primary" onClick={() => setShowModalConfirmDeleteAppointment(true)}>
			  		  Delete Appointment
			  		</Button>
			  	</Link>
				
				<Modal
					isShow={showModalConfirmDeleteAppointment}
					title={"Confirm Delete Project"}
				>
					<Link to=''><Button variant="tertiary" onClick={() => setShowModalConfirmDeleteAppointment(false)}>Batal</Button></Link>
					<Button
					variant="secondary"
					onClick={() => confirmDelete()}
					>
					Confirm Delete
					</Button>
				</Modal>
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Appointment Details"}
	singularName={"Details"}
	items={{...appointmentDetailData}}
	isLoading={isLoading.appointmentDetails}
	isCorrelatedWithAnotherComponent={false}
>
	<AppointmentDetails {...{ data : { ...appointmentDetailData }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default AppointmentDetailPage

