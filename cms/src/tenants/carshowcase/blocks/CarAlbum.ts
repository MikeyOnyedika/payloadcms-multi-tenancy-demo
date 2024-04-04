import { Block } from "payload/types";
import { tenantPrefix } from "../../../constants";

const CarAlbum: Block = {
  slug: tenantPrefix.CARSHOWCASE + "car_album",
  fields: [
    {
      name: "album",
      type: "relationship",
      relationTo: tenantPrefix.CARSHOWCASE + "car_albums",
    },
  ],
};

export default CarAlbum