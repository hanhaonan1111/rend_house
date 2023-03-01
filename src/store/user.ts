import { login, LoginResponse } from "@/types/login";
import { defineStore } from "pinia";
import http from "@/utils/http";
import { ref } from "vue"
import { showFailToast, showSuccessToast } from "vant";
export let useLogin = defineStore('UserLogin',
    () => {
        let token = ref('')
        let asyncPostLogin = async function (data: login) {
            let { body } = await http.post<any, LoginResponse>(
                '/user/login',
                data
            )
            token.value = body.token
        }
        async function registerUser(data: login) {
            try {
                let { body, description, status } = await http.post<any, LoginResponse>(
                    '/user/registered',
                    data
                )
                if (status === 200) {
                    token.value = body.token;
                    showSuccessToast("操作成功");
                }
                else {
                    throw new Error(description)
                }
            } catch (e) {
                showFailToast(e.message || '操作失败');
            }

        }
        return { token, asyncPostLogin, registerUser }
    }
)