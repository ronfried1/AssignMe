declare module "react-fullpage.js" {
  import React from "react";

  interface FullpageProps {
    navigation?: boolean;
    // Add other props as needed based on your usage.
  }

  export const Fullpage: React.FC<FullpageProps>;
  export const Slide: React.FC;
}
