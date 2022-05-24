import ContentLoader from "react-content-loader";

export const TweetLoader = () => (
  <ContentLoader
    height={140}
    speed={1}
    backgroundColor={"#c3c3c3"}
    foregroundColor={"#b8b8b8"}
    viewBox="0 0 280 70"
  >
    {/* Only SVG shapes */}
    <rect x="0" y="10" rx="50" ry="50" width="25" height="25" />
    <rect x="30" y="10" rx="4" ry="4" width="80" height="9" />
    <rect x="30" y="30" rx="3" ry="3" width="250" height="8" />
    <rect x="30" y="45" rx="3" ry="3" width="250" height="8" />
  </ContentLoader>
);
