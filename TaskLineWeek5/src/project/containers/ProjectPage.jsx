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
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import ProjectsTable from "../components/ProjectsTable";

import getProjectListData from '../services/getProjectListData'
const ProjectPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	tableProjects: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [projectListData, setProjectListData] = useState()
	
	
	

	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableProjects: true}))
				const { data: projectListData } = await getProjectListData()
				setProjectListData(projectListData.data)
			} finally {
				setIsLoading(prev => ({...prev, tableProjects: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("Project Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/projects/create
			  	`}>
			  		<Button id="_ZThVoCHqEfChD41pi9QTAQ" className="p-2" variant="primary">
			  		  Create Project
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table Projects"}
	singularName={"Projects"}
	items={[projectListData]}
	isLoading={isLoading.tableProjects}
>
	<ProjectsTable
		projectListData={projectListData}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default ProjectPage

