import {FormElementEnum, FormStructure} from "@/components/form/formSelectorTypes.ts";

export const CREATE_COURSE_STEP_TWO_FORM: FormStructure[] = [
    {
        id: 'name',
        label: 'Название урока',
        type: FormElementEnum.text
    },
    {
        id: 'video',
        label: 'Видео урока',
        type: FormElementEnum.video
    },
    {
        id: 'description',
        label: 'Текст к уроку',
        type: FormElementEnum.description,
    },
]