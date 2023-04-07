declare namespace JSX {
    interface IntrinsicElements {
        feDropShadow: any;
    }
}

declare module '*.json';
declare module '*.png';
declare module '*.jpg';
declare module '*.md' {
    const content: string;
    export default content;
}

declare module 'classnames';
declare interface SvgrComponent
    extends React.StatelessComponent<React.SVGAttributes<SVGElement>> { }

declare module '*.svg' {
    const content: SvgrComponent;
    export default content;
}
declare module '*.scss' {
    const styles: { [className: string]: string };
    export default styles;
}
declare module '*.less' {
    const styles: { [className: string]: string };
    export default styles;
}
