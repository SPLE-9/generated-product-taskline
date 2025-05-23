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
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import ProjectDetail from '../components/ProjectDetail'
import getProjectDetailData from '../services/getProjectDetailData'
import ProjectTable from "../components/ProjectTable";

import getProjectMemberListData from '../services/getProjectMemberListData'
const ProjectDetailPage = props => {
const { projectId } = useParams()
	const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	projectDetail: false,
	tableProjectMembers: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [projectDetailData, setProjectDetailData] = useState()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, projectDetail: true}))
			const { data: projectDetailData } = await getProjectDetailData({ projectId })
			setProjectDetailData(projectDetailData.data)
		} finally {
			setIsLoading(prev => ({...prev, projectDetail: false}))
		}
	}
	fetchData()
}, [])
const [projectMemberListData, setProjectMemberListData] = useState()
	
	
	


	useEffect(() => {
		

		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableProjectMembers: true}))
				const { data: projectMemberListData } = await getProjectMemberListData({ projectId })
				setProjectMemberListData(projectMemberListData.data)
			} finally {
				setIsLoading(prev => ({...prev, tableProjectMembers: false}))
			}
		}
		fetchData()
  	}, [])

	
	useEffect(() => {
		setTitle("Project Detail Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerButtonLayout>
			  	<Link to={`/projects
			  	`}>
			  		<Button id="_cV_oICHqEfChD41pi9QTAQ" className="p-2 w-full" variant="primary">
			  		  Back
			  		</Button>
			  	</Link>
			  	
			  	
			  	<Link to={`/projects/${projectId}/add-member
			  	`}>
			  		<Button id="_vf7-cDJGEfCBKLsveFPh7w" className="p-2" variant="primary">
			  		  Add Project Member
			  		</Button>
			  	</Link>
			  	
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Project Detail"}
	singularName={"Detail"}
	items={{...projectDetailData}}
	isLoading={isLoading.projectDetail}
	isCorrelatedWithAnotherComponent={false}
>
	<ProjectDetail {...{ data : { ...projectDetailData }}} />
</Layouts.DetailContainerLayout>
<Layouts.ListContainerTableLayout
	title={"Table Project Members"}
	singularName={"Project"}
	items={[projectMemberListData]}
	isLoading={isLoading.tableProjectMembers}
>
	<ProjectTable
		projectMemberListData={projectMemberListData}
		
	/>
</Layouts.ListContainerTableLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default ProjectDetailPage

