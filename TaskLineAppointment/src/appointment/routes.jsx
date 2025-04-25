/*
	Generated on 02/06/2025 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.8.0
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import AppointmentPage from './containers/AppointmentPage'
import AppointmentDetailPage from './containers/AppointmentDetailPage'
import CreateAppointmentPage from './containers/CreateAppointmentPage'
import EditAppointmentPage from './containers/EditAppointmentPage'

const appointmentRoutes = [
{ 
	path: "/appointments",
	element: <AppointmentPage />,
}

	
,
{ 
	path: "/appointments/create",
	element: <CreateAppointmentPage />,
}

	
,
{ 
	path: "/appointments/edit",
	element: <EditAppointmentPage />,
}

	
,
{ 
	path: "/appointments/:appointmentId",
	element: <AppointmentDetailPage />,
}

	

]

export default appointmentRoutes
