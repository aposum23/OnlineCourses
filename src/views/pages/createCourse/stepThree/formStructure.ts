import {FormElementEnum, FormStructure} from "@/components/form/formSelectorTypes.ts";

export const CREATE_COURSE_STEP_THREE_FORM: FormStructure[] = [
    {
        id: 'tags',
        label: 'Теги курса',
        type: FormElementEnum.text
    },
    {
        id: 'price',
        label: 'Цена курса, руб.',
        type: FormElementEnum.num,
        minimalValue: 0
    },
]