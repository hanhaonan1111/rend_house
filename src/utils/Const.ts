export const mobileRules = [
    {
        required: true, message: '手机号码不能为空',
    },
    { pattern: /^1[3-9]\d{9}$/, message: '手机号码格式不正确', }
]


export const pwdRules = [
    {
        required: true, message: '密码不能为空'
    },
    {
        pattern: /^\w{6,12}$/, message: '密码格式不正确',
    }
]
