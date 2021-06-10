export const getEnumLength = (
  enumType: Record<number | string, number | string>
): number => {
  const stringKeys = Object.keys(enumType).filter((key) => {
    const numberKey = Number(key);
    return isNaN(numberKey);
  });
  return stringKeys.length;
};
