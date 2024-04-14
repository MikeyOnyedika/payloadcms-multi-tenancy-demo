import { Access } from "payload/types";
import hasRole from "../../../access/utils/hasRole";
import { Tenant, User } from "payload/generated-types";
import { tenantPrefix } from "../../../constants";

export const carshowcaseAdminOrUser: Access<any, User> = ({ req }) => {
  const carshowcaseSlug = tenantPrefix.CARSHOWCASE;

  if (!req.user) {
    return false;
  }

  // grant access to super admins
  if (hasRole("super-admin", req.user.roles)) {
    return true;
  }

  // check if the user is a customer user
  if (hasRole<User["roles"][number]>("customer", req.user.roles)) {
    //  grant access to the carshowcase tenant if the user is an admin of the carshowcase tenant
    const carshowcaseTenant = req.user.tenants.find(
      (t) => (t.tenant as Tenant).slug === carshowcaseSlug
    );
    if (!carshowcaseTenant) {
      return false;
    }

    // since this customer user has carshowcaseTenant as one of it's tenants,
    // grant access to user if he/she is a carshowcase admin or user
    if (
      hasRole<(typeof carshowcaseTenant.roles)[number]>(
        "admin",
        carshowcaseTenant.roles
      ) ||
      hasRole<(typeof carshowcaseTenant.roles)[number]>(
        "user",
        carshowcaseTenant.roles
      )
    ) {
      return true;
    }
  }

  return false;
};
