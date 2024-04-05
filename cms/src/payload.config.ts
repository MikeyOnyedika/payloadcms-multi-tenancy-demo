import path from "path";

import { payloadCloud } from "@payloadcms/plugin-cloud";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";

import AdminUsers from "./collections/AdminUsers";
import Tenants from "./collections/Tenants"
import VideocacheCollections from "./tenants/videocache/collections";
import VideocacheGlobals from "./tenants/videocache/globals";
import CarshowcaseCollections from "./tenants/carshowcase/collections";
import CarshowcaseGlobals from "./tenants/carshowcase/globals";

export default buildConfig({
  admin: {
    user: AdminUsers.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [
    AdminUsers,
    Tenants,

    // videocache-specific collections
    ...VideocacheCollections,

    // carshowcase-specific collections
    ...CarshowcaseCollections,
  ],
  globals: [
    // videocache-specific globals
    ...VideocacheGlobals,

    // carshowcase-specific globals
    ...CarshowcaseGlobals,
  ],
  upload: {
    limits: {
      fileSize: 1024 * 1024 * 50, // 50MB
    },
  },
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
});
