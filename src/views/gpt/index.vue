<template>
  <div class="gpt">
    <el-row class="head" :class="{ light: routeName !== 'gpt-room' }">
      <el-col :span="6">
        <div class="logo">
          <img id="logo-white" src="@/assets/images/asus_white.png" alt="" />
          <!-- <img id="logo-blue" src="@/assets/images/asus_blue.png" alt="" /> -->
        </div>
      </el-col>
      <el-col :span="12" class="title"> </el-col>

      <el-col :span="6" class="tools">
        <el-dropdown
          @command="handleCommand"
          trigger="click"
          v-if="checkVisiable(['gpt-room'])"
        >
          <span class="el-dropdown-link">
            <img
              class="arrow_down"
              src="@/assets/images/icons/menu.png"
              alt=""
            />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="leave" :disabled="isFinished">
              <!-- <i class="bx bx-log-out-circle"></i> -->
              {{ $t("GPT.HEAD.LEAVE") }}
            </el-dropdown-item>
            <el-dropdown-item command="new">
              <!-- <i class="bx bx-message-rounded-dots"></i> -->
              {{ $t("GPT.HEAD.CREATE_NEW") }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <div class="arrow" @click="toggleDisplay">
          <img
            class="arrow_down"
            src="@/assets/images/icons/arrow_down.png"
            alt=""
          />
          <img
            class="arrow_down_black"
            src="@/assets/images/icons/arrow_down_black.png"
            alt=""
          />
        </div>
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
      }
    },
    toggleDisplay() {
      this.$store.dispatch("global/toggleDisplay");
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
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .arrow {
        cursor: pointer;
        width: 24px;
        height: 24px;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .arrow_down_black {
          display: none;
        }
      }
      .el-dropdown-link {
        cursor: pointer;
        display: block;
        width: 24px;
        height: 24px;
        margin-right: 12px;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }
  .head.light {
    background: none;
    #logo-white {
      display: none;
    }
    .tools {
      .arrow {
        .arrow_down {
          display: none;
        }
        .arrow_down_black {
          display: block;
        }
      }
    }
  }
  .main {
    flex: 1;
    position: relative;
    overflow: hidden;
  }
}
</style>
