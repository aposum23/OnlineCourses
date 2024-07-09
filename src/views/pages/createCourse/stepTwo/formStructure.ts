import {FormStructure} from "@/components/form/formSelectorTypes.ts";

export const CREATE_COURSE_STEP_TWO_FORM: FormStructure[] = [
    {
        id: 'name',
        label: 'Название урока',
        type: 'text'
    },
    {
        id: 'video',
        label: 'Видео урока',
        type: 'video'
    },
    {
        id: 'description',
        label: 'Текст к уроку',
        type: 'description',
    },
]