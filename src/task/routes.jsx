/*
	Generated on 02/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import TableTaskPage from './containers/TableTaskPage'
import CreateTaskPage from './containers/CreateTaskPage'
import DetailTask from './containers/DetailTask'
import ViewContainer from './containers/ViewContainer'

const taskRoutes = [
{ 
	path: "/task",
	element: <TableTaskPage />,
}

	
,
{ 
	path: "/task/create",
	element: <CreateTaskPage />,
}

	
,
{ 
	path: "/task/edit",
	element: <DetailTask />,
}

	
,
{ 
	path: "",
	element: <ViewContainer />,
}

	

]

export default taskRoutes
