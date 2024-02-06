<template>
    <div class="app-container">
      <div class="filter-container">
        <el-input  class="w-100" v-model="queryForm.keyword" placeholder="关键字搜索" />
        <el-button type="primary" :icon="Search" @click="handleSearch">搜索</el-button>
        <el-button class="green-button" @click="refreshTableInfo"  :icon="Plus">刷新</el-button>
      </div>
      <div class="table-con">
        <spurs-table
            ref="spursTableRef"
            v-bind="tableConfig"
            :queryForm="queryForm"
            :requestApi="getTableList"
            @selection-change="handleSelectionChange"
        >
          <template #state="scope">
            <el-tag type="warning" v-if="scope.row.state === 0">禁用</el-tag>
            <el-tag v-else>启用</el-tag>
          </template>
          <template #handler="scope">
           <el-button
             size="small"
             :icon="Edit"
             link
             @click="handleEditClick(scope.row)"
             >编辑</el-button
             >
           <el-button
             size="small"
             :icon="Delete"
             type="warning"
             link
             @click="deleteBtnClick(scope.row)"
             >删除</el-button>
           </template>
        </spurs-table>
      </div>
  
    </div>
  </template>
  <script setup  lang="ts">
  import {reactive,ref} from 'vue'
  import { Search,Plus,Delete,Edit } from '@element-plus/icons-vue'
  import { tableConfig } from '@/components/table/tableConfig'// 引入配置
  import SpursTable from '@/components/table/ZmhTable.vue'
  const queryForm = reactive({
    keyword: ''
  })
  const getTableList = (params: any) => {
    const tableList =[{
    nickName: '张三',
    roleName: '管理员',
    userMoney: {
        balanceMoney: 100
    },
    title: '张三是一个管理员',
    phone: '123456789',
    address: '中国',
    createTime: '2021-01-01',
    state: 1
}, {
    nickName: '李四',
    roleName: '普通用户',
    userMoney: {
        balanceMoney: 100
    },
    title: '张三是一个管理员',
    phone: '123456789',
    address: '中国',
    createTime: '2021-01-01',
    state: 1
}]
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: tableList,
          total: 2
        })
      }, 500)
    });
  };
  const spursTableRef = ref <any> ()
  const multipleSelection = ref<any>([])
  const handleSelectionChange = (val:[]) => {
    multipleSelection.value = val
    console.log(multipleSelection.value);
  }
  const handleSearch =  () => {
    // 搜索
    spursTableRef.value.handleSearch();
    console.log(spursTableRef.value.tableData);
    // spursTable.value.tableData[0].nickName = "测试"
  }
  const refreshTableInfo = () => {
    // 刷新把queryForm置空
    queryForm.keyword="";
    spursTableRef.value.refreshTableInfo();
  }
  
  
  const handleEditClick = (row: any) => {
    console.log('点击了编辑按钮，数据为：', row)
    // getTableData();
  }
  // 点击删除按钮触发事件
  const deleteBtnClick = (row: any) => {
    console.log('点击了删除按钮，数据为：', row)
  }
  </script>
  