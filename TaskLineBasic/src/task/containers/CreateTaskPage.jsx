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
import FormCreateTask from '../components/FormCreateTask'
const CreateTaskPage = props => {
const { invalid } = useParams()

	const [isLoading, setIsLoading] = useState({
	createTask: false,

	});
	const { setTitle } = useContext(HeaderContext);

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, createTask: true}))


	    setIsLoading(prev => ({...prev, createTask: false}))
    }
	fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Create Task Page")
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
		isLoading={isLoading.createTask}
	>
		<FormCreateTask
			{...props}
		/>
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default CreateTaskPage

