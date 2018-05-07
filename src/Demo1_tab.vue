
<template>


<el-container style="height: 500px; border: 1px solid #eee">

  <!--主部分:左侧菜单栏-->
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>业主管理</template>
        <el-menu-item-group>
          <el-menu-item index="1-1" @click="addTab(editableTabsValue2)">业主管理</el-menu-item>
          <el-menu-item index="1-2">业主拜访ggggg</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>


  <el-container>


    <div style="margin-bottom: 20px;">
      <el-button
              size="small"
              @click="addTab(editableTabsValue2)"
      >
        add tab
      </el-button>
    </div>
    <el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab">
      <el-tab-pane
              v-for="(item, index) in editableTabs2"
              :key="item.name"
              :label="item.title"
              :name="item.name"
      >
        {{item.content}}
      </el-tab-pane>
    </el-tabs>


    <!--主部分:增删改查工具栏-->
    <el-header style="text-align: right; font-size: 12px">

      <span style="float:right;">张三</span>
      <el-dropdown style="float:right;">
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item>查看用户</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-button type="primary" round >查询</el-button>
      <el-button type="primary" round >新增</el-button>
      <el-button type="primary" round >编辑</el-button>
      <el-button type="primary" round >删除</el-button>

    </el-header>


    <!--主部分:内容页-->
    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</el-container>
</template>


<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>

<script>
//    export default {
//        data() {
//            const item = {
//                date: '2016-05-02',
//                name: '王小虎',
//                address: '上海市普陀区金沙江路 1518 弄'
//            };
//            return {
//                tableData: Array(20).fill(item)
//            }
//        }
//    };

    /*自定义标签页*/
    export default {
        data() {
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            };
            return {
                tableData: Array(20).fill(item),
                editableTabsValue2: '2',
                editableTabs2: [{
                    title: 'Tab 1',
                    name: '1',
                    content: 'Tab 1 content'
                }, {
                    title: 'Tab 2',
                    name: '2',
                    content: 'Tab 2 content'
                }],
                tabIndex: 2
            }
        },
        methods: {
            addTab(targetName) {
                let newTabName = ++this.tabIndex + '';
                this.editableTabs2.push({
                    title: 'New Tab',
                    name: newTabName,
                    content: 'New Tab content'
                });
                this.editableTabsValue2 = newTabName;
            },
            removeTab(targetName) {
                let tabs = this.editableTabs2;
                let activeName = this.editableTabsValue2;
                if (activeName === targetName) {
                    tabs.forEach((tab, index) => {
                        if (tab.name === targetName) {
                            let nextTab = tabs[index + 1] || tabs[index - 1];
                            if (nextTab) {
                                activeName = nextTab.name;
                            }
                        }
                    });
                }

                this.editableTabsValue2 = activeName;
                this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
            }
        }
    }
</script>