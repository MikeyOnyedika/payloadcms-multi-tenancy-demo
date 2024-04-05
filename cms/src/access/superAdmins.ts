import { FieldAccess } from "payload/types";
import { User } from "payload/generated-types";

const superAdmins: FieldAccess<any, any, User> = ({ req }) => {
  //   check that the user making the request is a super admin
  if (req.user.roles.includes("super-admin")) {
    return true;
  }
  return false;
};

export default superAdmins;
