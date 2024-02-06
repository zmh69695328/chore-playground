import { reactive, onMounted,ref } from 'vue'
export function useTable(loadDataFunc: Function) {
    let loading = ref(true)
    let tableData = ref()
    let total = ref(0)
    const pagination = reactive({
        page: 1,
        pageSize: 10,
        pageNum: 1
    })
    const getTableData = async () => {
        loading.value = true;
        const res = await loadDataFunc({...pagination})
        tableData.value = res.data;
        total.value = res.total
        loading.value = false;
    }
    onMounted(() => {
        getTableData()
    })
    // 搜索
    const handleSearch = () => {
        pagination.page = 1
        getTableData()
    }

    return {
        loading,
        tableData,
        total,
        pagination,
        handleSearch
    }
}
