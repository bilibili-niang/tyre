import {http} from "./index";

export default {
    /**
     * 微信用户登录
     * @param params
     */
    async weixinLogin(params: {}) {
        console.log('登陆');
        return http<String[]>({
            url: '/api/wx/user/login',
            data: params,
            method: 'POST'
        })
    },
}
