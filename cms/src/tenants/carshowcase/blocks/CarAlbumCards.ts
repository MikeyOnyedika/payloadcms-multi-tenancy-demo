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
      name: "defaultCar",
      label: "Default Car Image",
      type: "relationship",
      relationTo: tenantPrefix.CARSHOWCASE + "images",
    },
  ],
};

export default CarAlbumCards;
