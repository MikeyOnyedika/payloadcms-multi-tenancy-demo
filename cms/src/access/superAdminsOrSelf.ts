import { Access } from "payload/config";
import { User } from "payload/generated-types";
import { FieldAccess } from "payload/types";

const superAdminsOrSelf: Access<any, User>  = ({ req }) => {
  if (!req.user){
    return false;
  }

  // grant permissioni if it's a super admin 
  if (req.user.roles.includes("super-admin")) {
    return true;
  }

  return {
    id: {
      // access is granted to this user only on documents within the User collection where id is the user's id. a.k.a only their data
      equals: req.user.id,
    },
  };
};

export default superAdminsOrSelf