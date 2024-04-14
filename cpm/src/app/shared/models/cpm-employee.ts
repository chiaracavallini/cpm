import {CpmRole} from "./cpm-role";

export interface CpmEmployee {
    firstName?: string,
    lastName?: string,
    fullName?: string,
    roles?: CpmRole[]
}
