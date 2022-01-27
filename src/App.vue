<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div class="block">
    <span class="demonstration">When you have few pages</span>
    <el-pagination layout="prev, pager, next"
                   :total="this.tableData.length"
                   :page-size="this.PAGE_SIZE"
                   @current-change="setPage"
    ></el-pagination>
  </div>
  <el-table
      :data="pagedTableData"
      stripe
      style="width: 100%">
    <el-table-column
        prop="id"
        label="ID"
        width="150">
    </el-table-column>
  </el-table>
</template>
<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {ModelManager} from "@/model/modelManager";
import {CommonEvent} from "@/events/commonEvent";

@Options({
  components: {},
  computed: {
    pagedTableData() {
      let data = this.tableData.slice(this.PAGE_SIZE * this.page - this.PAGE_SIZE, this.PAGE_SIZE * this.page);
      return data;
    }
  },
})
export default class App extends Vue {
  private page?: number = 1;
  private PAGE_SIZE = 5;
  private tableData?: any = [];

  mounted() {
    const get = (e: CommonEvent) => {
      this.getCompleteHandler(e)
    }
    let modelManager: ModelManager = ModelManager.getInstance();
    modelManager.addEventListener(CommonEvent.MODEL_GET_COMPLETE, get);
    modelManager.get();
  }

  private getCompleteHandler = (e: CommonEvent): void => {
    let data: any[] = e.data.data;
    this.tableData = data;
  }
  private setPage = (val: number) => {
    this.page = val;
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
