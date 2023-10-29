import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;

  const fileUploaded = await storage.createFile(
    "651c686ead20a868aa5d",
    ID.unique(),
    file
  );

  return fileUploaded;
};

export default uploadImage;
