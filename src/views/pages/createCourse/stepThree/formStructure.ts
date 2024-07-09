import {FormStructure} from "@/components/form/formSelectorTypes.ts";

export const CREATE_COURSE_STEP_THREE_FORM: FormStructure[] = [
    {
        id: 'tags',
        label: 'Теги курса',
        type: 'text'
    },
    {
        id: 'price',
        label: 'Цена курса, руб.',
        type: 'number',
        minimalValue: 0
    },
]