<template>
  <div>
    <srm-form
      v-model="searchForm"
      form-name="searchForm"
      :inline="true"
      :form-items="queryColumns"
      :show-back="false"
      submit-msg="搜索"
      @submit="refresh"
      @after-reset="refresh"
    />
    <srm-table
      :source-data="tableData"
      :delete-visible="false"
      :select-visible="false"
      :columns="columns"
      :total="total"
      :page-request="listQuery"
      :loading="listLoading"
      :export-visible="false"
      @changePage="changePage"
    >
      <el-table-column slot="operation" label="操作" width="180" align="center">
        <template slot-scope="scope">
          <el-button type="text" @click="setItem(scope.row, 'detail')">查看</el-button>
          <el-button type="text" @click="setItem(scope.row, 'edit')">编辑</el-button>
          <el-button type="text" @click="setItem(scope.row, 'delete')">删除</el-button>
        </template>
      </el-table-column>
    </srm-table>
  </div>
</template>
<script>
import {
  fetchList
} from '@/api/article'
import { statusMap } from 'assets/data-maps'
import pageMixin from '@/mixins/pageMixin'
export default {
  name: 'TableExample1',
  mixins: [pageMixin],
  data() {
    return {
      queryColumns: [
        {
          tag: 'input',
          itemAttrs: {
            label: '用户名称'
          },
          attrs: {
            key: 'nickname',
            placeholder: '请输入用户名称'
          }
        },
        {
          tag: 'select',
          itemAttrs: {
            label: '是否会员'
          },
          attrs: {
            key: 'status',
            options: [
              { label: '会员', value: 1 },
              { label: '非会员', value: 0 }
            ]

          }
        }
      ],
      fetchList,
      columns: [
        { type: 'index', label: '序号' },
        { prop: 'avatar', label: '头像', isImg: true },
        { prop: 'nickname', label: '用户名称' },
        { prop: 'dateout', label: '会员到期日' },
        { prop: 'lastlogin', label: '上次登录' },
        { prop: 'readnum', label: '阅读文章' },
        { prop: 'starnum', label: '点赞数量' },
        { prop: 'follownum', label: '收藏数量' },
        // { prop: 'title', label: '标题', 'show-overflow-tooltip': true, width: 300 },
        // { prop: 'image_uri', label: '封面', isImg: true },
        { prop: 'fee', label: '产生费用(元)' },
        // { prop: 'fee', label: '当前状态', formatter: this.statusFormat },
        { slot: 'operation' }
      ]
    }
  },
  methods: {
    statusFormat(row, column, cellvalue) {
      return statusMap.find(item => item.value === cellvalue).label
    },
    setItem(item, type) {
      switch (type) {
        case 'delete':
          this.checkDialogItem = item
          break
        case 'detail':
          this.$router.push({ name: 'ArticleDetail', params: {
            id: item.id
          }})
          break
        case 'edit':
          // this.$router.push(`/article/edit/${item.id}`)
          break
        case 'create':
          // this.$router.push('/article/create')
          break
        default:
          break
      }
    }
  }
}
</script>
