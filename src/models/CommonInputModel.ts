import { CommonModel } from './CommonModel';

/**
 * This class is the wrapper for simplified models and the rest of the context needed for further generate typed models.
 */
export class CommonInputModel {
    models: {[key: string]: CommonModel} = {};
    // TODO: Remove it and update tests
    customizations: Object = {};
    originalInput: any = {};
}