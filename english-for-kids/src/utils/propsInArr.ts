export const tableDatas = <T extends Record<string, unknown>>(
  props: T
): T[keyof T][] => {
  return (Object.keys(props) as Array<keyof T>).map((key) => props[key]);
};
