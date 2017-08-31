using System;
using System.Reflection;

namespace Wizarding_World_Of_Harry_Potter.Areas.HelpPage.ModelDescriptions
{
    public interface IModelDocumentationProvider
    {
        string GetDocumentation(MemberInfo member);

        string GetDocumentation(Type type);
    }
}