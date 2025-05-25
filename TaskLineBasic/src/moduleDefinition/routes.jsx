/*
	Generated on 23/05/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.9.0
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import AppointmentsPage from './containers/AppointmentsPage'
import EditAppointmentPage from './containers/EditAppointmentPage'
import CreateAppointmentPage from './containers/CreateAppointmentPage'

const moduleDefinitionRoutes = [
{ 
	path: "/appointments",
	element: <AppointmentsPage />,
}

	
,
{ 
	path: "/appointments/edit?appointmentId",
	element: <EditAppointmentPage />,
}

	
,
{ 
	path: "/appointments/create",
	element: <CreateAppointmentPage />,
}

	

]

export default moduleDefinitionRoutes
