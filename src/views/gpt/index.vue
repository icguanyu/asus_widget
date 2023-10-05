<template>
  <div class="gpt">
    <el-row class="head">
      <el-col :span="6">
        <div class="logo">
          <img id="logo-white" src="@/assets/images/asus_white.png" alt="" />
          <img id="logo-blue" src="@/assets/images/asus_blue.png" alt="" />
        </div>
      </el-col>
      <el-col :span="12" class="title"> </el-col>

      <el-col :span="6" class="tools">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            <img src="@/assets/images/icons/arrow_down.png" alt="" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="toggle">
              <i class="bx bx-hide"></i>
              Hide
            </el-dropdown-item>
            <el-dropdown-item
              command="leave"
              v-if="checkVisiable(['gpt-room'])"
              :disabled="isFinished"
            >
              <i class="bx bx-log-out-circle"></i>
              {{ $t("GPT.HEAD.LEAVE") }}
            </el-dropdown-item>
            <el-dropdown-item command="new" v-if="checkVisiable(['gpt-room'])">
              <i class="bx bx-message-rounded-dots"></i>
              {{ $t("GPT.HEAD.CREATE_NEW") }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "gpt-index",
  data() {
    return {
      hideNav: false,
      agree: false,
    };
  },
  methods: {
    checkVisiable(whiteList) {
      if (whiteList) {
        return whiteList.includes(this.routeName);
      } else {
        return true;
      }
    },
    handleCommand(command) {
      // leave/new/...
      if (command === "new") {
        this.$store.dispatch("gpt/createNewRoom");
      } else if (command === "leave") {
        this.$store.dispatch("gpt/closeRoom");
      } else if (command === "toggle") {
        this.$store.dispatch("global/toggleDisplay");
      }
    },
  },
  computed: {
    routeName() {
      return this.$route.name;
    },
    isFinished() {
      return this.$store.state.gpt.botRoom.isFinished;
    },
  },
};
</script>

<style lang="scss" scoped>
.gpt {
  // border: 2px solid red;
  margin: auto;
  width: 100%;
  height: 100%;
  background-color: white;
  flex: 1;
  display: flex;
  flex-direction: column;
  .head {
    width: 100%;
    background-color: #006ce1;
    padding: 10px 20px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 62px;
      height: 13px;
    }
    .tools {
      cursor: pointer;
      .el-dropdown-link {
        display: block;
        width: 20px;
        height: 20px;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
    .tools {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    .logo {
      #logo-blue {
        display: none;
      }
    }
  }
  .head.light {
    background: none;
    #logo-blue {
      display: block;
    }
    #logo-white {
      display: none;
    }
  }
  .main {
    flex: 1;
    position: relative;
    overflow: hidden;
  }
}
</style>
