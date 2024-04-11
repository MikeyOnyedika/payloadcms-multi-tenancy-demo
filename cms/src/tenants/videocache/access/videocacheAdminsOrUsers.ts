import { Access } from "payload/config";
import { Tenant, User } from "payload/generated-types";
import hasRole from "../../../access/utils/hasRole";
import { tenantPrefix } from "../../../constants";

export const videocacheAdminsOrUser: Access<any, User> = ({ req }) => {
  // grant access to super admins
  if (hasRole("super-admin", req.user.roles)) {
    return true;
  }

  // check if the user is a customer user
  if (hasRole<User["roles"][number]>("customer", req.user.roles)) {
    //  grant access if the user is an admin of the videocache tenant
    const videocacheTenant = req.user.tenants.find(
      (t) => (t.tenant as Tenant).slug === tenantPrefix.VIDEOCACHE
    );
    if (!videocacheTenant) {
      return false;
    }

    // since this customer user has videocache as one of it's tenants,
    // grant access if the user is a videocache admin
    if (
      hasRole<(typeof videocacheTenant.roles)[number]>(
        "admin",
        videocacheTenant.roles
      ) ||
      hasRole<(typeof videocacheTenant.roles)[number]>(
        "user",
        videocacheTenant.roles
      )
    ) {
      return true;
    }
  }

  return false;
};
