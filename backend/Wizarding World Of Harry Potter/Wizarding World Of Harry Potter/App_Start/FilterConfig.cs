using System.Web;
using System.Web.Mvc;

namespace Wizarding_World_Of_Harry_Potter
{
	public class FilterConfig
	{
		public static void RegisterGlobalFilters( GlobalFilterCollection filters )
		{
			filters.Add( new HandleErrorAttribute() );
		}
	}
}
