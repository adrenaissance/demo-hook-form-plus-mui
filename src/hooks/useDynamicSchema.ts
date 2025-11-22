import {useMemo} from "react";
import * as yup from "yup";

export interface Field {
    fieldName: string,
    fieldType: string,
    isMandatory: boolean,
    isVisible: boolean,
    numReferences?: number,
}

export const FIRST_NAME_FIELD="firstName";
export const LAST_NAME_FIELD="lastName";
export const EMAIL_FIELD="email";
export const CUSTOM_REFS="refs";

export interface IForm {
    [FIRST_NAME_FIELD]: string,
    [LAST_NAME_FIELD]: string,
    [EMAIL_FIELD]: string;
    [CUSTOM_REFS]: any[];
}

export const useDynamicSchema=() => {
    const fields=[
        {
            fieldName: FIRST_NAME_FIELD,
            fieldType: "string",
            isMandatory: false,
            isVisible: true,
            numReferences: undefined,
        },
        {
            fieldName: LAST_NAME_FIELD,
            fieldType: "string",
            isMandatory: false,
            isVisible: true,
            numReferences: undefined,
        },
        {
            fieldName: EMAIL_FIELD,
            fieldType: "email",
            isMandatory: true,
            isVisible: true,
            numReferences: undefined,
        },
        {
            fieldName: CUSTOM_REFS,
            fieldType: "array",
            isMandatory: true,
            isVisible: true,
            numReferences: 3,
            maxLen: 3,
        },
    ];

    const schema=useMemo(() => {
        let shape: Record<string, any>={};
        fields.map(f => {
            let validator=null;
            switch(f.fieldType) {
                case "string":
                    validator=yup.string();
                    break;
                case "email":
                    validator=yup.string().email();
                    break;
                case "array":
                    validator=yup
                        .array()
                        .of(
                            yup.object({
                                value: yup.string().notRequired().max(f.maxLen||Infinity, `at most ${f.maxLen} characters`)
                            })
                        )
                        .min(1, "at least one required")
                        .max(f.numReferences??1, `at most ${f.numReferences??1} required`)
                        .required()
                        .test(
                            "at-least-one",
                            "At least one field is required",
                            (arr) => Array.isArray(arr)&&arr.some(item =>
                                item&&item.value&&
                                (item.value).trim()!==""
                            )
                        );

                    break;

                default:
                    break;
            }
            if(f.isMandatory&&f.fieldType!="array") {
                validator=validator!.required('required');
            }
            if(f.isVisible) {
                shape[f.fieldName]=validator;
            }
        })
        return yup.object().shape(shape);
    }, [])
    return {schema};
}