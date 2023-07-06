interface ExampleViewModel {
    count: number;
    _increment: () => void;
    _decrement: () => void;
}
// interface LayoutModel {
interface PreviewLayoutProps {
    children: any,
    label: string,
    values: string[],
    selectedValue: string;
    setSelectedValue: (value: string) => void;
}

export { ExampleViewModel, PreviewLayoutProps }