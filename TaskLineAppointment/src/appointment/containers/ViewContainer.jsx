/*
	Generated on 02/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link } from "react-router";
import { useParams } from "@/commons/hooks/useParams"
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import FormForm from '../components/FormForm'

import getEditAppointmentData from '../services/getEditAppointmentData'
const ViewContainer = props => {
const { appointmentId } = useParams()

	const [isLoading, setIsLoading] = useState({
	form: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [editAppointmentData, setEditAppointmentData] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, form: true}))
		const { data: editAppointmentDataResponse } = await getEditAppointmentData({   })

	    setEditAppointmentData(editAppointmentDataResponse.data)


	    setIsLoading(prev => ({...prev, form: false}))
    }
	fetch()
  }, [])

	
	useEffect(() => {
		setTitle("ViewContainer")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/appointments/${appointmentId}
			  	`}>
			  		<Button className="p-2" variant="primary">
			  		  Back
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={""}
		isLoading={isLoading.form}
	>
		{editAppointmentData ? 
		(<>
		 <FormForm
			{...{ 
				editAppointmentData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default ViewContainer

