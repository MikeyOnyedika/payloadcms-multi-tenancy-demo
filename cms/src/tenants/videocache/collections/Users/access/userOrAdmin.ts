import { Access } from "payload/config";
import { Tenant, User } from "payload/generated-types";
import { Videocache_User } from "payload/generated-types"
import { tenantPrefix } from "../../../../../constants";

const videocacheSlug = tenantPrefix.VIDEOCACHE;

const userOrAdmin: Access<any, Videocache_User | User> = ({ req }) => {
  const user = req.user
  if (!user) return false;

  // check if it's a videocache admin
  // collection == "users"
  if (user.collection === "users") {
    // check if user is the super admin
    const userRoles = user.roles as string[]
    if (userRoles.includes("super-admin")) {
      return true;
    }
    //
    // check if this user has videocache as a tenant 
    const tenants = user.tenants as { tenant: Tenant, roles: ("customer" | "super-admin")[] }[];

    if (userRoles.includes("customer")) {
      const videocacheTenant = tenants.find(tenant => tenant.tenant.slug === videocacheSlug);
      if (videocacheTenant) {
        return true;
      }
    }
    return false;
  }

  if (user.collection === "videocache__users") {
    return {
      id: {
        equals: user.id
      }
    }
  }
  return false

}
export default userOrAdmin
