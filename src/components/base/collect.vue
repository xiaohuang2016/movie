<template>
  <div>
    <el-form
      ref="collectForm"
      :model="collectParams"
      size="large"
      :rules="rules"
      label-position="top"
    >
      <el-form-item label="给个评价吧?(可选): " prop="rate">
        <el-rate
          class="mar-t-8"
          v-model="collectParams.rateval"
          text-color="#ff9900"
          :colors="color"
          size="large"
          :texts="['很差', '较差', '还行', '推荐', '力荐']"
          show-text
        />
      </el-form-item>
      <el-form-item label="标签:">
        <el-tag
          v-for="tag in dynamicTags"
          :key="tag"
          class="mx-1"
          closable
          :disable-transitions="false"
          @close="handleClose(tag)"
        >
          {{ tag }}
        </el-tag>
        <el-input
          v-if="inputVisible"
          ref="saveTagInput"
          v-model="inputValue"
          class="ml-1 w-20 tag_input"
          size="small"
          @keydown.enter="handleInputConfirm"
          @blur="handleInputConfirm"
        />
        <el-button v-else class="button-new-tag ml-1" size="small" @click="showInput">
          + New Tag
        </el-button>
      </el-form-item>
      <el-form-item label="简短评论:" prop="short" class="mar-b-30">
        <el-input v-model="collectParams.short" type="textarea" />
      </el-form-item>
      <el-button
        @click="handleCollect('collectForm')"
        type="primary"
        class="submit-btn white"
        color="#d8232a"
        >保存{{ ruleStatus }}</el-button
      >
    </el-form>
  </div>
</template>

<script>
import { reactive, ref, nextTick } from "vue";
import { ElMessageBox } from "element-plus";
import axios from "axios";
import { useStore } from "vuex";
import movieList from "@/components/service/api"; // 导入我们的api接口
import { setItem, getItem } from "@/utils/storage.js";
const colors = ref(["#99A9BF", "#d8232a", "#FF9900"]);
const inputValue = ref("");
const dynamicTags = ref(['请输入你的标签']);
const inputVisible = ref(false);

export default {
  name: "collectForm",
  setup(props, { emit }) {
    const store = useStore();
    //定义·表单输入框信息
    const collectParams = reactive({
      rateval: "",
      dynamicTags: dynamicTags.value,
      short: "",
    });
    //定义校验规则 表单代码中必须以 :rules 接收
    const rules = {
      short: [{ required: true, message: "请输入简短评论", trigger: "blur" }],
    };
    // vue3 ref 获取方式
    const collectForm = ref(null);
    // 触发登录方法
    const handleCollect = () => {
      collectForm.value.validate((valid) => {
        if (valid) {
          if (collectParams.rateval > 0 && dynamicTags.value.length > 0) {
             emit("collect", collectParams);
            console.log("dynamicTags", collectParams);
          }else{
              var msg = ""
              if(collectParams.rateval == 0){
                  msg = "请先评分！"
              }else{
                msg = "请输入您的标签！"
              }
                ElMessageBox.alert(msg,
            '温馨提⽰', {
                confirmButtonText: '好的',
                type: 'warning'
            })
          }
        } else {
          return false;
        }
      });
    };
    const handleClose = (tag) => {
      dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1);
    };

    const handleInputConfirm = (e) => {
      if (inputValue.value) {
        dynamicTags.value.push(inputValue.value);
      }
      inputVisible.value = false;
      inputValue.value = "";
    };
    return {
      handleCollect,
      collectForm,
      collectParams,
      colors,
      inputValue,
      dynamicTags,
      handleClose,
      handleInputConfirm,
      inputVisible,
      rules,
    };
  },
  methods: {
    showInput() {
      this.inputVisible = true;
      this.$nextTick((_) => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
  },
};
</script>
<style>
.el-tag--large.is-closable {
  margin-bottom: 10px;
}
</style>
