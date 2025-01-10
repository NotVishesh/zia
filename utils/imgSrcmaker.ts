export const imgSrcMaker = (_ref: string) => {
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

    // Split the reference string correctly
    const parts = _ref.replace('image-', '').split('-');
    const id = parts.slice(0, -2).join('-'); // Asset ID
    const dimensions = parts.slice(-2, -1)[0]; // Dimensions
    const extension = parts.slice(-1)[0]; // Extension

    // Construct the correct URL
    const imageUrl = `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}-${dimensions}.${extension}`;

    return imageUrl;
}
