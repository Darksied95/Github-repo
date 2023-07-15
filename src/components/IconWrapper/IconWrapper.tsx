import React from "react";

type IconWrapperProps = {
  children: React.ReactNode;
};

const IconWrapper: React.FC<IconWrapperProps> = ({ children }) => {
  return (
    <div className="p-2 border-solid border border-header-icon rounded-md">
      {children}
    </div>
  );
};
export default IconWrapper;
