import {FormStructure} from "@/components/form/formSelectorTypes.ts";

export const CREATE_COURSE_STEP_ONE_FORM: FormStructure[] = [
    {
        id: 'name',
        label: 'Название курса',
        type: 'text'
    },
    {
        id: 'image',
        label: 'Заставка курса',
        type: 'image'
    },
    {
        id: 'description',
        label: 'Описание курса',
        type: 'description',
        maxSymbolCount: 300
    },
]