import React, { useState } from "react";

function withReadMore(WrappedComponent) {
  return function NewComponent(props) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
      setIsExpanded(!isExpanded);
    };

    return (
      <WrappedComponent
        {...props}
        isExpanded={isExpanded}
        toggleExpansion={toggleExpansion}
      />
    );
  };
}

export default withReadMore;
