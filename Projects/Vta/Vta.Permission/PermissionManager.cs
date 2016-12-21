using System;
using System.Collections.Generic;
using System.Linq;

namespace Vta.Permission
{
    public class PermissionManager : IDisposable
    {
        public PermissionManager(PermissionDbContext permissionPermissionDbContext)
        {
            PermissionDb = permissionPermissionDbContext;
        }

        public PermissionDbContext PermissionDb { get; }

        public void Dispose()
        {
            ((IDisposable) PermissionDb).Dispose();
        }

        public List<ResourcePermission> GetPermissions(string resourceName)
        {
            return PermissionDb.Permissions.Where(x => x.Resource.Name == resourceName).ToList();
        }

        public bool CheckAccess(string roleId, string resourceName)
        {
            var dbResource = PermissionDb.Resources.SingleOrDefault(x => x.Name == resourceName);
            if (dbResource?.Permissions == null || dbResource.Permissions.Count == 0)
            {
                return false;
            }

            var permissions = dbResource.Permissions.Where(x => x.RoleName == roleId).ToList();
            return permissions.Count > 0 && permissions.TrueForAll(x => x.IsAllowed);
        }


        public static PermissionManager Create()
        {
            return new PermissionManager(new PermissionDbContext());
        }

        public ApplicationResource GetResourceDetail(string resourceName)
        {
            return PermissionDb.Resources.FirstOrDefault(x => x.Name == resourceName);
        }
    }
}