import hasRole from "./utils/hasRole";

const admins = ({ req }) => {
  // grant acces to any admin, super admin user or customer user
  if (
    hasRole("super-admin", req.user.roles) ||
    hasRole("customer", req.user.roles)
  ) {
    return true;
  }

  return false;
};

export default admins;
