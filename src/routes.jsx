import { useRoutes } from "react-router";
import { commonRoutes, commonMobileRoutes } from "@/commons/routes";
import userRoutes from "@/user/routes";
import roleRoutes from "@/role/routes";
import staticPageRoutes from "@/staticPage/routes";
import homeRoutes from "@/home/routes";
import projectRoutes from "@/project/routes";
import moduleDefinitionRoutes from "@/moduleDefinition/routes";
import notesRoutes from "@/notes/routes";
import timelogRoutes from "@/timelog/routes";
import burndownByMemberRoutes from "@/burndownByMember/routes";
import taskRoutes from "@/task/routes";

const GlobalRoutes = () => {
  const router = useRoutes([
	...commonRoutes,
	...staticPageRoutes,
	...userRoutes,
	...roleRoutes,
	...homeRoutes, 
	...projectRoutes, 
	...moduleDefinitionRoutes, 
	...notesRoutes, 
	...timelogRoutes, 
	...taskRoutes, 
  ])
  return router
}

const MobileRoutes = () => {
	const router = useRoutes([ 
	  ...commonMobileRoutes, 
  ])
  return router
}

export {GlobalRoutes, MobileRoutes}
