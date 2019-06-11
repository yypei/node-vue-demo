<template>
    <div>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="70px" class="demo-ruleForm">
            <el-form-item label="账号" prop="user_name">
                <el-input type="password" v-model="ruleForm.user_name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input v-model="ruleForm.pass"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
        <div>3123{{userId}}</div>
    </div>
</template>

<script>
    import EmptyHeader from '@/components/EmptyHeader'
    import EmptyFooter from '@/components/EmptyFooter'
    import { createNamespacedHelpers } from 'vuex'
    const { mapState,mapMutations,mapActions } = createNamespacedHelpers('user');
    export default {
        name: "Login",
        data() {
            var checkAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('年龄不能为空'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入数字值'));
                    } else {
                        if (value < 18) {
                            callback(new Error('必须年满18岁'));
                        } else {
                            callback();
                        }
                    }
                }, 1000);
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    callback();
                }
            };
            var validateUserName = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入账号'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm: {
                    pass: '',
                    user_name: ''
                },
                rules: {
                    pass: [
                        {validator: validatePass, trigger: 'blur'}
                    ],
                    user_name: [
                        {validator: validateUserName, trigger: 'blur'}
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.axios.post('http://vue.test.com/api/login.php?action=login_fn&user_name='+this.ruleForm.user_name+'&psd='+this.ruleForm.pass)
                            .then((response)=>{
                                if(response.data.status===0){
                                   alert('登录成功');
                                }else{
                                    this.ruleForm.formMessage=response.data.message;
                                }
                            })
                            .catch((error)=>{
                                this.ruleForm.formMessage='登录失败';
                            });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        },
        created:function(){
            this.$emit('setHeader',EmptyHeader);
            this.$emit('setFooter',EmptyFooter);
        },
        computed:{
            ...mapState({
                userId:state=>{
                    console.log(state.user_id);
                    return state.user_id;
                }
            })
        }
    }
</script>

<style scoped>
    body{
        background-color: #ccc;
    }
    .demo-ruleForm{
        width: 600px;
        margin: 100px auto 0;
        border:1px solid #ddd;
        padding: 30px;
    }
</style>