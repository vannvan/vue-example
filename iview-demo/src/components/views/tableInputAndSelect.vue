
<template>
     <Table border :columns="columns" :data="data"></Table>
 </template>



<script>
    export default {
        name: "meeting",
        data() {
　　　　　　 let t = this 
            return {
                columns: [
                    {
                        title: '责任人',
                        key: 'associated',
                        width: 100,
                        align: 'center',
                    },
                    {
                        title: '预计工时',
                        key: 'attendee',
                        width: 100,
                        align: 'center',
                        render:(h,params) => {
                            return h('Input',{
                                props: {
                                    value:'',
                                    size:'small',
                                },
                                on: {
                                    input: (val) => {
                                        t.data[params.index].estimateTime = val
                                    }
                                },
                            })
                        }
                    },
                    {
                        title: '实际工时',
                        key: 'state',
                        width: 100,
                        align: 'center',
                        render:(h,params) => {
                            return h('Input',{
                                props: {
                                    value:'',
                                    size:'small',
                                },
                                on: {
                                    input: (val) => {
                                        t.data[params.index].actualTime = val
                                    }
                                },

                            })
                        }
                    },
                    {
                        title: 'WorkHover状态',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('Select',{
                                    props:{
                                    },
                                    on: {
                                        'on-change':(event) => {
                                            this.data[params.index].volumeType = event;
                                        }
                                    },
                                },
                                params.row.action.map((item) =>{
                                    return h('Option', {
                                        props: {
                                            value: item.value,
                                            label: item.name
                                        }
                                    })
                                })
                            )
                        }
                    },

                ],
                data: [
                    {
                        associated: '123',
                        action:[
                            {
                                value:0,
                                name:'select A'
                            },
                            {
                                value:1,
                                name:'select B'
                            },
                        ]
                    },
                    {
                        associated: '123',
                        action:[
                            {
                                value:0,
                                name:'select A'
                            },
                            {
                                value:1,
                                name:'select B'
                            },
                        ]
                    },
                ],
            }
        },
        methods: {}
    };
</script>