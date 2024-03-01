import {axiosService} from "../AxiosServices/axiosService";
import {users} from "../../urls/urls";

const userService = {
    getAll: () => axiosService.get(`${users}`)
}

export {
    userService
}