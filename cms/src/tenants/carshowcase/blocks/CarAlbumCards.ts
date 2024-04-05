import { Block } from "payload/types";
import { tenantPrefix } from "../../../constants";

const CarAlbumCards: Block = {
  slug: tenantPrefix.CARSHOWCASE + "car_album_cards",
  fields: [
    {
      name: "label",
      type: "text",
      label: "Label",
    },
    {
      name: "albums",
      type: "relationship",
      relationTo: tenantPrefix.CARSHOWCASE + "car_albums",
      maxDepth: 1,
      hasMany: true,
    },
  ],
};

export default CarAlbumCards;
