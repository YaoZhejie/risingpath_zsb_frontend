// 匹配规则
const rules = {
  userAccount: [
    { required: true, message: '账户不小于四位',trigger: 'blur' },
    { min: 4, max: 10, message: "长度在 4 到 10个字符", trigger: "blur" }
  ],
  userPassword: [
    { required: true, message: '请输入密码' },
    { pattern: /^[a-zA-Z0-9]{6,}$/,min: 4, message: '密码不包含特殊字符,不小于八位' }
  ],
    // 验证手机号
    phone: [
      { required: true, message: '请输入手机号', trigger: 'blur' },
      { pattern: /^1[3456789]\d{9}$/, message: '请输入合法的手机号', trigger: 'blur' }
    ],

}

export {
  rules,

}
