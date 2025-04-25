/*
	Generated on 09/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import TableTaskPage from './containers/TableTaskPage'
import CreateTaskPage from './containers/CreateTaskPage'
import EditTask from './containers/EditTask'
import DetailTask from './containers/DetailTask'

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
	element: <EditTask />,
}

	
,
{ 
	path: "/task/:taskId",
	element: <DetailTask />,
}

	

]

export default taskRoutes