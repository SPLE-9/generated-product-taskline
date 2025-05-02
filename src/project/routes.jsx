/*
	Generated on 02/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import CreateProjectPage from './containers/CreateProjectPage'
import ProjectPage from './containers/ProjectPage'
import ProjectDetailPage from './containers/ProjectDetailPage'
import EditProjectPage from './containers/EditProjectPage'

const projectRoutes = [
{ 
	path: "/projects/create",
	element: <CreateProjectPage />,
}

	
,
{ 
	path: "/projects",
	element: <ProjectPage />,
}

	
,
{ 
	path: "/projects/edit",
	element: <EditProjectPage />,
}

	
,
{ 
	path: "/projects/:projectId",
	element: <ProjectDetailPage />,
}

	

]

export default projectRoutes
