import path from "path";

import { payloadCloud } from "@payloadcms/plugin-cloud";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";

import AdminUsers from "./collections/AdminUsers";
import VideocacheCollections from "./videocache/collections";
import VideocacheGlobals from "./videocache/globals"

export default buildConfig({
  admin: {
    user: AdminUsers.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [
    AdminUsers,

    // videocache-specific collections
    ...VideocacheCollections,
  ],
  globals: [
    ...VideocacheGlobals
  ],
  upload: {
    limits: {
      fileSize: 1024 * 1024 * 50, // 50MB
    }
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
