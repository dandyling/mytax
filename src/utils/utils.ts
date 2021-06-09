export const getEnumLength = (enumType: any): number => {
  return Object.keys(enumType).filter(isNaN as any).length;
};
