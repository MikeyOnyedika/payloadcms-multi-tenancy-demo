import { CollectionConfig } from "payload/types";
import { tenantPrefix } from "../../../constants";

export const Pages: CollectionConfig = {
  slug: tenantPrefix.VIDEOCACHE + "pages",
  fields: [
    {
      name: "metaInfo",
      type: "group",
      fields: [
        {
          name: "title",
          type: "text",
          label: "Title",
        },
        {
          name: "description",
          type: "textarea",
          label: "Description",
        },
      ],
    },
    {
        name: "content",
        type: "blocks",
        label: "Content",
        blocks: [
             
        ]
    }
  ],
};