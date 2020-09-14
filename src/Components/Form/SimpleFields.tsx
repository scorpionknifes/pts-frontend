import React, { ChangeEvent } from 'react'
import { TextField } from '@material-ui/core'

type SimpleTextFieldProps = {
    name: string,
    required?: boolean,
    value: string,
    onChange: (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
    helper: string,
    disabled?: boolean
}

const SimpleTextField = (props: SimpleTextFieldProps) => {
    return (
        <TextField
            label={props.name}
            style={{ margin: 8 }}
            placeholder={props.name}
            required={props.required}
            value={props.value}
            onChange={props.onChange}
            helperText={props.helper}
            disabled={props.disabled}
            fullWidth
            InputLabelProps={{
                shrink: true,
            }}
            multiline
        />
    )
}

export { SimpleTextField }