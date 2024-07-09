export enum FormElementEnum {
    text = 'text',
    select = 'select',
    num = 'number',
    img = 'image',
    description = 'description',
    video = 'video'
}

export interface FormStructure {
    id: string;
    label: string;
    type: FormElementEnum;
    maxSymbolCount?: number;
    minimalValue?: number;
}

export type FORM_SELECTOR_PROPS = {
    formStructure: FormStructure[]
}