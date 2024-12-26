
  declare module '*.svg' {
    import React from 'react';
    const ReactComponent: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export { ReactComponent };
    const content: string;
    export default content;
  }
    