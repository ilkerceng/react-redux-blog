import { userType } from "../user_constants";

export const get_user_type = ({ status } = {}) => {
    switch (status) {
        case "authenticated":
            return userType.USER
        default:
            return userType.GUEST
    }
}
