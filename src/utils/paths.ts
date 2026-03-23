const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/DTE-Portfolio" : "";

export const getAssetPath = (path: string) => {
	// Remove leading slash from path if it exists to avoid double slashes
	const cleanPath = path.startsWith("/") ? path.slice(1) : path;
	return `${basePath}/${cleanPath}`;
};
