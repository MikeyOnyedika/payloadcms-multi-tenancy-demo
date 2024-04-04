import { Block } from "payload/types";
import { tenantPrefix } from "../../../constants";

const Hero: Block = {
  slug: tenantPrefix.CARSHOWCASE + "hero",
  fields: [
    {
      name: "heroText",
      label: "Hero Text",
      type: "group",
      fields: [
        {
          name: "line1",
          label: "Line 1",
          type: "text",
        },
        {
          name: "line2",
          label: "Line 2",
          type: "text",
        },
      ],
    },
    {
      name: "heroImage",
      label: "Hero Image",
      type: "relationship",
      relationTo: tenantPrefix.CARSHOWCASE + "images",
    },
    {
      name: "cta",
      label: "Call-To-Action Button",
      type: "group",
      fields: [
        {
          name: "ctaText",
          label: "Button Text",
          type: "text",
        },
        {
          name: "ctaLink",
          label: "Button Link",
          type: "text",
        },
      ],
    },
  ],
};

export default Hero;
