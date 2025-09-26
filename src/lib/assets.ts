/**
 * Get the correct asset URL for the current environment
 * In development: /image.jpg
 * In production (GitHub Pages): /damclub-boost/image.jpg
 */
export function getAssetUrl(path: string): string {
  const basePath = import.meta.env.BASE_URL;
  // Ensure the path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalizedPath.substring(1)}`;
}