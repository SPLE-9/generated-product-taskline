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
import { useSearchParams } from "react-router";
import FormEditNotesForm from '../components/FormEditNotesForm'
const EditNotesPage = props => {
const [isLoading, setIsLoading] = useState({
	editNotesForm: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [editNotesData, setEditNotesData] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, editNotesForm: true}))
		const { data: editNotesDataResponse } = await getEditNotesData({   })

	    setEditNotesData(editNotesDataResponse.data)


	    setIsLoading(prev => ({...prev, editNotesForm: false}))
    }
	fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Edit Notes Page")
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
		singularName={"Notes"}
		isLoading={isLoading.editNotesForm}
	>
		{editNotesData ? 
		(<>
		 <FormEditNotesForm
			{...{ 
				editNotesData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default EditNotesPage

