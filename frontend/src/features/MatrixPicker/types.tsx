export type MatrixButton = {
  name: string,
  callback: string,
  backgroundColor: string,
  onClick: (callback: string) => void,
};

export interface MatrixPickerComponent {
  buttons: MatrixButton[];
}
