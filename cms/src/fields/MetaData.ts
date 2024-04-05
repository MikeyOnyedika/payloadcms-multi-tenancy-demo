import { Field } from "payload/types";

const MetaData: Field = {
  type: "group",
  name: "metaData",
  admin: {
    position: "sidebar",
  },
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
};

export default MetaData;
