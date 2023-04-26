import { ICONS } from "@constants/file.constant";

export const getIconFile = (type: string): string => {
  const [category, extension] = type.split('/');
  if (category === 'image') {
    return ICONS[extension as keyof typeof ICONS] || 'bxs-file-image';
  }
  return ICONS[extension as keyof typeof ICONS] || 'bxs-file';
};
