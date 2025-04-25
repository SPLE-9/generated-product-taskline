/*
	Generated on 02/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import TimelogPage from './containers/TimelogPage'
import AddTimelogPage from './containers/AddTimelogPage'
import EditTimelogPage from './containers/EditTimelogPage'

const timelogRoutes = [
{ 
	path: "/timelog",
	element: <TimelogPage />,
}

	
,
{ 
	path: "/timelog/add",
	element: <AddTimelogPage />,
}

	
,
{ 
	path: "/timelog/edit",
	element: <EditTimelogPage />,
}

	

]

export default timelogRoutes
