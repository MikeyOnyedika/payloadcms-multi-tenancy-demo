import { Tenant, User } from "payload/generated-types";
import { Access } from "payload/config";
import hasRole from "./utils/hasRole";

// grants permission of all tenant documents to superadmins or grant access of the tenant documents managed by the customer to the customer user
export const superAdminsOrCustomers: Access<any, User> = ({
  req: { user },
}) => {
  if (hasRole<(typeof user.roles)[number]>("super-admin", user.roles)) {
    return true;
  }

  //  allow a customer be able to only access documents for tenants that it has control over
  if (hasRole("customer", user.roles)) {
    // get the tenants this customer has
    const tenantIdsQuery = user.tenants.map((tenant) => {
      const tenantId = (tenant.tenant as Tenant).id;
      return {
        id: {
          equals: tenantId,
        },
      };
    });

    const queryConstraint = {
      or: [...tenantIdsQuery],
    };

    return queryConstraint;
  }

  return false;
};
