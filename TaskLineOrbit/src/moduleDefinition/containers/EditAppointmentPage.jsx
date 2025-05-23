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
import { useSearchParams } from "react-router";
import FormEditAppointmentForm from '../components/FormEditAppointmentForm'

import getEditAppointmentData from '../services/getEditAppointmentData'
const EditAppointmentPage = props => {
const [isLoading, setIsLoading] = useState({
	editAppointmentForm: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [editAppointmentData, setEditAppointmentData] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, editAppointmentForm: true}))
		const { data: editAppointmentDataResponse } = await getEditAppointmentData({   })

	    setEditAppointmentData(editAppointmentDataResponse.data)


	    setIsLoading(prev => ({...prev, editAppointmentForm: false}))
    }
	fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Edit Appointment Page")
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
		singularName={"Appointment"}
		isLoading={isLoading.editAppointmentForm}
	>
		{editAppointmentData ? 
		(<>
		 <FormEditAppointmentForm
			{...{ 
				editAppointmentData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default EditAppointmentPage

