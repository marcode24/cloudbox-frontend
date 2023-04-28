export const MAX_FILE_SIZE = 2000000;
export const ALLOWED_FILE_TYPES = [
  'image/png',
  'image/jpeg',
  'image/jpg',
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx
];

export const ICONS = {
  png: 'bxs-file-png',
  jpg: 'bxs-file-jpg',
  jpeg: 'bxs-file-image',
  pdf: 'bxs-file-pdf',
  docx: 'bxs-file',
} as const;

export const ALLOWED_FILE_EXTENSIONS = [
  'png',
  'jpg',
  'jpeg',
  'pdf',
  'docx',
];
