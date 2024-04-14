import { Access } from "payload/config";
import { Tenant, User } from "payload/generated-types";
import hasRole from "../../../access/utils/hasRole";
import { tenantPrefix } from "../../../constants";

export const carshowcaseAdmin: Access<any, User> = ({ req }) => {
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
    // grant access to the carshowcase admin
    if (
      hasRole<(typeof carshowcaseTenant.roles)[number]>(
        "admin",
        carshowcaseTenant.roles
      )
    ) {
      return true;
    }
  }

  return false;
};
