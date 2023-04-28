const MONGO_ID = /^[0-9a-fA-F]{24}$/;

export const isMongoId = (id: string): boolean => MONGO_ID.test(id);
