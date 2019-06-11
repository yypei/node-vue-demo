<template>
    <div>
        <div v-for="project in listData" class="project">
            <div class="project-name">
                <input type="checkbox" :val="project.code" :checked="hasPermission.indexOf(project.code)!==-1?'checked':''" @click="checkChecked(project.code,$event)">{{project.name}}
            </div>
            <div class="module-box">
                <div v-for="module in project.module" class="module">
                    <div class="module-name">
                        <input type="checkbox" :val="module.code" :checked="hasPermission.indexOf(module.code)!==-1?'checked':''" @click="checkChecked(module.code,$event)">{{module.name}}
                    </div>
                    <ul>
                        <li v-for="ability in module.ability" class="ability">
                            <input type="checkbox" :val="ability.code" :checked="hasPermission.indexOf(ability.code)!==-1?'checked':''" @click="checkChecked(ability.code,$event)">{{ability.name}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PermissionList",
        data:function(){
            return {
                listData:[
                    {
                        name:'项目1',
                        code:'#p1',
                        module:[
                            {
                                name:'模块1',
                                code:'#p1#m1',
                                ability:[
                                    {
                                        name:'功能1',
                                        code:'#p1#m1#a1'
                                    },
                                    {
                                        name:'功能2',
                                        code:'#p1#m1#a2'
                                    },
                                    {
                                        name:'功能3',
                                        code:'#p1#m1#a3'
                                    }
                                ]
                            },
                            {
                                name:'模块2',
                                code:'#p1#m2',
                                ability:[
                                    {
                                        name:'功能1',
                                        code:'#p1#m2a1'
                                    },
                                    {
                                        name:'功能2',
                                        code:'#p1#m2a2'
                                    },
                                    {
                                        name:'功能3',
                                        code:'#p1#m2a3'
                                    },
                                    {
                                        name:'功能4',
                                        code:'#p1#m2a4'
                                    },
                                    {
                                        name:'功能5',
                                        code:'#p1#m2a5'
                                    }
                                ]
                            },
                            {
                                name:'模块3',
                                code:'#p1#m3',
                                ability:[
                                    {
                                        name:'功能1',
                                        code:'#p1#m3#a1'
                                    },
                                    {
                                        name:'功能2',
                                        code:'#p1#m3#a2'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name:'项目2',
                        code:'#p2',
                        module:[
                            {
                                name:'模块1',
                                code:'#p2#m1',
                                ability:[
                                    {
                                        name:'功能1',
                                        code:'#p2#m1#a1'
                                    },
                                    {
                                        name:'功能2',
                                        code:'#p2#m1#a2'
                                    },
                                    {
                                        name:'功能3',
                                        code:'#p2#m1#a3'
                                    }
                                ]
                            },
                            {
                                name:'模块2',
                                code:'#p2#m2',
                                ability:[
                                    {
                                        name:'功能1',
                                        code:'#p2#m2#a1'
                                    },
                                    {
                                        name:'功能2',
                                        code:'#p2#m2#a2'
                                    }
                                ]
                            },
                            {
                                name:'模块3',
                                code:'#p2#m3',
                                ability:[
                                    {
                                        name:'功能1',
                                        code:'#p2#m3#a1'
                                    },
                                    {
                                        name:'功能2',
                                        code:'#p2#m3#a2'
                                    },
                                    {
                                        name:'功能3',
                                        code:'#p2#m3#a3'
                                    },
                                    {
                                        name:'功能4',
                                        code:'#p2#m3#a4'
                                    },
                                    {
                                        name:'功能5',
                                        code:'#p2#m3#a5'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name:'项目3',
                        code:'#p3',
                        module:[
                            {
                                name:'模块1',
                                code:'#p3#m1',
                                ability:[
                                    {
                                        name:'功能1',
                                        code:'#p3#m1#a1'
                                    },
                                    {
                                        name:'功能2',
                                        code:'#p3#m1#a2'
                                    },
                                    {
                                        name:'功能3',
                                        code:'#p3#m1#a3'
                                    },
                                    {
                                        name:'功能4',
                                        code:'#p3#m1#a4'
                                    },
                                    {
                                        name:'功能5',
                                        code:'#p3#m1#a5'
                                    },
                                    {
                                        name:'功能6',
                                        code:'#p3#m1#a6'
                                    }
                                ]
                            },
                            {
                                name:'模块2',
                                code:'#p3#m2',
                                ability:[
                                    {
                                        name:'功能1',
                                        code:'#p3#m2#a1'
                                    }
                                ]
                            },
                            {
                                name:'模块3',
                                code:'#p3#m3',
                                ability:[
                                    {
                                        name:'功能1',
                                        code:'#p3#m3#a1'
                                    },
                                    {
                                        name:'功能2',
                                        code:'#p3#m3#a2'
                                    },
                                    {
                                        name:'功能3',
                                        code:'#p3#m3#a3'
                                    },
                                    {
                                        name:'功能4',
                                        code:'#p3#m3#a4'
                                    },
                                    {
                                        name:'功能5',
                                        code:'#p3#m3#a5'
                                    }
                                ]
                            }
                        ]
                    }
                ],
                hasPermission:[
                    '#p1',
                    '#p1#m1',
                    '#p1#m1#a1',
                    '#p1#m1#a2',
                    '#p1#m1#a3'
                ]
            }
        },
        methods:{
            checkChecked(code,e){
                let index=this.hasPermission.indexOf(code);
                if(index===-1){
                    for(let key in this.listData){
                        console.log(key);
                        // if(this.listData[key].indexOf(code)){
                        //
                        // }
                    }
                    this.hasPermission.push(code);
                }else{
                    for(let i=this.hasPermission.length-1;i>0;i--){
                        if(this.hasPermission[i].indexOf(code)!==-1){
                            this.hasPermission.splice(i,1)
                        }
                    }
                    // this.hasPermission.splice(index,1)
                }
                // console.log(code);
            }
        }
    }
</script>

<style scoped>
    .project{
        background-color: #000;
        padding: 20px;
        color: #fff;
        margin: 20px 0;
    }
    .module-box{
        display: flex;
        flex-direction: row;
    }
    .module{
        background-color: #3a87ad;
        margin: 20px;
    }
    .project, .module, .ability{
        padding: 10px 20px;
    }
</style>