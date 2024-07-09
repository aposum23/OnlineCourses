import {FormElementEnum, FormStructure} from "@/components/form/formSelectorTypes.ts";

export const CREATE_COURSE_STEP_ONE_FORM: FormStructure[] = [
    {
        id: 'name',
        label: 'Название курса',
        type: FormElementEnum.text
    },
    {
        id: 'image',
        label: 'Заставка курса',
        type: FormElementEnum.img
    },
    {
        id: 'description',
        label: 'Описание курса',
        type: FormElementEnum.description,
        maxSymbolCount: 300
    },
]