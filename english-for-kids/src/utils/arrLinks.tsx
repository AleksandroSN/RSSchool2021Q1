interface LinkData {
  link: string;
  linkName: string;
}

const basePath = "/game";

export const ArrLinks: LinkData[] = [
  {
    link: basePath,
    linkName: "Main Page",
  },
  {
    link: `${basePath}/1`,
    linkName: "Action (set A)",
  },
  {
    link: `${basePath}/2`,
    linkName: "Action (set B)",
  },
  {
    link: `${basePath}/3`,
    linkName: "Animal (set A)",
  },
  {
    link: `${basePath}/4`,
    linkName: "Animal (set B)",
  },
  {
    link: `${basePath}/5`,
    linkName: "Clothes",
  },
  {
    link: `${basePath}/6`,
    linkName: "Emotions",
  },
  {
    link: `${basePath}/7`,
    linkName: "Berries",
  },
  {
    link: `${basePath}/8`,
    linkName: "Furniture",
  },
  {
    link: `${basePath}/statistics`,
    linkName: "Statistics",
  },
];
