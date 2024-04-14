export type Header = {
  companyName: string;
  globalType: string;
  createdAt: string;
  updatedAt: string;
  id: string;
};

export type Footer = {
  copyrightNotice: string;
  globalType: string;
  createdAt: string;
  updatedAt: string;
  id: string;
};

type MetaData = {
  title: string;
  description: string;
};

export type HomePage = {
  id: string;
  slug: string;
  metaData: MetaData;
  content: [HeroSection, PartnersSection, SocialLinks, CarAlbumsPreview];
  createdAt: string;
  updatedAt: string;
};

export type HeroSection = {
  heroText: {
    line1: string;
    line2: string;
  };
  heroImage: {
    sizes: {
      large: ImgSize;
    };
  } & Img;
  cta: {
    ctaText: string;
    ctaLink: string;
  } & Block;
};

type Block = {
  id: string;
  blockName: string;
  blockType: string;
};

export type PartnersSection = {
  label: string;
  partners: Partner[];
} & Block;

type Partner = {
  name: string;
  logo: Img;
  id: string;
};

type Img = {
  id: string;
  altText: string;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  createdAt: string;
  updatedAt: string;
  url: string;
};

type ImgSize = {
  width: number;
  height: number;
  mimeType: string;
  filename: string;
  filesize: number;
  url: string;
};

export type SocialLinks = {
  label: string;
  links: SocialLink[];
} & Block;

type SocialLink = {
  name: string;
  url: string;
  logo: Img;
  id: string;
};

export type CarAlbumsPreview = {
  label: string;
  albums: {
    id: string;
    slug: string;
    metaData: MetaData;
    cars: {
      modelName: string;
      image: string;
      id: string;
    }[];
    backgroundImage: Img & {
      sizes: {
        large: ImgSize;
      };
    };
  }[];
} & Block;

export type CarAlbum = {
  id: string;
  slug: string;
  metaData: MetaData;
  cars: {
    modelName: string;
    image: Img;
    id: string;
  }[];
  backgroundImage: Img;
};

export type FetchHeaderResponse =
  | { status: "success"; data: Header }
  | {
      status: "error";
      message: string;
    };

export type FetchFooterResponse =
  | { status: "success"; data: Footer }
  | {
      status: "error";
      message: string;
    };

export type FetchHomePageResponse =
  | {
      status: "success";
      data: {
        docs: [HomePage];
        totalDocs: number;
        limit: number;
        totalPages: number;
        page: number;
        pagingCounter: number;
        hasPrevPage: boolean;
        hasNextPage: boolean;
        prevPage: number | null;
        nextPage: number | null;
      };
    }
  | {
      status: "error";
      message: string;
    };
// export type FetchResultStatus = "error" | "success";

export type FetchCarCategoryResponse =
  | {
      status: "success";
      data?: CarAlbum;
      message?: string;
    }
  | {
      status: "error";
      message: string;
    };

export type FetchCarCategorySlugsResponse =
  | {
      status: "success";
      data: string[];
    }
  | {
      status: "error";
      message: string;
    };
