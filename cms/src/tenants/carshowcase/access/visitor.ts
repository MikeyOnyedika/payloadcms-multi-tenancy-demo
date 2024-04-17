import { Tenant, User } from "payload/generated-types"
import { Access } from "payload/config"
import hasRole from "../../../access/utils/hasRole";
import { tenantPrefix } from "../../../constants";

// grant access to non-registered users and to users that have carshowcase tenant as one of their tenants, but not to other users that maybe managing some other tenants
const visitor: Access<any, User> = ({ req: { user } }) => {
  // allow a non registered visitor to read images
  if (!user) {
    return true
  }

  if (hasRole("super-admin", user.roles)) {
    return true;
  }

  // check if the user is a customer user
  if (hasRole("customer", user.roles)) {
    const carshowcaseSlug = tenantPrefix.CARSHOWCASE;
    //  grant access if the user has carshowcase as one of it's tenants
    const hasCarshowcaseTenant = !!(user.tenants.find(
      (t) => (t.tenant as Tenant).slug === carshowcaseSlug
    ));

    if (hasCarshowcaseTenant) {
      return true;
    } else {
      // NOTE: that if you are logged into payload admin dashboard with a user that does not have access to the carshowcase tenant and you have the frontend for carshowcase website open on the same browser, this can trigger this block of code to return false and prevent the images from loading.
      // This is because when the <img> elements or the nextjs <Image> element on the frontend of carshowcase website makes a request to get the image from it's src, the browser will include the cookies for the user currently logged into payload admin dashboard which is not what we want. 
      // To fix this, you can run the payload admin dashboard on a different browser or log out of payload admin dashboard before running the carshowcase website fronted on that browser, just to make sure that the cookies are cleared. 
      return false;
    }
  }

  return false;
}
export default visitor
