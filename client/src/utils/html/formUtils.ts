/**
 * This interface represents an input for a form. Each form element has
 * a unique key, thereby formin a mapping. This interface represents that
 * mapping. For example: { 'username': $('#my-username-input-element') }
 */
export interface FormInput {
    /** A mapping from a unique name to its corresponding JQuery HTMLElement */
    [key: string]: JQuery<HTMLElement>;
}


/**
 * This interface contains all arguments for the 'formValidation'
 * function. It contains all the form's inputs and a validation for
 * those inputs. Additionally, there is a function 'onValid' that is
 * executed if the form was thoroughly valid and a function 'onInvalid'
 * that is executed if at least one input was invalid. Note that this
 * function is intended to be used with Bootstrap 5.
 */
export interface FormValidationArgs {
    /** The form's input. Refer to 'FormInput' for more information */
    formInput?: FormInput;
    /**
     * A mapping of each key of 'formInput' to a function that takes 'formInput'
     * as an argument and returns a boolean. This is done for checking the validity
     * of an individual input. For example:
     * {
     *      formInput: { 'username': $('#my-login-input') },
     *      validation: { 'username': inputs => myLoginCheck(inputs['username']) }
     * }
    */
    validation?: { [key: string]: (args: FormInput) => boolean };
    /**
     * A function that is executed if the form is completely valid. It takes
     * 'formInput' as an argument.
     */
    onValid?: (args: FormInput) => void;
    /**
     * A function that is executed if one or more inputs are invalid. It takes
     * 'formInput' as an argument.
     */
    onInvalid?: (args: FormInput) => void;
    /**
     * Whether to add Bootstrap classes. For a valid input, adds '.is-valid'
     * and 'is-invalid' for an invalid input.
     */
    applyBootstrap?: boolean;
}


/**
 * Validates a form. This class is intended to be used with Bootstrap 5
 * for styling. For more information, refer to 'FormValidationArgs'.
 * @param args The arguments for the validation
 */
export function formValidation(args: FormValidationArgs): void {
    if (args.formInput !== undefined && args.validation !== undefined) {
        let valid = true;
        for (let key in args.formInput) {
            if (!args.validation[key](args.formInput)) {
                valid = false;
                if (args.applyBootstrap) {
                    args.formInput[key].removeClass('is-valid');
                    args.formInput[key].addClass('is-invalid');
                }
                    
            } else if (args.applyBootstrap) {
                args.formInput[key].removeClass('is-invalid');
                args.formInput[key].addClass('is-valid');
            }
        }
        if (valid && args.onValid !== undefined)
            args.onValid(args.formInput);
        else if (!valid && args.onInvalid !== undefined)
            args.onInvalid(args.formInput);
    }
}
