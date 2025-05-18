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
import FormCreateAppointmentForm from '../components/FormCreateAppointmentForm'

import getUserListDataBinding from '../services/getUserListDataBinding'
const CreateAppointmentPage = props => {
const [isLoading, setIsLoading] = useState({
	createAppointmentForm: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [userListDataBinding, setUserListDataBinding] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, createAppointmentForm: true}))
		const { data: userListDataBindingResponse } = await getUserListDataBinding({  })

	    setUserListDataBinding(userListDataBindingResponse.data)


	    setIsLoading(prev => ({...prev, createAppointmentForm: false}))
    }
	fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Create Appointment Page")
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
		isLoading={isLoading.createAppointmentForm}
	>
		{userListDataBinding ? 
		(<>
		 <FormCreateAppointmentForm
			{...{ 
				userListDataBinding
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default CreateAppointmentPage

