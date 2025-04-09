import React, { memo } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  className = "",
}) => {
  return (
    <div className={`mb-6 text-left ${className}`}>
      <h2 className="font-['Neue Plak'] font-bold text-[22px] mb-1">{title}</h2>
      {subtitle && (
        <p className="font-['Neue Plak'] font-normal text-[14px] text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default memo(SectionHeading);
