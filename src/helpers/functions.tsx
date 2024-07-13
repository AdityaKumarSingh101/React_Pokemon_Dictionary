export const ToPascalCase: (value: string) => string = (value: string) => {
  return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
};
