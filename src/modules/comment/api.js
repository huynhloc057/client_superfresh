export const createComment = async (
  text,
  parentId = null,
  productId = null,
  userId = null,
  username = null,
  profilePicture = null
) => {
  return {
    _id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    productId,
    userId,
    username,
    profilePicture,
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
