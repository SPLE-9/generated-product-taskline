/*
	Generated on 23/05/2025 by UI Generator PRICES-IDE
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
import AddedFormAddProjectMemberForm from '../components/AddedFormAddProjectMemberForm'

import getMemberListData from '../services/getMemberListData'
const AddProjectMemberPage = props => {
const { projectId } = useParams()

	const [isLoading, setIsLoading] = useState({
	addProjectMemberForm: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [memberListData, setMemberListData] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, addProjectMemberForm: true}))
		const { data: memberListDataResponse } = await getMemberListData({ projectId  })

	    setMemberListData(memberListDataResponse.data)


	    setIsLoading(prev => ({...prev, addProjectMemberForm: false}))
    }
	fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Add Project Member Page")
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
		singularName={"Project"}
		isLoading={isLoading.addProjectMemberForm}
	>
		{memberListData ? 
		(<>
		 <AddedFormAddProjectMemberForm
			{...{ 
				memberListData
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default AddProjectMemberPage

