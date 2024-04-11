import { CollectionConfig } from "payload/types";
import anyone from "../access/anyone";
import superAdmins from "../access/superAdmins";
import superAdminsOrSelf from "../access/superAdminsOrSelf";

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
    defaultColumns: ["username", "roles"],
    
  },
  access: {
    create: superAdmins,
    read: superAdminsOrSelf,
    delete: superAdminsOrSelf, // non-superadmin users can only delete themselves. But admin user can delete user
    update: superAdminsOrSelf,
  },
  fields: [
    {
      name: "username",
      type: "text",
      label: "Username",
    },
    {
      name: "roles",
      type: "select",
      hasMany: true,
      required: true,
      access: {
        read: anyone,
        update: superAdmins,
      },
      options: [
        {
          label: "Super Admin",
          value: "super-admin",
        },
        {
          label: "Customer",
          value: "customer",
        },
      ],
    },
    {
      name: "tenants",
      type: "array",
      label: "Tenants",
      fields: [
        {
          name: "tenant",
          type: "relationship",
          relationTo: "tenants",
          label: "Tenant"
        },
        {
          name: "roles",
          type: "select",
          label: "Roles",
          required: true,
          hasMany: true,
          options: [
            {
              label: "Admin",
              value: "admin",
            },
            {
              label: "User",
              value: "user",
            },
          ],
        },
      ],
    },
  ],
};

export default Users;
